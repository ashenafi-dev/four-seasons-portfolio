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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Process />
        <ProjectAutumn />
        <ProjectWinter />
        <ProjectSpring />
        <ProjectSummer />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
