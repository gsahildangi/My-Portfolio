import { ArrowUp } from "lucide-react"

export const NotFound = () => {
// This is pending.
    return <div >
         <div className="text-2xl sm:text-xl bg-backgound flex flex-col gap-4 items-center justify-between justify-center h-screen">
            <h1 className="text-7xl font-semibold">404</h1>
             <h2 className="font-semibold">You have landed on a<span className="text-primary"> Wrong </span>Page</h2>
             <a href="/#hero" target="_blank" className="text-primary font-bold">Sahil's Protfolio</a>
             <h4 className="flex flex-row gap-2 ">Follow Above link <ArrowUp /></h4>
         </div>
        
        </div>
}