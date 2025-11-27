"use client";

interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: "Expert" | "Proficient" | "Familiar";
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "Python", level: "Proficient" },
      { name: "Go", level: "Familiar" },
      { name: "SQL", level: "Proficient" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: "🛠️",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "Node.js", level: "Proficient" },
      { name: "Express", level: "Proficient" },
      { name: "Tailwind CSS", level: "Expert" },
    ],
  },
  {
    name: "Databases",
    icon: "🗃️",
    skills: [
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "Redis", level: "Familiar" },
      { name: "MySQL", level: "Proficient" },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: "Proficient" },
      { name: "Docker", level: "Proficient" },
      { name: "Vercel", level: "Expert" },
      { name: "GitHub Actions", level: "Proficient" },
      { name: "Kubernetes", level: "Familiar" },
    ],
  },
  {
    name: "Tools & Technologies",
    icon: "🔧",
    skills: [
      { name: "Git", level: "Expert" },
      { name: "VS Code", level: "Expert" },
      { name: "Figma", level: "Proficient" },
      { name: "Postman", level: "Proficient" },
      { name: "Jira", level: "Proficient" },
    ],
  },
  {
    name: "Testing",
    icon: "🧪",
    skills: [
      { name: "Jest", level: "Proficient" },
      { name: "React Testing Library", level: "Proficient" },
      { name: "Cypress", level: "Familiar" },
      { name: "Playwright", level: "Familiar" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-spring-primary text-white";
    case "Proficient":
      return "bg-winter-primary text-white";
    case "Familiar":
      return "bg-autumn-primary text-white";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getLevelWidth = (level: string) => {
  switch (level) {
    case "Expert":
      return "w-full";
    case "Proficient":
      return "w-3/4";
    case "Familiar":
      return "w-1/2";
    default:
      return "w-1/4";
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical toolkit
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-spring-primary to-autumn-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-spring-primary" />
            <span className="text-sm text-muted-foreground">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-winter-primary" />
            <span className="text-sm text-muted-foreground">Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-autumn-primary" />
            <span className="text-sm text-muted-foreground">Familiar</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-foreground">{category.name}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded-full ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getLevelWidth(skill.level)} ${getLevelColor(skill.level)} rounded-full transition-all duration-500`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Methodologies */}
        <div className="mt-12 bg-card rounded-xl p-6 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">
            Methodologies & Concepts
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile/Scrum",
              "CI/CD",
              "RESTful APIs",
              "GraphQL",
              "Microservices",
              "TDD",
              "OOP",
              "Functional Programming",
              "Data Structures",
              "Algorithms",
              "System Design",
              "Clean Architecture",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
