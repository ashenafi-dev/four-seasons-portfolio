"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-base-100 to-amber-400/10 opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="animate-fadeIn">
            <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-emerald-400 via-red-400 to-amber-400 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/image/ashenafi.jpg"
                  alt="Ashenafi Yirgalem"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fadeInUp">
            <span className="block text-base-content">Hello, I&apos;m</span>
            <span className="block bg-gradient-to-r from-emerald-400 via-red-400 to-amber-400 bg-clip-text text-transparent">
              Ashenafi Yirgalem
            </span>
          </h1>

          {/* Title/Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-base-content/70 animate-fadeInUp animation-delay-100">
            Full-Stack Developer | Building Scalable Web Solutions
          </p>

          {/* Value Proposition */}
          <p className="max-w-2xl mx-auto text-lg text-base-content/70 animate-fadeInUp animation-delay-200">
            Passionate about transforming complex challenges into intuitive digital products.
            I craft beautiful, performant applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp animation-delay-300">
            <Link
              href="#autumn"
              className="btn bg-emerald-400 hover:bg-emerald-500 text-white border-none rounded-full"
            >
              <span>View My Work</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
            <a
              href="/cv.pdf"
              download
              className="btn btn-outline border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white hover:border-emerald-400 rounded-full"
            >
              <span>Download CV</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <Link href="#about" className="text-base-content/50 hover:text-base-content transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
