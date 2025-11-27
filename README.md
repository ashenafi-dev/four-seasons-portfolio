# 🌸 Four Seasons Portfolio

A unique, modern developer portfolio showcasing projects through the lens of four seasons. Built with Next.js 15, TypeScript, and Tailwind CSS v4.

![Four Seasons Portfolio](https://img.shields.io/badge/Portfolio-Four%20Seasons-orange?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Overview

The Four Seasons Portfolio is a thematic developer portfolio that guides visitors through a captivating journey across your professional experience, skills, and projects. Each project is uniquely themed to represent a season, creating a memorable and visually engaging experience.

### 🎨 Seasonal Themes

- **🍂 Autumn** - Warm, harvest-inspired tones for mature, production-ready projects
- **❄️ Winter** - Cool, crisp aesthetics for analytical and data-driven projects
- **🌷 Spring** - Fresh, vibrant colors for innovative and growth-oriented projects
- **☀️ Summer** - Bright, energetic palette for high-impact consumer-facing projects

## 🚀 Key Features

- **11 Distinct Sections** - Hero, About, Experience, Skills, Process, 4 Seasonal Projects, Testimonials, Contact
- **Smart Header** - Auto-hides on scroll down, reappears on scroll up
- **Responsive Design** - Optimized for all device sizes
- **Accessible** - WCAG 2.1 AA compliant with keyboard navigation
- **Dark Mode Support** - Automatic detection of user preference
- **Contact Form** - Client-side validation with success states
- **Smooth Animations** - Subtle entrance animations and seasonal effects

## 📦 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15.5 | React framework with App Router |
| [React](https://react.dev/) | 19.1 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS |
| [ESLint](https://eslint.org/) | 9.x | Code linting |

## 🛠️ Installation

### Prerequisites

- Node.js ≥ 18.17
- npm ≥ 9.0

### Quick Start

```bash
# Clone the repository
git clone https://github.com/ashenafi-dev/four-seasons-portfolio.git

# Navigate to project directory
cd four-seasons-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📝 Usage

### Customizing Content

1. **Personal Info** - Update `src/components/sections/Hero.tsx` with your name and title
2. **About Section** - Modify `src/components/sections/About.tsx` with your story
3. **Experience** - Edit the `experiences` array in `src/components/sections/Experience.tsx`
4. **Skills** - Update `skillCategories` in `src/components/sections/Skills.tsx`
5. **Projects** - Customize each seasonal project in `src/components/sections/Project*.tsx`
6. **Testimonials** - Add your testimonials in `src/components/sections/Testimonials.tsx`
7. **Contact** - Update contact info in `src/components/sections/Contact.tsx`

### Customizing Styles

Edit CSS variables in `src/app/globals.css` to change:
- Theme colors
- Seasonal palettes
- Animation timings

See the [Usage Guide](./docs/USAGE.md) for detailed instructions.

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Other Platforms

- [Netlify](./docs/DEPLOYMENT.md#netlify)
- [AWS Amplify](./docs/DEPLOYMENT.md#aws-amplify)
- [Docker](./docs/DEPLOYMENT.md#docker)
- [Self-Hosted](./docs/DEPLOYMENT.md#self-hosted)

See the [Deployment Guide](./docs/DEPLOYMENT.md) for detailed instructions.

## 📁 Project Structure

```
four-seasons-portfolio/
├── docs/                    # Documentation
│   ├── DIFFERENTIATION.md   # What makes this unique
│   ├── USAGE.md            # Usage instructions
│   ├── DEPLOYMENT.md       # Deployment guides
│   ├── CONTRIBUTING.md     # Contribution guidelines
│   └── API_REFERENCE.md    # Component API reference
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page
│   └── components/
│       ├── layout/          # Header, Footer
│       ├── sections/        # 11 section components
│       └── ui/              # Reusable UI components
├── package.json
├── tsconfig.json
└── README.md
```

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Differentiation Guide](./docs/DIFFERENTIATION.md) | What makes this portfolio unique |
| [Usage Guide](./docs/USAGE.md) | Installation and customization |
| [Deployment Guide](./docs/DEPLOYMENT.md) | Deployment instructions |
| [API Reference](./docs/API_REFERENCE.md) | Component and type documentation |
| [Contributing](./docs/CONTRIBUTING.md) | Contribution guidelines |

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](./docs/CONTRIBUTING.md) before submitting a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using Next.js, TypeScript & Tailwind CSS
</p>

<p align="center">
  <a href="#-four-seasons-portfolio">Back to Top ↑</a>
</p>
