import { ArrowDown } from "lucide-react"


export const HeroSection = () => {


    // Now we are using here hero as we want to link it to the <Home href="#hero">
 return <section
             id="hero"
             className="relative min-h-screen flex flex-col items-center justify-center px-4"
             >
             <div className="container max-w-4xl mx-auto text-center z-10">
                  <div className="space-y-6">
                     <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Sahil</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Dangi</span>
                     </h1>
                     <p className="text-base md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
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
}