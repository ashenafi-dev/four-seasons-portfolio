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
    <section id="autumn" className="min-h-screen py-20 bg-autumn-bg/30 seasonal-transition flex items-center snap-start scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🍂</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-autumn-text">
              Autumn Project
            </h2>
            <span className="text-4xl">🍁</span>
          </div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Warm colors and cozy code - a project that harvests innovation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-autumn-primary to-autumn-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          <ProjectCard project={autumnProject} season="autumn" onOpenCaseStudy={onOpenCaseStudy} />
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="flex justify-center gap-8 text-4xl opacity-30">
            <span className="animate-float">🍂</span>
            <span className="animate-float animation-delay-200">🍁</span>
            <span className="animate-float animation-delay-400">🌾</span>
          </div>
        </div>
      </div>
    </section>
  );
}
