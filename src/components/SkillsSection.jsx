import { useState } from "react";
import {cn} from "../lib/util"


//Kepping 3 major category : frontend, backend, tools
const skills = [
    //Frontend
    {name:"HTML/CSS" , level:95 , category:"frontend"},
    {name:"JavaScript" , level:90 , category:"frontend"},
    {name:"React" , level:90 , category:"frontend"},
    {name:"Tailwind Css" , level:75 , category:"frontend"},
    
    //Backend
    {name:"NodeJs" , level:70 , category:"backend"},
    {name:"Java" , level:60 , category:"backend"},
    {name:"SQL" , level:70 , category:"backend"},
    {name:"MongoDb" , level:60 , category:"backend"},

    //Tools
      {name:"Git/Gihub" , level:85 , category:"tools"},
      {name:"VS Code" , level:90 , category:"tools"},
      {name:"Figma" , level:50 , category:"tools"},
      {name:"PostMan" , level:75 , category:"tools"},
];

const categories = ["all","frontend","backend","tools"]

export const SkillsSection = () => {

   const [activeCategory, setActiveCategory] = useState("all");

   const filterSkills = skills.filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
   )

    return <section 
    id="skills" 
    className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto mx-w-5xl">
           <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
             My <span className="text-primary">Skills</span>
           </h2>
         {/* Button to choose between different categories */}
         <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category ,key) => (
                <button 
                key={key} 
                onClick={() => setActiveCategory(category)}
                className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize" ,
                              activeCategory == category 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}>
                   {category} 
                </button>
            ))}
         </div>

           {/* Skill Section */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {filterSkills.map((skill,key) => (
                 <div 
                 key={key} 
                 className="bg-card p-6 rounded-lg shadow-xs card-hover w-50"
                 > 
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>
                  
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                         <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                         style={{width: skill.level + "%"}}/>
                  </div>
                 <div className="text-right mt-1"> 
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                 </div>

                 </div>
                    
             ))}

           </div>


        </div>
    </section>
}