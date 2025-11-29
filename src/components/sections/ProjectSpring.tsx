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
    <section id="spring" className="py-16 bg-emerald-400/5 seasonal-transition snap-start scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectCard project={springProject} season="spring" onOpenCaseStudy={onOpenCaseStudy} />
      </div>
    </section>
  );
}
