# 🌸 Four Seasons Portfolio - API Reference

This document provides detailed information about the components, types, and utilities available in the Four Seasons Portfolio project.

## 📋 Table of Contents

- [Components](#components)
  - [Layout Components](#layout-components)
  - [Section Components](#section-components)
  - [UI Components](#ui-components)
- [Types & Interfaces](#types--interfaces)
- [CSS Variables](#css-variables)
- [Utility Classes](#utility-classes)

## Components

### Layout Components

#### Header

**Location:** `src/components/layout/Header.tsx`

Smart navigation header with scroll-based visibility.

**Features:**
- Fixed positioning at viewport top
- Hides on scroll down, shows on scroll up
- Responsive mobile menu
- Smooth scroll navigation

**Usage:**
```tsx
import { Header } from "@/components/layout";

<Header />
```

**Props:** None (self-contained component)

---

#### Footer

**Location:** `src/components/layout/Footer.tsx`

Site footer with branding, quick links, and social media.

**Features:**
- Brand section with logo
- Quick navigation links
- Social media icons
- Copyright and tech stack info

**Usage:**
```tsx
import { Footer } from "@/components/layout";

<Footer />
```

**Props:** None (self-contained component)

---

### Section Components

#### Hero

**Location:** `src/components/sections/Hero.tsx`

Landing section with personal introduction and CTAs.

**Features:**
- Animated seasonal background elements
- Profile image placeholder
- Name and title display
- CTA buttons (View Work, Download Resume)
- Scroll indicator

**Customization Points:**
```tsx
// Update in Hero.tsx
<span>Your Name</span>
<p>Full-Stack Developer | Building Scalable Web Solutions</p>
```

---

#### About

**Location:** `src/components/sections/About.tsx`

Personal story and background section.

**Structure:**
- Headline
- Origin Story
- Journey & Growth
- Core Philosophy
- Beyond the Code
- Future Aspirations

---

#### Experience

**Location:** `src/components/sections/Experience.tsx`

Professional experience and contributions timeline.

**Interface:**
```tsx
interface ExperienceItem {
  type: "work" | "project";
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}
```

**Customization:**
```tsx
const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Your Job Title",
    organization: "Company Name",
    period: "2022 - Present",
    description: "Brief description...",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["React", "Node.js"],
  },
];
```

---

#### Skills

**Location:** `src/components/sections/Skills.tsx`

Technical skills organized by category.

**Interface:**
```tsx
interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: "Expert" | "Proficient" | "Familiar";
  }[];
}
```

**Proficiency Levels:**
| Level | Visual | Color |
|-------|--------|-------|
| Expert | Full bar | Spring Primary |
| Proficient | 3/4 bar | Winter Primary |
| Familiar | 1/2 bar | Autumn Primary |

---

#### Process

**Location:** `src/components/sections/Process.tsx`

Development workflow and methodology.

**Structure:**
1. Discovery & Understanding
2. Planning & Architecture
3. Development & Implementation
4. Testing & Quality Assurance
5. Deployment & Monitoring
6. Iteration & Growth

Plus cross-cutting principles:
- Collaboration & Communication
- Continuous Learning

---

#### Seasonal Project Sections

**Locations:**
- `src/components/sections/ProjectAutumn.tsx`
- `src/components/sections/ProjectWinter.tsx`
- `src/components/sections/ProjectSpring.tsx`
- `src/components/sections/ProjectSummer.tsx`

Each contains themed project showcase.

---

#### Testimonials

**Location:** `src/components/sections/Testimonials.tsx`

Client and colleague testimonials.

**Interface:**
```tsx
interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  avatar: string; // Emoji or image
}
```

---

#### Contact

**Location:** `src/components/sections/Contact.tsx`

Contact form and social links.

**Features:**
- Client-side form validation
- Email, subject, message fields
- Social media links
- Location display
- Success/error states

**Form Validation:**
```tsx
interface FormErrors {
  name?: string;    // Required
  email?: string;   // Required, valid format
  subject?: string; // Required
  message?: string; // Required, min 10 chars
}
```

---

### UI Components

#### ProjectCard

**Location:** `src/components/ui/ProjectCard.tsx`

Reusable project display component.

**Props:**
```tsx
interface ProjectCardProps {
  project: Project;
  season: "autumn" | "winter" | "spring" | "summer";
}
```

**Project Interface:**
```tsx
interface Project {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  role: string;
  challenges?: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}
```

**Usage:**
```tsx
import ProjectCard from "@/components/ui/ProjectCard";

<ProjectCard 
  project={myProject} 
  season="autumn" 
/>
```

---

## Types & Interfaces

### Project Type

```tsx
export interface Project {
  title: string;           // Project name
  tagline: string;         // One-line summary
  description: string;     // Detailed description
  features: string[];      // Key features list
  technologies: string[];  // Tech stack used
  role: string;           // Your role/contributions
  challenges?: string;     // Optional challenges overcome
  liveUrl?: string;       // Live demo URL
  githubUrl?: string;     // GitHub repository URL
  image?: string;         // Project screenshot
}
```

### Experience Type

```tsx
export interface ExperienceItem {
  type: "work" | "project";
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}
```

### Skill Category Type

```tsx
export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: "Expert" | "Proficient" | "Familiar";
  }[];
}
```

### Testimonial Type

```tsx
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  avatar: string;
}
```

---

## CSS Variables

### Core Theme Variables

```css
:root {
  /* Base colors */
  --background: #fafafa;
  --foreground: #171717;
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --secondary: #6b7280;
  --muted: #f3f4f6;
  --muted-foreground: #6b7280;
  --accent: #f59e0b;
  --border: #e5e7eb;
  --card: #ffffff;
  --card-foreground: #171717;
}
```

### Seasonal Variables

```css
/* Autumn */
--autumn-primary: #d97706;
--autumn-secondary: #b45309;
--autumn-accent: #f59e0b;
--autumn-bg: #fef3c7;
--autumn-text: #78350f;

/* Winter */
--winter-primary: #3b82f6;
--winter-secondary: #1d4ed8;
--winter-accent: #60a5fa;
--winter-bg: #eff6ff;
--winter-text: #1e3a8a;

/* Spring */
--spring-primary: #10b981;
--spring-secondary: #059669;
--spring-accent: #34d399;
--spring-bg: #ecfdf5;
--spring-text: #064e3b;

/* Summer */
--summer-primary: #eab308;
--summer-secondary: #ca8a04;
--summer-accent: #facc15;
--summer-bg: #fefce8;
--summer-text: #713f12;
```

### Dark Mode Overrides

```css
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    --muted: #27272a;
    --muted-foreground: #a1a1aa;
    --border: #27272a;
    --card: #18181b;
    --card-foreground: #ededed;
    
    /* Adjusted seasonal backgrounds */
    --autumn-bg: #1c1a17;
    --winter-bg: #0f172a;
    --spring-bg: #0d1f17;
    --summer-bg: #1a1a0f;
  }
}
```

---

## Utility Classes

### Animation Classes

```css
/* Fade animations */
.animate-fadeInUp    /* Fade in from bottom */
.animate-fadeIn      /* Simple fade in */
.animate-slideInLeft /* Slide from left */
.animate-slideInRight /* Slide from right */
.animate-float       /* Floating effect */

/* Animation delays */
.animation-delay-100 /* 100ms delay */
.animation-delay-200 /* 200ms delay */
.animation-delay-300 /* 300ms delay */
.animation-delay-400 /* 400ms delay */
.animation-delay-500 /* 500ms delay */
```

### Seasonal Transition

```css
.seasonal-transition /* Smooth background/color transitions */
```

### Usage Example

```tsx
<div className="animate-fadeInUp animation-delay-200">
  Content with delayed fade-in animation
</div>
```

---

## Tailwind Theme Extensions

The project uses Tailwind CSS v4 with inline theme configuration in `globals.css`.

### Available Color Classes

```tsx
// Background colors
bg-background
bg-foreground
bg-primary
bg-secondary
bg-muted
bg-card
bg-autumn-bg
bg-winter-bg
bg-spring-bg
bg-summer-bg

// Text colors
text-foreground
text-muted-foreground
text-primary
text-autumn-primary
text-winter-primary
text-spring-primary
text-summer-primary

// Border colors
border-border
border-primary
border-autumn-primary
// etc.
```

---

For more detailed implementation examples, see the source code in the `src/components/` directory.
