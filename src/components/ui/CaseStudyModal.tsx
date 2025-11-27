"use client";

import Image from "next/image";
import { Project } from "./ProjectCard";

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  season: "autumn" | "winter" | "spring" | "summer";
}

const seasonStyles = {
  autumn: {
    primary: "text-autumn-primary",
    accent: "bg-autumn-primary",
    bg: "bg-autumn-bg",
  },
  winter: {
    primary: "text-winter-primary",
    accent: "bg-winter-primary",
    bg: "bg-winter-bg",
  },
  spring: {
    primary: "text-spring-primary",
    accent: "bg-spring-primary",
    bg: "bg-spring-bg",
  },
  summer: {
    primary: "text-summer-primary",
    accent: "bg-summer-primary",
    bg: "bg-summer-bg",
  },
};

export default function CaseStudyModal({
  project,
  isOpen,
  onClose,
  season,
}: CaseStudyModalProps) {
  if (!isOpen || !project) return null;

  const styles = seasonStyles[season];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal content */}
      <div className="relative w-full h-full overflow-y-auto bg-base-100">
        {/* Close button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-10 btn btn-circle btn-ghost text-base-content hover:bg-base-200"
          aria-label="Close case study"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Hero image */}
        <div className={`relative h-[50vh] ${styles.bg}`}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl opacity-60">
                {season === "autumn" && "🍂"}
                {season === "winter" && "❄️"}
                {season === "spring" && "🌷"}
                {season === "summer" && "☀️"}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative">
          {/* Title section */}
          <div className="mb-8">
            <h2
              id="case-study-title"
              className={`text-4xl sm:text-5xl font-bold ${styles.primary} mb-4`}
            >
              {project.title}
            </h2>
            <p className="text-xl text-base-content/70">{project.tagline}</p>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-8">
            <h3 className="text-2xl font-bold text-base-content mb-4">Overview</h3>
            <p className="text-base-content/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Role */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-base-content mb-4">My Role</h3>
            <p className="text-base-content/80">{project.role}</p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className={`${styles.primary} mt-1`}>✓</span>
                  <span className="text-base-content/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 text-sm font-medium ${styles.bg} ${styles.primary} rounded-full`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-base-content mb-4">
                Challenges & Solutions
              </h3>
              <p className="text-base-content/80">{project.challenges}</p>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 pt-8 border-t border-base-300">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${styles.accent} text-white rounded-full`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-full"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
