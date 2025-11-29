"use client";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Understanding",
    description:
      "I start by deeply understanding the problem space. This involves active listening, asking the right questions, and researching user needs to ensure I grasp the 'why' behind every requirement.",
    color: "border-emerald-400",
  },
  {
    number: "02",
    title: "Planning & Architecture",
    description:
      "With a clear understanding, I architect the solution. This includes designing system components, database schemas, API structures, and choosing the right technologies for scalability and maintainability.",
    color: "border-red-400",
  },
  {
    number: "03",
    title: "Development & Implementation",
    description:
      "I build iteratively, following clean code principles and best practices. Regular commits, meaningful PR descriptions, and adherence to coding standards ensure quality at every step.",
    color: "border-amber-400",
  },
  {
    number: "04",
    title: "Deployment & Monitoring",
    description:
      "With CI/CD pipelines, I deploy confidently. Post-launch, I monitor performance metrics and user feedback to identify areas for improvement.",
    color: "border-emerald-400",
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
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-red-400 to-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className={`relative bg-base-100 rounded-xl p-6 border-t-4 ${step.color} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Number Badge */}
              <div className="text-4xl font-bold text-base-content/10 mb-4">
                {step.number}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-base-content mb-3">{step.title}</h3>
                <p className="text-base-content/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
