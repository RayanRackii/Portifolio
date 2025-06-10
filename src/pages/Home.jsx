import { Star } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { useState } from "react";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>

      <StarBackground isDarkMode={isDarkMode}/>

      <NavBar />

      <main>
        <HeroSection />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
