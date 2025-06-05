import { Star } from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/skillsSection"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <ThemeToggle />

        <StarBackground />
        
        <NavBar />

        <main>
            <HeroSection />

            <AboutSection />

            <SkillsSection />
        </main>
    </div>
}