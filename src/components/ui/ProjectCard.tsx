"use client";

import Image from "next/image";

export interface Project {
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

interface ProjectCardProps {
  project: Project;
  season: "autumn" | "winter" | "spring" | "summer";
  onOpenCaseStudy?: () => void;
}

const seasonStyles = {
  autumn: {
    bg: "bg-autumn-bg",
    primary: "text-autumn-primary",
    accent: "bg-autumn-primary",
    border: "border-autumn-primary/30",
    hover: "hover:border-autumn-primary",
  },
  winter: {
    bg: "bg-winter-bg",
    primary: "text-winter-primary",
    accent: "bg-winter-primary",
    border: "border-winter-primary/30",
    hover: "hover:border-winter-primary",
  },
  spring: {
    bg: "bg-spring-bg",
    primary: "text-spring-primary",
    accent: "bg-spring-primary",
    border: "border-spring-primary/30",
    hover: "hover:border-spring-primary",
  },
  summer: {
    bg: "bg-summer-bg",
    primary: "text-summer-primary",
    accent: "bg-summer-primary",
    border: "border-summer-primary/30",
    hover: "hover:border-summer-primary",
  },
};

export default function ProjectCard({ project, season, onOpenCaseStudy }: ProjectCardProps) {
  const styles = seasonStyles[season];

  return (
    <div
      className={`bg-base-100 rounded-2xl overflow-hidden border ${styles.border} ${styles.hover} transition-all duration-300 hover:shadow-xl group`}
    >
      {/* Project Image */}
      <div className={`relative h-48 sm:h-56 ${styles.bg}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="text-6xl opacity-60">
              {season === "autumn" && "🍂"}
              {season === "winter" && "❄️"}
              {season === "spring" && "🌷"}
              {season === "summer" && "☀️"}
            </div>
          )}
        </div>
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title & Tagline */}
        <div>
          <h3 className={`text-xl font-bold ${styles.primary}`}>{project.title}</h3>
          <p className="text-base-content/70 text-sm mt-1">{project.tagline}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 text-xs font-medium ${styles.bg} ${styles.primary} rounded-full`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-base-200 text-base-content/70 rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Case Study Button */}
        {onOpenCaseStudy && (
          <button
            onClick={onOpenCaseStudy}
            className={`btn ${styles.accent} text-white w-full rounded-full`}
          >
            View Case Study
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
