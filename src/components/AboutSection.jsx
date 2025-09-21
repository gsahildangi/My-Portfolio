import { Code, Download, DownloadIcon, Lightbulb, Palette } from "lucide-react"

export const AboutSection = () => {
    
    // this handler is to download the cv 
    const handleDownloadCV = () => {
        
        const link = document.createElement('a');
        link.href = '/Sahil_Dangi_CV.pdf';  //Placed in the public folder if in any other paste address accordigly
        link.download = 'Sahil_Dangi_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Option 2: If using external link (Google Drive, etc.) this is a second option if using online drive
        // window.open('https://your-cv-link.com', '_blank');
    };

    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary text-glow">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="space-y-6 text-center md:text-left">
                   <h3 className="text-2xl font-semibold md:text-left">Let's <span className="text-primary">talk</span> for
                       Something special</h3>

                   <p className="text-muted-foreground">
                      I'm a passionate fresher eager to create engaging, user-friendly web experiences. 
                      Dedicated to building responsive and accessible applications using modern technologies.
                   </p>

                    <p className="text-muted-foreground">
                     Excited about solving complex problems elegantly, I constantly learn new technologies 
                     to stay current. Ready to bring fresh perspectives and enthusiasm to every project.
                   </p>
   

                   <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start items-center">
                    <a href="#contact" className="cosmic-button w-full sm:w-auto text-center">
                        Get In Touch
                    </a>
                    <button 
                        onClick={handleDownloadCV}
                        className="flex items-start justify-center md:justify-start gap-2 px-6 py-2 font-semibold rounded-full border border-primary w-full sm:w-auto hover:bg-primary/30 transition-colors duration-300"
                    >
                       Download CV <DownloadIcon size={"20px"}/>
                    </button>
                   </div> 
                </div>


                <div className="space-y-4">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
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
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
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
                            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
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