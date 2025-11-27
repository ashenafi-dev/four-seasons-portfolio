# 🌸 Four Seasons Portfolio - Deployment Guide

This guide provides detailed instructions for deploying the Four Seasons Portfolio in different environments.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Production Build](#production-build)
- [Deployment Platforms](#deployment-platforms)
  - [Vercel (Recommended)](#vercel-recommended)
  - [Netlify](#netlify)
  - [AWS Amplify](#aws-amplify)
  - [Docker](#docker)
  - [Self-Hosted](#self-hosted)
- [Environment Variables](#environment-variables)
- [Post-Deployment Checklist](#post-deployment-checklist)

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | ≥ 18.17 |
| npm | ≥ 9.0 |

## Local Development

### Start Development Server

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`.

### Development Features

- **Hot Reload**: Changes are reflected immediately
- **Error Overlay**: Detailed error messages in browser
- **TypeScript**: Full type checking and IntelliSense

## Production Build

### Build the Application

```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

### Build Output

The build process generates:
- Optimized JavaScript bundles
- Static HTML files
- CSS with unused styles removed
- Compressed assets

## Deployment Platforms

### Vercel (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js.

#### Option 1: Deploy via Git

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

#### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

#### Vercel Configuration

Create `vercel.json` for custom settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### Netlify

#### Option 1: Deploy via Git

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

#### Option 2: Deploy via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

#### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

### AWS Amplify

#### Setup Steps

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "Connect app"
3. Select your Git provider
4. Choose your repository and branch
5. Configure build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

6. Click "Save and deploy"

### Docker

#### Dockerfile

Create `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  portfolio:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### Build and Run

```bash
# Build image
docker build -t four-seasons-portfolio .

# Run container
docker run -p 3000:3000 four-seasons-portfolio

# Or use docker-compose
docker-compose up -d
```

### Self-Hosted

#### Using PM2 (Node Process Manager)

1. Install PM2:
```bash
npm install -g pm2
```

2. Build the application:
```bash
npm run build
```

3. Create PM2 ecosystem file (`ecosystem.config.js`):
```javascript
module.exports = {
  apps: [{
    name: 'four-seasons-portfolio',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
```

4. Start with PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### Nginx Configuration

Create nginx configuration for reverse proxy:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### SSL with Let's Encrypt

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo certbot renew --dry-run
```

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | - |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | - |

### Setting Environment Variables

#### Local Development

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Production (Vercel)

1. Go to Project Settings → Environment Variables
2. Add variables for Production/Preview/Development

#### Production (Docker)

```yaml
# docker-compose.yml
environment:
  - NODE_ENV=production
  - NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Post-Deployment Checklist

### ✅ Security

- [ ] HTTPS enabled (SSL certificate)
- [ ] Security headers configured
- [ ] No sensitive data exposed
- [ ] Content Security Policy set

### ✅ Performance

- [ ] Images optimized
- [ ] CSS/JS minified
- [ ] Caching configured
- [ ] CDN enabled (if applicable)

### ✅ SEO

- [ ] Meta tags present
- [ ] Open Graph tags configured
- [ ] Robots.txt present
- [ ] Sitemap generated

### ✅ Monitoring

- [ ] Error tracking set up
- [ ] Analytics configured
- [ ] Uptime monitoring active
- [ ] Performance monitoring enabled

### ✅ Testing

- [ ] All pages accessible
- [ ] Forms working
- [ ] Links functional
- [ ] Mobile responsive
- [ ] Cross-browser compatible

## Troubleshooting

### Build Failures

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### 404 Errors After Deploy

Ensure your hosting platform supports Next.js routing:
- Vercel: Automatic
- Netlify: Install `@netlify/plugin-nextjs`
- Other: May need custom rewrite rules

### Performance Issues

1. Check bundle size: `npm run build` shows sizes
2. Enable compression in production
3. Use image optimization
4. Enable caching headers

---

For additional help, see our [Usage Guide](./USAGE.md) or open an issue on GitHub.
