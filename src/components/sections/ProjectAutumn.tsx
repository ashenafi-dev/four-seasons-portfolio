"use client";

import ProjectCard, { Project } from "@/components/ui/ProjectCard";

export const autumnProject: Project = {
  title: "E-Commerce Platform",
  tagline: "A full-featured online marketplace with real-time inventory management",
  description:
    "Built a comprehensive e-commerce solution featuring product catalog management, shopping cart functionality, secure payment processing, and an admin dashboard for inventory tracking.",
  features: [
    "Real-time inventory tracking with low-stock alerts",
    "Secure payment integration with Stripe",
    "Advanced search and filtering capabilities",
    "Customer review and rating system",
    "Order tracking and notification system",
  ],
  technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Redis"],
  role: "Full-Stack Developer - Designed architecture, implemented core features, and managed deployment",
  challenges:
    "Optimized database queries to handle 10,000+ products while maintaining sub-second response times.",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com",
};

interface ProjectAutumnProps {
  onOpenCaseStudy?: () => void;
}

export default function ProjectAutumn({ onOpenCaseStudy }: ProjectAutumnProps) {
  return (
    <section id="autumn" className="py-16 bg-amber-400/5 seasonal-transition snap-start scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectCard project={autumnProject} season="autumn" onOpenCaseStudy={onOpenCaseStudy} />
      </div>
    </section>
  );
}
