"use client";

import ProjectCard, { Project } from "@/components/ui/ProjectCard";

export const winterProject: Project = {
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

interface ProjectWinterProps {
  onOpenCaseStudy?: () => void;
}

export default function ProjectWinter({ onOpenCaseStudy }: ProjectWinterProps) {
  return (
    <section id="winter" className="py-16 bg-emerald-400/5 seasonal-transition snap-start scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectCard project={winterProject} season="winter" onOpenCaseStudy={onOpenCaseStudy} />
      </div>
    </section>
  );
}
