"use client";

import Image from "next/image";
import Link from "next/link";

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
}

const seasonStyles = {
  autumn: {
    bg: "bg-autumn-bg",
    primary: "text-autumn-primary",
    accent: "bg-autumn-primary",
    border: "border-autumn-primary/30",
    hover: "hover:border-autumn-primary",
    gradient: "from-autumn-primary to-autumn-secondary",
  },
  winter: {
    bg: "bg-winter-bg",
    primary: "text-winter-primary",
    accent: "bg-winter-primary",
    border: "border-winter-primary/30",
    hover: "hover:border-winter-primary",
    gradient: "from-winter-primary to-winter-secondary",
  },
  spring: {
    bg: "bg-spring-bg",
    primary: "text-spring-primary",
    accent: "bg-spring-primary",
    border: "border-spring-primary/30",
    hover: "hover:border-spring-primary",
    gradient: "from-spring-primary to-spring-secondary",
  },
  summer: {
    bg: "bg-summer-bg",
    primary: "text-summer-primary",
    accent: "bg-summer-primary",
    border: "border-summer-primary/30",
    hover: "hover:border-summer-primary",
    gradient: "from-summer-primary to-summer-secondary",
  },
};

export default function ProjectCard({ project, season }: ProjectCardProps) {
  const styles = seasonStyles[season];

  return (
    <div
      className={`bg-card rounded-2xl overflow-hidden border ${styles.border} ${styles.hover} transition-all duration-300 hover:shadow-xl group`}
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
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title & Tagline */}
        <div>
          <h3 className={`text-xl font-bold ${styles.primary}`}>{project.title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{project.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-foreground text-sm leading-relaxed">{project.description}</p>

        {/* Key Features */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className={styles.primary}>•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 text-xs font-medium ${styles.bg} ${styles.primary} rounded-full`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Role */}
        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold">My Role:</span> {project.role}
          </p>
        </div>

        {/* Challenges & Learnings */}
        {project.challenges && (
          <div className="pt-2">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold">Key Challenge:</span> {project.challenges}
            </p>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white ${styles.accent} rounded-full hover:opacity-90 transition-opacity`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground bg-muted rounded-full hover:bg-muted/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
