import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import SkillProgress from "@/components/SkillProgress";
import Experience from "@/components/Experience";
import ProjectsSection from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="relative">
        <Navigation />
        <Hero />
        <About />
        <Stats />
        <Skills />
        <SkillProgress />
        <Experience />
        <ProjectsSection />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
