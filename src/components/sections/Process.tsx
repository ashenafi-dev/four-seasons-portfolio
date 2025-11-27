"use client";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Understanding",
    description:
      "I start by deeply understanding the problem space. This involves active listening, asking the right questions, and researching user needs to ensure I grasp the 'why' behind every requirement.",
    icon: "🔍",
    color: "from-autumn-primary to-autumn-secondary",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description:
      "With a clear understanding, I architect the solution. This includes designing system components, database schemas, API structures, and choosing the right technologies for scalability and maintainability.",
    icon: "📐",
    color: "from-winter-primary to-winter-secondary",
  },
  {
    number: "03",
    title: "Development & Implementation",
    description:
      "I build iteratively, following clean code principles and best practices. Regular commits, meaningful PR descriptions, and adherence to coding standards ensure quality at every step.",
    icon: "⚙️",
    color: "from-spring-primary to-spring-secondary",
  },
  {
    number: "04",
    title: "Testing & Quality Assurance",
    description:
      "Quality is non-negotiable. I write comprehensive tests (unit, integration, E2E) and conduct thorough code reviews to catch issues early and ensure reliability.",
    icon: "🧪",
    color: "from-summer-primary to-summer-secondary",
  },
  {
    number: "05",
    title: "Deployment & Monitoring",
    description:
      "With CI/CD pipelines, I deploy confidently. Post-launch, I monitor performance metrics and user feedback to identify areas for improvement.",
    icon: "🚀",
    color: "from-autumn-primary to-winter-primary",
  },
  {
    number: "06",
    title: "Iteration & Growth",
    description:
      "Software is never truly 'done.' I embrace continuous improvement, gathering insights and refining solutions based on real-world usage and evolving requirements.",
    icon: "🔄",
    color: "from-spring-primary to-summer-primary",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
            My Development Process
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            A structured approach to turning ideas into exceptional software
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-autumn-primary via-spring-primary to-summer-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="group relative bg-base-100 rounded-xl p-6 border border-base-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number Badge */}
              <div
                className={`absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{step.icon}</span>
                  <h3 className="text-xl font-bold text-base-content">{step.title}</h3>
                </div>
                <p className="text-base-content/70 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line (for visual flow) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-base-300" />
              )}
            </div>
          ))}
        </div>

        {/* Cross-cutting Principles */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Collaboration */}
          <div className="bg-gradient-to-br from-winter-bg to-spring-bg rounded-xl p-6 border border-base-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-winter-primary flex items-center justify-center text-2xl text-white">
                🤝
              </div>
              <div>
                <h3 className="text-xl font-bold text-base-content mb-2">
                  Collaboration & Communication
                </h3>
                <p className="text-base-content/70">
                  I believe great software is built through effective teamwork. I communicate 
                  clearly, participate actively in discussions, and translate complex technical 
                  concepts for diverse audiences. Whether in stand-ups, code reviews, or 
                  stakeholder meetings, I ensure everyone stays aligned.
                </p>
              </div>
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="bg-gradient-to-br from-summer-bg to-autumn-bg rounded-xl p-6 border border-base-300">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-summer-primary flex items-center justify-center text-2xl text-white">
                📚
              </div>
              <div>
                <h3 className="text-xl font-bold text-base-content mb-2">
                  Continuous Learning
                </h3>
                <p className="text-base-content/70">
                  Technology evolves rapidly, and so do I. I dedicate time to exploring new 
                  tools, reading industry publications, and experimenting with emerging 
                  technologies. This commitment to growth ensures I bring fresh perspectives 
                  and modern solutions to every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
