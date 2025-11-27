# 🌸 Contributing to Four Seasons Portfolio

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please:

- **Be respectful**: Value each other's ideas, styles, and viewpoints
- **Be collaborative**: Work together to resolve conflicts
- **Be considerate**: Think about how your actions affect others
- **Be inclusive**: Welcome and support people of all backgrounds

### Unacceptable Behavior

- Harassment, discrimination, or derogatory comments
- Personal attacks or trolling
- Publishing private information without consent
- Any conduct inappropriate for a professional setting

## Getting Started

### Prerequisites

- Node.js ≥ 18.17
- npm ≥ 9.0
- Git ≥ 2.0
- A code editor (VS Code recommended)

### Setup Steps

1. **Fork the repository**

   Click the "Fork" button on GitHub to create your copy.

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR-USERNAME/four-seasons-portfolio.git
   cd four-seasons-portfolio
   ```

3. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/ashenafi-dev/four-seasons-portfolio.git
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

## Development Workflow

### Branch Naming

Use descriptive branch names:

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/description` | `feature/add-blog-section` |
| Bug Fix | `fix/description` | `fix/header-scroll-bug` |
| Documentation | `docs/description` | `docs/update-readme` |
| Refactor | `refactor/description` | `refactor/component-structure` |

### Creating a Branch

```bash
# Update main branch
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name
```

### Making Changes

1. Make your changes in small, logical commits
2. Test your changes locally
3. Run linting: `npm run lint`
4. Build the project: `npm run build`

## Coding Standards

### TypeScript

- Use strict TypeScript (`strict: true`)
- Define interfaces for all props and state
- Avoid `any` type - use `unknown` if needed
- Export types alongside components

```tsx
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  // ...
}
```

### React Components

- Use functional components with hooks
- Use "use client" directive only when necessary
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks

```tsx
// Good - Focused component
"use client";

import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);
  
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
```

### CSS / Tailwind

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Group related classes together
- Use semantic class names for custom CSS

```tsx
// Good - Organized Tailwind classes
<div className="
  flex flex-col items-center
  p-4 sm:p-6 lg:p-8
  bg-card rounded-lg border border-border
  hover:shadow-lg transition-shadow
">
```

### File Organization

```
src/
├── components/
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts      # Barrel export
│   ├── sections/         # Page sections
│   └── ui/               # Reusable UI
├── hooks/                # Custom hooks
├── lib/                  # Utility functions
├── types/                # Shared types
└── app/                  # Next.js app router
```

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting) |
| `refactor` | Code refactoring |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |

### Examples

```bash
# Feature
git commit -m "feat(projects): add image gallery to project cards"

# Bug fix
git commit -m "fix(header): resolve scroll visibility issue on mobile"

# Documentation
git commit -m "docs(readme): add installation troubleshooting section"
```

## Pull Request Process

### Before Submitting

- [ ] Update from upstream: `git pull upstream main`
- [ ] Resolve any conflicts
- [ ] Run linting: `npm run lint`
- [ ] Build project: `npm run build`
- [ ] Test all affected features

### PR Template

```markdown
## Description
Brief description of the changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes.

## Screenshots
If applicable, add screenshots.

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-reviewed my code
- [ ] Added necessary documentation
- [ ] No new warnings introduced
```

### Review Process

1. Submit PR to `main` branch
2. Ensure CI checks pass
3. Request review from maintainers
4. Address feedback and make changes
5. Squash commits if requested
6. Maintainer will merge when approved

## Issue Guidelines

### Bug Reports

Include:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Environment details (browser, OS, Node version)
- Screenshots if applicable

### Feature Requests

Include:
- Clear problem statement
- Proposed solution
- Alternative solutions considered
- Any additional context

### Issue Labels

| Label | Description |
|-------|-------------|
| `bug` | Something isn't working |
| `enhancement` | New feature request |
| `documentation` | Documentation improvement |
| `good first issue` | Good for newcomers |
| `help wanted` | Extra attention needed |
| `question` | Further information requested |

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- Release notes for significant contributions
- Project documentation where appropriate

---

Thank you for contributing to Four Seasons Portfolio! 🌸
