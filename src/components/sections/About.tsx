"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-base-200/30" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Visually hidden heading for accessibility */}
        <h2 id="about-heading" className="sr-only">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/20 via-red-400/20 to-amber-400/20 rounded-2xl blur-xl" />
              <div className="relative bg-base-100 rounded-2xl p-6 border border-base-300 shadow-lg">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/image/ashenafi.jpg"
                    alt="Ashenafi Yirgalem"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            {/* Headline */}
            <h3 className="text-2xl sm:text-3xl font-bold text-base-content">
              Crafting Digital Experiences with Passion
            </h3>

            {/* Comprehensive Bio Paragraph */}
            <p className="text-base-content/80 leading-relaxed text-lg">
              I&apos;m a passionate Full-Stack Developer with a deep love for transforming complex challenges 
              into elegant, user-centric digital solutions. My journey in software development began with 
              simple curiosity and has evolved into a career dedicated to building scalable, performant 
              applications. I specialize in modern web technologies, embracing clean code principles and 
              best practices to deliver products that truly make a difference. When I&apos;m not coding, I&apos;m 
              exploring emerging technologies, contributing to open-source, or drawing inspiration from 
              the world around me. I&apos;m always excited to collaborate on innovative projects that push 
              the boundaries of what&apos;s possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
