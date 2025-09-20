// very difficult to understnad as a fresher so using the normal HeroSection 
// copied from ai
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Get hero section height for movement boundary
    const heroHeight = window.innerHeight
    
    // Calculate spaceship position based on scroll (only within hero section)
    const scrollProgress = Math.min(scrollY / (heroHeight * 0.8), 1) // Progress from 0 to 1 within hero
    const spaceshipTransform = {
        x: -scrollProgress * (window.innerWidth * 0.4), // Move left based on scroll progress
        y: scrollProgress * (heroHeight * 0.6), // Move down based on scroll progress  
        rotate: -scrollProgress * 25, // Rotate left for diagonal movement
        opacity: scrollY < heroHeight ? 1 - (scrollProgress * 0.3) : 0 // Fade out as it reaches corner
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        >
            {/* Animated Spaceship */}
            <div 
                className="fixed top-16 left-1/2 transform -translate-x-1/2 z-0 transition-all duration-200 ease-out pointer-events-none"
                style={{
                    transform: `translate(${spaceshipTransform.x}px, ${spaceshipTransform.y}px) rotate(${spaceshipTransform.rotate}deg)`,
                    opacity: spaceshipTransform.opacity
                }}
            >
                {/* Cartoon Spaceship SVG */}
                <div className="spaceship-container">
                    <svg 
                        width="80" 
                        height="60" 
                        viewBox="0 0 80 60" 
                        className="animate-float"
                    >
                        {/* Spaceship Body */}
                        <ellipse 
                            cx="40" 
                            cy="35" 
                            rx="25" 
                            ry="15" 
                            fill="#e5e7eb"
                            stroke="#9ca3af" 
                            strokeWidth="2"
                        />
                        
                        {/* Spaceship Top */}
                        <ellipse 
                            cx="40" 
                            cy="25" 
                            rx="15" 
                            ry="10" 
                            fill="#f3f4f6"
                            stroke="#9ca3af" 
                            strokeWidth="1.5"
                        />
                        
                        {/* Window */}
                        <circle 
                            cx="40" 
                            cy="25" 
                            r="8" 
                            fill="#60a5fa"
                            opacity="0.7"
                        />
                        <circle 
                            cx="40" 
                            cy="25" 
                            r="6" 
                            fill="#3b82f6"
                            opacity="0.5"
                        />
                        
                        {/* Engine Flames */}
                        <g className="flames">
                            <path 
                                d="M25 45 Q20 55 25 58 Q30 55 35 45" 
                                fill="#f59e0b"
                                opacity="0.8"
                                className="animate-pulse-subtle"
                            />
                            <path 
                                d="M45 45 Q50 55 45 58 Q40 55 45 45" 
                                fill="#f59e0b"
                                opacity="0.8"
                                className="animate-pulse-subtle"
                            />
                            <path 
                                d="M30 47 Q25 52 30 54 Q35 52 40 47" 
                                fill="#ef4444"
                                opacity="0.6"
                                className="animate-pulse-subtle"
                            />
                        </g>
                        
                        {/* Side Details */}
                        <circle cx="25" cy="35" r="3" fill="#9ca3af" />
                        <circle cx="55" cy="35" r="3" fill="#9ca3af" />
                        
                        {/* Landing Gear */}
                        <rect x="20" y="48" width="2" height="4" fill="#6b7280" />
                        <rect x="58" y="48" width="2" height="4" fill="#6b7280" />
                    </svg>
                    
                    {/* Spaceship Trail Effect */}
                    <div className="absolute top-1/2 -right-8 w-12 h-1 bg-gradient-to-r from-primary to-transparent rounded-full opacity-60 animate-pulse"></div>
                </div>
            </div>

            {/* Stars Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="star w-1 h-1 top-[10%] left-[20%] animate-pulse"></div>
                <div className="star w-0.5 h-0.5 top-[25%] left-[80%] animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="star w-1.5 h-1.5 top-[60%] left-[15%] animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="star w-0.5 h-0.5 top-[80%] left-[70%] animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="star w-1 h-1 top-[40%] left-[90%] animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="star w-0.5 h-0.5 top-[15%] left-[50%] animate-pulse" style={{animationDelay: '2.5s'}}></div>
            </div>

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Sahil</span>
                        <span className="text-glow ml-2 opacity-0 animate-fade-in-delay-2">Dangi</span>
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        A frontend developer passionate about making interfaces that are a joy to use. 
                        My passion lies in creating clean, intuitive interfaces that leave a lasting impression.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            <button className="cursor-pointer">View my work</button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm mb-2 text-muted-foreground">Scroll</span>
                <ArrowDown className="w-5 h-5 text-primary"/>
            </div>
        </section>
    )
}