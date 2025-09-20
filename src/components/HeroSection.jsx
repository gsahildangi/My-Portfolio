import { ArrowDown ,Instagram,Linkedin, Twitter } from "lucide-react"
import { useState, useEffect } from "react"

export const HeroSection = () => {
   const [shouldAnimate, setShouldAnimate] = useState(false)
   const [showScrollIndicator, setShowScrollIndicator] = useState(true)

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setShowScrollIndicator(false)
         } else {
            setShowScrollIndicator(true)
         }
      }

      const handleHashChange = () => {
         if (window.location.hash === '#hero' || window.location.hash === '') {
            setShouldAnimate(false)
            setTimeout(() => setShouldAnimate(true), 50)
         }
      }

      // this will trigger when on mount
      setShouldAnimate(true)

      // Listen for scroll and hash changes
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('hashchange', handleHashChange)

      return () => {
         window.removeEventListener('scroll', handleScroll)
         window.removeEventListener('hashchange', handleHashChange)
      }
   }, [])

   return (
      <section
         id="hero"
         className="relative min-h-screen flex flex-col items-center justify-center px-4"
      >
         <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
               <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight">
                  <span className={shouldAnimate ? "opacity-0 animate-fade-in" : "opacity-0"}>
                     Hello, I'm
                  </span>
                  <span className={`text-primary ${shouldAnimate
                     ? "opacity-0 animate-fade-in-delay-1"
                     : "opacity-0"}`}
                  >
                     {' '}Sahil
                  </span>
                  <span className={`text-gradient ml-2 ${shouldAnimate
                     ? "opacity-0 animate-fade-in-delay-2"
                     : "opacity-0"}`}
                  >
                     Dangi
                  </span>
               </h1>
               <p className={`text-base md:text-lg text-muted-foreground max-w-4xl mx-auto ${shouldAnimate
                  ? "opacity-0 animate-fade-in-delay-3"
                  : "opacity-0"}`}
               >
                  Where code meets creativity. I'm a frontend developer who turns complex problems
                  into elegant solutions, building interfaces that feel natural and perform beautifully
                  across every device.

               </p>
               <div className={`pt-4 ${shouldAnimate ? "opacity-0 animate-fade-in-delay-4" : "opacity-0"}`}>
                  <a href="#projects" className="cosmic-button">
                     <button className="cursor-pointer">View my work</button>
                  </a>
               </div>

                <div className="pt-8">
                  <h4 className="font-medium mb-4">Connect with me.</h4>
                    <div className="flex space-x-4 justify-center">
                      <a href="https://www.linkedin.com/in/sahil-dangi-41ba61146" target="_blank">
                       <Linkedin />
                       </a> 
                     <a href="" target="_blank">
                     <Twitter />
                    </a>  
                    <a href="" target="_blank">
                     <Instagram />
                    </a>  
                    </div>
                </div>

            </div>
         </div>
         <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-500 ${showScrollIndicator
            ? 'opacity-100 animate-bounce'
            : 'opacity-0 pointer-events-none'
            }`}>
            <span className="text-sm mb-2 text-muted-foreground">Scroll</span>
            <ArrowDown className="w-5 h-5 text-primary" />
         </div>
      </section>
   )
}
