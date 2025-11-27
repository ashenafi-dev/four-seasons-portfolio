# 🌸 Four Seasons Portfolio - Usage Guide

This guide provides step-by-step instructions for installing, configuring, and running the Four Seasons Portfolio project.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Version | Check Command |
|-------------|---------|---------------|
| Node.js | ≥ 18.17 | `node --version` |
| npm | ≥ 9.0 | `npm --version` |
| Git | ≥ 2.0 | `git --version` |

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ashenafi-dev/four-seasons-portfolio.git
cd four-seasons-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📁 Project Structure

```
four-seasons-portfolio/
├── docs/                    # Documentation files
│   ├── DIFFERENTIATION.md   # What makes this unique
│   ├── USAGE.md            # This file
│   ├── DEPLOYMENT.md       # Deployment instructions
│   └── CONTRIBUTING.md     # Contribution guidelines
├── public/                  # Static assets
│   ├── favicon.ico
│   └── [images, fonts, etc.]
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles & CSS variables
│   │   ├── layout.tsx      # Root layout with metadata
│   │   └── page.tsx        # Main portfolio page
│   └── components/          # React components
│       ├── layout/          # Header, Footer
│       ├── sections/        # All 11 sections
│       └── ui/              # Reusable UI components
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
└── README.md               # Project overview
```

## ⚙️ Configuration

### Updating Personal Information

#### 1. Hero Section (`src/components/sections/Hero.tsx`)

```tsx
// Update these values with your information
<h1>Hello, I'm <span>Your Name</span></h1>
<p>Full-Stack Developer | Building Scalable Web Solutions</p>
```

#### 2. About Section (`src/components/sections/About.tsx`)

Update the narrative sections with your personal story:
- Origin Story
- Journey & Growth
- Core Philosophy
- Beyond the Code
- Future Aspirations

#### 3. Experience Section (`src/components/sections/Experience.tsx`)

Modify the `experiences` array:

```tsx
const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Your Job Title",
    organization: "Company Name",
    period: "2022 - Present",
    description: "Brief description of your role...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
    technologies: ["React", "Node.js", "TypeScript"],
  },
  // Add more experiences...
];
```

#### 4. Skills Section (`src/components/sections/Skills.tsx`)

Update the `skillCategories` array with your skills:

```tsx
const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "TypeScript", level: "Expert" },
      { name: "Python", level: "Proficient" },
      // Add your skills...
    ],
  },
  // Add more categories...
];
```

#### 5. Project Sections

Update each seasonal project file:
- `ProjectAutumn.tsx` - Autumn-themed project
- `ProjectWinter.tsx` - Winter-themed project
- `ProjectSpring.tsx` - Spring-themed project
- `ProjectSummer.tsx` - Summer-themed project

```tsx
const autumnProject: Project = {
  title: "Your Project Name",
  tagline: "Brief project tagline",
  description: "Detailed description...",
  features: ["Feature 1", "Feature 2"],
  technologies: ["Tech 1", "Tech 2"],
  role: "Your role in the project",
  challenges: "Key challenges overcome",
  liveUrl: "https://your-live-url.com",
  githubUrl: "https://github.com/your-repo",
};
```

#### 6. Testimonials Section (`src/components/sections/Testimonials.tsx`)

Update the `testimonials` array:

```tsx
const testimonials: Testimonial[] = [
  {
    quote: "Testimonial text...",
    name: "Person Name",
    title: "Their Title",
    company: "Company",
    relationship: "Former Manager",
    avatar: "👩‍💼",
  },
  // Add more testimonials...
];
```

#### 7. Contact Section (`src/components/sections/Contact.tsx`)

Update contact information:
- Email address
- Location
- Social media links

### Styling Customization

#### Changing Theme Colors

Edit `src/app/globals.css`:

```css
:root {
  /* Primary colors */
  --primary: #your-color;
  
  /* Seasonal colors */
  --autumn-primary: #your-autumn-color;
  --winter-primary: #your-winter-color;
  --spring-primary: #your-spring-color;
  --summer-primary: #your-summer-color;
}
```

#### Adding Custom Fonts

1. Add font files to `public/fonts/`
2. Update `src/app/globals.css`:

```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/your-font.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

body {
  font-family: 'YourFont', system-ui, sans-serif;
}
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |

## 🔧 Adding New Sections

### Step 1: Create Component

Create a new file in `src/components/sections/`:

```tsx
// src/components/sections/NewSection.tsx
"use client";

export default function NewSection() {
  return (
    <section id="new-section" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2>New Section</h2>
        {/* Your content */}
      </div>
    </section>
  );
}
```

### Step 2: Export Component

Update `src/components/sections/index.ts`:

```tsx
export { default as NewSection } from "./NewSection";
```

### Step 3: Add to Page

Update `src/app/page.tsx`:

```tsx
import { NewSection } from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Other sections */}
      <NewSection />
    </div>
  );
}
```

### Step 4: Add Navigation (Optional)

Update `src/components/layout/Header.tsx`:

```tsx
const navLinks = [
  // Existing links...
  { name: "New Section", href: "#new-section" },
];
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Module not found errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

#### 2. Build errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### 3. Style issues

```bash
# Make sure Tailwind is properly configured
npx tailwindcss init -p
```

#### 4. TypeScript errors

Check `tsconfig.json` for proper path aliases:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## 🆘 Getting Help

If you encounter issues:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [GitHub Issues](https://github.com/ashenafi-dev/four-seasons-portfolio/issues)
3. Open a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (Node version, OS, etc.)

---

Happy coding! 🌸
