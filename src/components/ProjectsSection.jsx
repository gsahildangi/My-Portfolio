import { Description } from "@radix-ui/react-toast"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
     
    {
        id:1,
        title:"Shopping Cart Demo",
        description:"the description for first project",
        image:"/projects/Cart-demo.png",
        tags: ["React" ,"JavaScript" , "Html/Css"],
        demoUrl: "#",
        githubUrl: "#"
    },
    
    {
        id:2,
        title:"Wheather-App",
        description:"the description for second project",
        image:"/projects/Wheather-app.png",
        tags: ["React" ,"TailwindCss" , "Html/Css"],
        demoUrl: "#",
        githubUrl: "#"
    },
    
    {
        id:1,
        title:"Quiz-App",
        description:"the description for third project",
        image:"/projects/Quiz-app.png",
        tags: ["React" ,"TailwindCss" , "Html/Css"],
        demoUrl: "#",
        githubUrl: "#"
    }

]


export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto mx-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">Featured<span className="text-primary">Projects</span></h2>
             <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each projects was carefully crafted with attention
                to details, performance, and user experience.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project,key) => (
                     <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                          <div className="h-48 overflow-hidden">
                            <img  src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                          </div>
                          <div className="p-6">
                               <div className="flex flex-wrap gap-2 mb-4 justify-between item-center">
                                {project.tags.map((tag)=>(
                                 <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                    {tag}</span>
                                ))}
                               </div>
                          
                          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                       
                       <div className="flex justify-between item-center">
                           <div className="flex space-x-3">  
                              <a href={project.demoUrl} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                // target="_blank"
                              >
                                <ExternalLink size={24}/>
                              </a>
                              <a href={project.githubUrl} 
                                //  target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github size={24}/>
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