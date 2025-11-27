"use client";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  relationship: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "An exceptional developer who consistently delivers high-quality code. Their ability to understand complex requirements and translate them into elegant solutions is remarkable. A true asset to any team.",
    name: "Sarah Johnson",
    title: "Engineering Manager",
    company: "Tech Corp",
    relationship: "Former Manager",
    avatar: "👩‍💼",
  },
  {
    quote:
      "Working with this developer was a game-changer for our project. They brought fresh ideas, stellar communication skills, and a dedication to quality that elevated our entire product.",
    name: "Michael Chen",
    title: "Product Lead",
    company: "StartupXYZ",
    relationship: "Client",
    avatar: "👨‍💻",
  },
  {
    quote:
      "One of the most collaborative engineers I've had the pleasure to work with. They don't just write code - they mentor, share knowledge, and make everyone around them better.",
    name: "Emily Rodriguez",
    title: "Senior Developer",
    company: "Digital Solutions Inc",
    relationship: "Colleague",
    avatar: "👩‍🔬",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-base-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
            What People Say
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Feedback from clients, managers, and colleagues I&apos;ve worked with
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-winter-primary to-spring-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-base-100 rounded-xl p-6 border border-base-300 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Quote mark decoration */}
              <div className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">
                &ldquo;
              </div>

              {/* Quote */}
              <blockquote className="relative z-10 mb-6">
                <p className="text-base-content/70 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-base-200 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-base-content">{testimonial.name}</p>
                  <p className="text-sm text-base-content/70">
                    {testimonial.title} at {testimonial.company}
                  </p>
                  <p className="text-xs text-primary">{testimonial.relationship}</p>
                </div>
              </div>

              {/* Decorative element */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl ${
                  index === 0
                    ? "bg-autumn-primary"
                    : index === 1
                    ? "bg-winter-primary"
                    : "bg-spring-primary"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-base-content/70">
            Want to work together?{" "}
            <a
              href="#contact"
              className="text-primary hover:underline font-medium"
            >
              Let&apos;s connect →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
