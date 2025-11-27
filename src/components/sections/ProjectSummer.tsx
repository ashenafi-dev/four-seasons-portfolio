"use client";

import ProjectCard, { Project } from "@/components/ui/ProjectCard";

const summerProject: Project = {
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

export default function ProjectSummer() {
  return (
    <section id="summer" className="py-20 bg-summer-bg/30 seasonal-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">☀️</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-summer-text">
              Summer Project
            </h2>
            <span className="text-4xl">🏖️</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bright energy and endless possibilities - a project radiating success
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-summer-primary to-summer-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          <ProjectCard project={summerProject} season="summer" />
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="flex justify-center gap-8 text-4xl opacity-30">
            <span className="animate-float">☀️</span>
            <span className="animate-float animation-delay-200">🌴</span>
            <span className="animate-float animation-delay-400">🌻</span>
          </div>
        </div>
      </div>
    </section>
  );
}
