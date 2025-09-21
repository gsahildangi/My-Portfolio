import { ArrowUp, Heart } from "lucide-react"

export const Footer = () => {

    return <footer className="bg-card py-4 px-4 relative border-t border-border mt-12 flex flex-col">
      <div className="flex justify-between items-center">
             <p className="text-sm text-muted-foreground"> 
                &copy;{new Date().getFullYear()} SahilTech.co. All Rights Reserved.
             </p>
             
             <a href="#hero" className="text-primary p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                <ArrowUp/>
             </a>
           </div>  
              <p 
               className="flex justify-center items-center gap-1 text-foreground mt-10 pt-4"
              >
               Made with <Heart className="w-4 h-4 text-primary fill-primary"/> in India.
               </p>       
           </footer>
}