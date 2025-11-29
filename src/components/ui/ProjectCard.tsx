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
    bg: "bg-amber-400/10",
    primary: "text-amber-500",
    accent: "bg-amber-400",
    border: "border-amber-400/30",
    hover: "hover:border-amber-400",
  },
  winter: {
    bg: "bg-emerald-400/10",
    primary: "text-emerald-500",
    accent: "bg-emerald-400",
    border: "border-emerald-400/30",
    hover: "hover:border-emerald-400",
  },
  spring: {
    bg: "bg-emerald-400/10",
    primary: "text-emerald-500",
    accent: "bg-emerald-400",
    border: "border-emerald-400/30",
    hover: "hover:border-emerald-400",
  },
  summer: {
    bg: "bg-red-400/10",
    primary: "text-red-500",
    accent: "bg-red-400",
    border: "border-red-400/30",
    hover: "hover:border-red-400",
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

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm rounded-full"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm rounded-full"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Demo
            </a>
          )}
          {onOpenCaseStudy && (
            <button
              onClick={onOpenCaseStudy}
              className={`btn ${styles.accent} text-white btn-sm rounded-full ml-auto`}
            >
              Case Study
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
