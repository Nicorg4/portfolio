import { AboutMeSection } from '../components/AboutMeSection'
import { Footer } from '../components/Footer'
import HeroSection from '../components/HeroSection'
import { Navbar } from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'
import { SkillsSection } from '../components/SkillsSection'
import { StarBackground } from '../components/StarBackground'

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effects */}
            <StarBackground />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutMeSection />
                <SkillsSection />
                <ProjectsSection />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    )
}
