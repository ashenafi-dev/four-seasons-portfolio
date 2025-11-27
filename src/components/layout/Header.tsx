"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Process", href: "#process" },
  { name: "My Works", href: "#autumn" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    
    const currentScrollY = window.scrollY;
    
    if (currentScrollY < 10) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
      setIsMenuOpen(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="navbar bg-base-100/95 backdrop-blur-md border-b border-base-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Logo */}
            <Link
              href="#hero"
              className="flex items-center space-x-2 font-bold text-xl hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl">🌸</span>
              <span className="bg-gradient-to-r from-autumn-primary via-spring-primary to-summer-primary bg-clip-text text-transparent">
                Four Seasons
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-base-content/70 hover:text-base-content hover:bg-base-200 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right side - Theme Switcher and Contact Button */}
            <div className="hidden lg:flex items-center gap-2">
              <ThemeSwitcher />
              <Link
                href="#contact"
                className="btn btn-primary btn-sm rounded-full"
              >
                Contact Me
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeSwitcher />
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn btn-ghost btn-circle"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 bg-base-100 border-t border-base-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-base-content/70 hover:text-base-content hover:bg-base-200 rounded-md transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-primary w-full mt-4 rounded-full"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
