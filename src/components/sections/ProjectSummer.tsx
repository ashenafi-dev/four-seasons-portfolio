"use client";

import ProjectCard, { Project } from "@/components/ui/ProjectCard";

export const summerProject: Project = {
  title: "Health & Fitness Tracker",
  tagline: "Bringing sunshine to personal wellness through technology",
  description:
    "Built a comprehensive health and fitness tracking application that helps users monitor their workouts, nutrition, sleep patterns, and overall wellness goals with personalized insights and recommendations.",
  features: [
    "Workout tracking with exercise library and custom routines",
    "Nutrition logging with calorie and macro tracking",
    "Sleep analysis with quality score metrics",
    "Progress visualization with trend charts",
    "Social challenges and community features",
  ],
  technologies: ["React Native", "Node.js", "GraphQL", "PostgreSQL", "AWS", "TensorFlow"],
  role: "Mobile Developer - Developed cross-platform mobile app and integrated ML-powered recommendations",
  challenges:
    "Implemented offline-first architecture to ensure seamless experience with intermittent connectivity.",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com",
};

interface ProjectSummerProps {
  onOpenCaseStudy?: () => void;
}

export default function ProjectSummer({ onOpenCaseStudy }: ProjectSummerProps) {
  return (
    <section id="summer" className="py-16 bg-red-400/5 seasonal-transition snap-start scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectCard project={summerProject} season="summer" onOpenCaseStudy={onOpenCaseStudy} />
      </div>
    </section>
  );
}
