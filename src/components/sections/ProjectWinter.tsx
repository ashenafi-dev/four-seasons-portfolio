"use client";

import ProjectCard, { Project } from "@/components/ui/ProjectCard";

const winterProject: Project = {
  title: "Real-Time Analytics Dashboard",
  tagline: "Crystal-clear insights through a beautiful data visualization platform",
  description:
    "Developed a sophisticated analytics dashboard that processes and visualizes large datasets in real-time. Features interactive charts, custom report generation, and automated alerting systems.",
  features: [
    "Real-time data streaming with WebSocket connections",
    "Interactive D3.js visualizations and charts",
    "Custom report builder with export capabilities",
    "Automated threshold-based alerting system",
    "Role-based access control and permissions",
  ],
  technologies: ["React", "D3.js", "Node.js", "Socket.io", "MongoDB", "Docker"],
  role: "Lead Frontend Developer - Architected visualization layer and implemented real-time data handling",
  challenges:
    "Optimized rendering performance to handle 100K+ data points without frame drops.",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com",
};

export default function ProjectWinter() {
  return (
    <section id="winter" className="py-20 bg-winter-bg/30 seasonal-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">❄️</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-winter-text">
              Winter Project
            </h2>
            <span className="text-4xl">🌨️</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cool precision and crystalline clarity - a project built with crisp logic
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-winter-primary to-winter-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          <ProjectCard project={winterProject} season="winter" />
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="flex justify-center gap-8 text-4xl opacity-30">
            <span className="animate-float">❄️</span>
            <span className="animate-float animation-delay-200">🌨️</span>
            <span className="animate-float animation-delay-400">⛄</span>
          </div>
        </div>
      </div>
    </section>
  );
}
