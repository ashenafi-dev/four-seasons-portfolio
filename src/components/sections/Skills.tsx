"use client";

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "HTML5/CSS3"],
    color: "emerald",
  },
  {
    name: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "Python", "Express.js", "Django", "REST APIs", "GraphQL"],
    color: "red",
  },
  {
    name: "Database",
    icon: "🗃️",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Firebase"],
    color: "amber",
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    skills: ["AWS", "Docker", "Kubernetes", "Vercel", "GitHub Actions", "CI/CD"],
    color: "emerald",
  },
  {
    name: "Tools & Testing",
    icon: "🛠️",
    skills: ["Git", "Jest", "Cypress", "Postman", "Figma", "VS Code"],
    color: "red",
  },
  {
    name: "Soft Skills",
    icon: "💡",
    skills: ["Problem Solving", "Team Leadership", "Agile/Scrum", "Communication", "Mentoring", "Code Review"],
    color: "amber",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "emerald":
      return {
        border: "border-emerald-400",
        bg: "bg-emerald-400",
        text: "text-emerald-400",
        badge: "badge-success",
      };
    case "red":
      return {
        border: "border-red-400",
        bg: "bg-red-400",
        text: "text-red-400",
        badge: "badge-error",
      };
    case "amber":
      return {
        border: "border-amber-400",
        bg: "bg-amber-400",
        text: "text-amber-400",
        badge: "badge-warning",
      };
    default:
      return {
        border: "border-primary",
        bg: "bg-primary",
        text: "text-primary",
        badge: "badge-primary",
      };
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-red-400 to-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={category.name}
                className={`card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${colors.border} hover:-translate-y-1`}
              >
                <div className="card-body">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center text-2xl`}>
                      {category.icon}
                    </div>
                    <h3 className="card-title text-lg">{category.name}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className={`badge ${colors.badge} badge-outline gap-1 py-3 px-3`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="stat bg-base-100 rounded-box shadow-md text-center">
            <div className="stat-value text-emerald-400">5+</div>
            <div className="stat-desc">Years Experience</div>
          </div>
          <div className="stat bg-base-100 rounded-box shadow-md text-center">
            <div className="stat-value text-red-400">50+</div>
            <div className="stat-desc">Projects Completed</div>
          </div>
          <div className="stat bg-base-100 rounded-box shadow-md text-center">
            <div className="stat-value text-amber-400">20+</div>
            <div className="stat-desc">Technologies</div>
          </div>
          <div className="stat bg-base-100 rounded-box shadow-md text-center">
            <div className="stat-value text-emerald-400">100%</div>
            <div className="stat-desc">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
