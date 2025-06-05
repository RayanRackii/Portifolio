import { Star } from "lucide-react"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <ThemeToggle />

        <StarBackground />
        
        <NavBar></NavBar>
    </div>
}