import { useState } from "react";
import { cn } from "@/lib/util"

// Skills data with image URLs for icons
const skills = [
    // Frontend
    { name: "HTML/CSS", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JavaScript", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", category: "frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", category: "frontend", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    
    // Backend
    { name: "Node.js", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Java", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "SQL", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", category: "backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

    // Tools
    { name: "Git/GitHub", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", category: "tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "PostMan", category: "tools", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section 
            id="skills" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary text-glow">Skills</span>
                </h2>

                {/* Button to choose between different categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                    ? "bg-primary text-primary-foreground" 
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category} 
                        </button>
                    ))}
                </div>

                {/* Skill Section */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="group bg-card p-6 rounded-lg shadow-xs card-hover relative overflow-hidden border border-transparent hover:border-primary/20 active:scale-95 transition-all duration-300"
                        > 
                            {/* Background glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Skill Icon */}
                            <div className="flex justify-center mb-4 relative z-10">
                                <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 group-active:from-primary/20 group-active:to-primary/10 transition-all duration-300">
                                    <img 
                                        src={skill.icon} 
                                        alt={`${skill.name} icon`}
                                        className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-110 group-active:rotate-3 filter opacity-70 group-hover:opacity-90 group-active:opacity-90 group-hover:drop-shadow-lg grayscale-[20%] group-hover:grayscale-0 group-active:grayscale-0"
                                    />
                                </div>
                            </div>
                            
                            {/* Skill Name */}
                            <div className="text-center relative z-10">
                                <h3 className="font-semibold text-lg group-hover:text-primary group-active:text-primary transition-colors duration-300">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}