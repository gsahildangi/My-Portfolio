import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
     
    {
        id:1,
        title:"Shopping Cart Demo",
        description:"A fully functional e-commerce shopping cart built with React. Features include adding/removing items, quantity management, real-time price calculations, and a clean, responsive user interface for seamless shopping experience.",
        image:"/projects/Cart-demo.png",
        tags: ["React" ,"JavaScript" , "Html/Css"],
        demoUrl: "#",
        githubUrl: "#"
    },
    
    {
        id:2,
        title:"Weather-App",
        description:"A beautiful and responsive weather application that provides real-time weather information. Built with React and styled using TailwindCSS, it features location-based weather data, forecasts, and an intuitive user interface.",
        image:"/projects/Wheather-app.png",
        tags: ["React" ,"TailwindCss" , "Html/Css"],
        demoUrl: "#",
        githubUrl: "#"
    },
    
    {
        id:3,
        title:"Quiz-App",
        description:"An interactive quiz application designed to test knowledge across various topics. Built with React and TailwindCSS, it features multiple-choice questions, score tracking, timer functionality, and instant feedback for an engaging learning experience.",
        image:"/projects/Quiz-app.png",
        tags: ["React" ,"TailwindCss" , "Html/Css"],
        demoUrl: "#",
        githubUrl: "#"
    }

]


export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto mx-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">Featured<span className="text-primary text-glow">Projects</span></h2>
             <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each projects was carefully crafted with attention
                to details, performance, and user experience.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                     <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                          <div className="h-48 overflow-hidden"> {/*This overflow-hidden will cut the image on hover and keep the image to spill from element on hover */}
                            <img  src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                          </div>
                          <div className="p-6">
                               <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag,tagIndex)=>(
                                 <span key={`${project.id}-${tag}`} className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors duration-200">
                                    {tag}
                                  </span>
                                ))}
                               </div>
                          
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.description}</p>
                       
                       <div className="flex justify-between items-center">
                           <div className="flex space-x-4">  
                              <a href={project.demoUrl} 
                                className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale:110"
                                // target="_blank"
                              >
                                <ExternalLink size={22}/>
                              </a>
                              <a href={project.githubUrl} 
                                //  target="_blank"
                                className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale:110">
                                <Github size={22}/>
                              </a>
                           </div>
                        </div>
                       </div>
                     
                     </div>
                  ))}
             </div>
             
             <div className="text-center mt-12">
                <a href="https://github.com/gsahildangi" 
                  target="_blank"   
                  className="cosmic-button w-fit flex items-center mx-auto gap-2"> 
                    Check my GitHub <ArrowRight size={20}/>
                </a>
             </div>

        </div>

    </section>
}