"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Seasonal Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-autumn-bg via-background to-winter-bg opacity-50" />
        {/* Floating seasonal elements */}
        <div className="absolute top-20 left-10 text-4xl animate-float opacity-60">🍂</div>
        <div className="absolute top-40 right-20 text-3xl animate-float animation-delay-200 opacity-60">❄️</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-float animation-delay-300 opacity-60">🌷</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float animation-delay-100 opacity-60">☀️</div>
        <div className="absolute top-1/4 left-1/4 text-2xl animate-float animation-delay-400 opacity-40">🍁</div>
        <div className="absolute bottom-1/4 right-1/4 text-2xl animate-float animation-delay-500 opacity-40">🌸</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Profile Image Placeholder */}
          <div className="animate-fadeIn">
            <div className="mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-autumn-primary via-spring-primary to-summer-primary p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-5xl sm:text-6xl">
                👨‍💻
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fadeInUp">
            <span className="block text-foreground">Hello, I&apos;m</span>
            <span className="block bg-gradient-to-r from-autumn-primary via-spring-primary to-summer-primary bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>

          {/* Title/Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground animate-fadeInUp animation-delay-100">
            Full-Stack Developer | Building Scalable Web Solutions
          </p>

          {/* Value Proposition */}
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground animate-fadeInUp animation-delay-200">
            Passionate about transforming complex challenges into intuitive digital products.
            I craft beautiful, performant applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp animation-delay-300">
            <Link
              href="#autumn"
              className="inline-flex items-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-full transition-all hover:shadow-lg hover:scale-105"
            >
              <span>View My Work</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-3 text-base font-medium text-foreground bg-card border border-border hover:bg-muted rounded-full transition-all hover:shadow-lg hover:scale-105"
            >
              <span>Download Resume</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
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
