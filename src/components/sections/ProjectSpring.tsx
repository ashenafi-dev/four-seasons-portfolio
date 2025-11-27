"use client";

import ProjectCard, { Project } from "@/components/ui/ProjectCard";

export const springProject: Project = {
  title: "Social Collaboration Platform",
  tagline: "Fresh ideas blooming through community-driven innovation",
  description:
    "Created a vibrant social platform that enables teams to collaborate, share ideas, and manage projects together. Features include real-time chat, file sharing, task management, and video conferencing integration.",
  features: [
    "Real-time messaging with rich media support",
    "Kanban-style project and task management",
    "Integrated video conferencing capabilities",
    "File sharing with version control",
    "Activity feeds and notification system",
  ],
  technologies: ["Vue.js", "Firebase", "WebRTC", "Tailwind CSS", "Cloud Functions"],
  role: "Full-Stack Developer - Built core collaboration features and real-time communication layer",
  challenges:
    "Implemented end-to-end encryption for secure messaging while maintaining low latency.",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com",
};

interface ProjectSpringProps {
  onOpenCaseStudy?: () => void;
}

export default function ProjectSpring({ onOpenCaseStudy }: ProjectSpringProps) {
  return (
    <section id="spring" className="h-dvh py-20 bg-spring-bg/30 seasonal-transition flex items-center snap-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🌷</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-spring-text">
              Spring Project
            </h2>
            <span className="text-4xl">🌸</span>
          </div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Fresh beginnings and blooming possibilities - a project nurturing growth
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-spring-primary to-spring-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          <ProjectCard project={springProject} season="spring" onOpenCaseStudy={onOpenCaseStudy} />
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="flex justify-center gap-8 text-4xl opacity-30">
            <span className="animate-float">🌷</span>
            <span className="animate-float animation-delay-200">🌸</span>
            <span className="animate-float animation-delay-400">🌼</span>
          </div>
        </div>
      </div>
    </section>
  );
}
