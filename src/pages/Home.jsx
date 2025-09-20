// import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
// import {HeroSectionNew } from "../components/HeroSectionNew"

export const Home = () => {
    return <div className="min-h-screen bg-backgound text-foreground overflow-x-hidden">
    {/* We have intergrated this in the navbar as it is giving issue in  responsive design*/}
    {/*Theme Toggle */}
    {/* <ThemeToggle /> */}
    
    {/* Background Effect */}
     <StarBackground />
    
    {/* Navbar */}
     <Navbar />
    
    {/* Main Content i.e About, Contact, Skills */}
    <main>
    <HeroSection />
    {/* <HeroSectionNew /> */}
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    </main>
    
    
    {/* Footer */}
    <Footer />
    </div>
}