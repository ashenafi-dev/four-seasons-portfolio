"use client";

import { useState } from "react";
import { Header } from "@/components/layout";
import {
  Hero,
  About,
  Experience,
  Skills,
  Process,
  ProjectAutumn,
  ProjectWinter,
  ProjectSpring,
  ProjectSummer,
  Testimonials,
  Contact,
} from "@/components/sections";
import { CaseStudyModal } from "@/components/ui";
import { Project } from "@/components/ui/ProjectCard";
import { autumnProject } from "@/components/sections/ProjectAutumn";
import { winterProject } from "@/components/sections/ProjectWinter";
import { springProject } from "@/components/sections/ProjectSpring";
import { summerProject } from "@/components/sections/ProjectSummer";

type Season = "autumn" | "winter" | "spring" | "summer";

interface ModalState {
  isOpen: boolean;
  project: Project | null;
  season: Season;
}

export default function Home() {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    project: null,
    season: "autumn",
  });

  const openCaseStudy = (project: Project, season: Season) => {
    setModalState({
      isOpen: true,
      project,
      season,
    });
  };

  const closeCaseStudy = () => {
    setModalState({
      isOpen: false,
      project: null,
      season: "autumn",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Process />
        
        {/* My Works Section Header */}
        <section id="my-works" className="py-16 bg-base-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-base-content mb-4">
                My Works
              </h2>
              <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                Explore my featured projects showcasing diverse skills and creative solutions
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-red-400 to-amber-400 mx-auto mt-4 rounded-full" />
            </div>
          </div>
        </section>
        
        {/* Project Sections */}
        <ProjectAutumn onOpenCaseStudy={() => openCaseStudy(autumnProject, "autumn")} />
        <ProjectWinter onOpenCaseStudy={() => openCaseStudy(winterProject, "winter")} />
        <ProjectSpring onOpenCaseStudy={() => openCaseStudy(springProject, "spring")} />
        <ProjectSummer onOpenCaseStudy={() => openCaseStudy(summerProject, "summer")} />
        
        <Testimonials />
        <Contact />
      </main>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={modalState.project}
        isOpen={modalState.isOpen}
        onClose={closeCaseStudy}
        season={modalState.season}
      />
    </div>
  );
}
