"use client";

import { useState } from "react";
import { Header, Footer } from "@/components/layout";
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
        
        {/* Project Sections with Scroll Snap */}
        <div className="h-screen overflow-y-scroll scroll-snap-type-y-mandatory">
          <ProjectAutumn onOpenCaseStudy={() => openCaseStudy(autumnProject, "autumn")} />
          <ProjectWinter onOpenCaseStudy={() => openCaseStudy(winterProject, "winter")} />
          <ProjectSpring onOpenCaseStudy={() => openCaseStudy(springProject, "spring")} />
          <ProjectSummer onOpenCaseStudy={() => openCaseStudy(summerProject, "summer")} />
        </div>
        
        <Testimonials />
        <Contact />
      </main>
      <Footer />

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
