import { Briefcase, Code, Lightbulb, Palette, User } from "lucide-react"

export const AboutSection = () => {

    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 item-center">

                <div className="space-y-6">
                   <h3 className="text-2xl font-semibold md:text-left">Let's <span className="text-primary">talk</span> for
                       Something special</h3>

                   <p className="text-muted-foreground">I'm a passionate fresher eager to push the limits of creativity and create high-engaging, user-friendly, 
                      and memorable interactive experiences. I'm dedicated to learning and building responsive, accessible, and performant web applications
                      using modern technologies.</p>

                    <p className="text-muted-foreground">
                     I'm excited about creating elegant solutions to complex problems, and I'm constantly learning new technologies and 
                     techniques to stay at the forefront of the ever-evolving web landscape. Ready to bring fresh perspectives and enthusiasm to every project.
                   </p>
   

                   <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                    <a href="#contact" className="cosmic-button">
                        Get In Touch
                    </a>
                    <a href="#" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300" >
                       Download CV
                    </a>
                   </div> 
                </div>


                <div className="space-y-4">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <Code className="h-6 w-6 text-primary"></Code>
                            </div>
                            
                            <div className="text-left">
                              <h4 className="font-semibold mb-2">Web Development</h4>
                              <p className="text-muted-foreground text-sm">
                                Creating responsive websites and web application with modern framework.
                              </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <Palette className="h-6 w-6 text-primary"></Palette>
                            </div>
                            <div className="text-left">
                              <h4 className="font-semibold mb-2">UI/UX Design</h4>
                              <p className="text-muted-foreground text-sm">
                                Exploring design principles to create intuitive user interfaces and engaging user experiences.
                              </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <Lightbulb className="h-6 w-6 text-primary"></Lightbulb>
                            </div>
                            <div className="text-left">
                              <h4 className="font-semibold mb-2">Problem Solving</h4>
                              <p className="text-muted-foreground text-sm">
                                Passionate about tackling challenges with creative solutions and continuous learning mindset.
                              </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
}