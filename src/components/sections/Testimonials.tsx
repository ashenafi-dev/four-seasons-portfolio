"use client";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "An exceptional developer who consistently delivers high-quality code. Their ability to understand complex requirements and translate them into elegant solutions is remarkable.",
    name: "Sarah Johnson",
    title: "Engineering Manager",
    company: "Tech Corp",
  },
  {
    quote:
      "Working with this developer was a game-changer for our project. They brought fresh ideas, stellar communication skills, and a dedication to quality that elevated our entire product.",
    name: "Michael Chen",
    title: "Product Lead",
    company: "StartupXYZ",
  },
  {
    quote:
      "One of the most collaborative engineers I've had the pleasure to work with. They don't just write code - they mentor, share knowledge, and make everyone around them better.",
    name: "Emily Rodriguez",
    title: "Senior Developer",
    company: "Digital Solutions Inc",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 via-red-400 to-amber-400 mx-auto rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${
                index === 0 ? "from-emerald-400/10 to-emerald-400/5 border-emerald-400/20" :
                index === 1 ? "from-red-400/10 to-red-400/5 border-red-400/20" :
                "from-amber-400/10 to-amber-400/5 border-amber-400/20"
              } border backdrop-blur-sm`}
            >
              {/* Quote */}
              <blockquote className="mb-6">
                <p className="text-base-content/80 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                  index === 0 ? "bg-emerald-400" :
                  index === 1 ? "bg-red-400" :
                  "bg-amber-400"
                }`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-base-content">{testimonial.name}</p>
                  <p className="text-sm text-base-content/60">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
