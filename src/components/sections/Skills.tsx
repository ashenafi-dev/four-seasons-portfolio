"use client";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    skills: ["Node.js", "Python", "REST APIs", "GraphQL"],
  },
  {
    name: "Database & Cloud",
    skills: ["PostgreSQL", "MongoDB", "AWS", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-base-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            My core technical toolkit
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className={`bg-base-100 rounded-xl p-6 border border-base-300 shadow-sm hover:shadow-md transition-shadow ${
                index === 0 ? "border-l-4 border-l-emerald-400" :
                index === 1 ? "border-l-4 border-l-red-400" :
                "border-l-4 border-l-amber-400"
              }`}
            >
              {/* Category Header */}
              <h3 className="text-lg font-bold text-base-content mb-4">{category.name}</h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium bg-base-200 text-base-content rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
