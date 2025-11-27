"use client";

interface ExperienceItem {
  type: "work" | "project";
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    type: "work",
    title: "Senior Software Engineer",
    organization: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of scalable web applications and mentoring junior developers.",
    achievements: [
      "Architected and implemented a microservices-based platform serving 100K+ users",
      "Reduced API response time by 40% through optimization and caching strategies",
      "Led a team of 5 developers in delivering critical features on schedule",
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    organization: "Digital Agency",
    period: "2020 - 2022",
    description: "Developed responsive web applications for diverse clients across various industries.",
    achievements: [
      "Built and deployed 15+ client projects with high satisfaction rates",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with design team to improve UX across all projects",
    ],
    technologies: ["Vue.js", "Python", "Django", "MongoDB", "Docker"],
  },
  {
    type: "project",
    title: "Open Source Contribution",
    organization: "Popular React Library",
    period: "2021 - Present",
    description: "Active contributor to a widely-used React component library.",
    achievements: [
      "Contributed 20+ pull requests with new features and bug fixes",
      "Improved documentation for better developer experience",
      "Participated in code reviews and community discussions",
    ],
    technologies: ["React", "TypeScript", "Jest", "Storybook"],
    link: "https://github.com",
  },
  {
    type: "project",
    title: "Personal SaaS Project",
    organization: "Side Project",
    period: "2023",
    description: "Built a productivity tool that helps developers track their coding habits.",
    achievements: [
      "Launched MVP with 500+ active users in the first month",
      "Implemented real-time analytics dashboard",
      "Set up automated testing with 90% code coverage",
    ],
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
    link: "https://example.com",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Contributions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional growth and personal projects
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-winter-primary to-summer-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.title}-${index}`}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                              exp.type === "work"
                                ? "bg-winter-bg text-winter-text"
                                : "bg-spring-bg text-spring-text"
                            }`}
                          >
                            {exp.type === "work" ? "💼 Work" : "🚀 Project"}
                          </span>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.organization}</p>
                      </div>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 text-primary hover:text-primary/80 transition-colors"
                          aria-label={`View ${exp.title}`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-spring-primary mt-1">✓</span>
                          <span className="text-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
