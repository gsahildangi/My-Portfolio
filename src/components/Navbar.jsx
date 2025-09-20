import { cn } from "@/lib/util"
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"


const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
]

export const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    //Initialize the theme here
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark')
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    }

    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300 ",
            isScrolled
                ? "py-3 bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50"
                : "py-5")}
        >
            {/* Logo you can say */}
            <div className="container mx-auto flex items-center justify-between">
                <a className="text-base font-bold text-primary flex items-center text-left" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Sahil's</span> Portfolio
                    </span>
                </a>


                {/* Desktop Version */}
                <div className="hidden md:flex items-center space-x-5">
                    <div className="flex items-center space-x-8 text-base">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 whitespace-nowrap">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Theme Toggle */}
                    <button
                        className={cn("p-2 hover:bg-card rounded-full transition-colors duration-300",
                            "focus:outline-hidden"
                        )}
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        >
                            {isDarkMode 
                            ? <Sun className="h-4 w-4 text-yellow-400" /> 
                            : <Moon className="h-4 w-4 text-blue-600" />}

                    </button>
                </div>

                    {/* Mobile Version more of a mobile Menu */}
                   
               {/* Mobile theme Toggle */}
                <div className="md:hidden flex items-center space-x-2">
                    <button
                        className={cn("p-2 hover:bg-card rounded-full transition-colors duration-300",
                            "focus:outline-hidden"
                        )}
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                        >
                            {isDarkMode 
                            ? <Sun className="h-4 w-4 text-yellow-400" /> 
                            : <Moon className="h-4 w-4 text-blue-600" />}

                    </button>


                    {/* Hamburger Button */}
                    <button 
                        onClick={() => { setIsMenuOpen((prev) => !prev) }}
                        className="md:hidden p-2 text-foreground z-50 focus:outline-none"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
              </div>

            {/* <obile Menu Overlay  */}
            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden ",
                        isMenuOpen 
                        ? "opacity-100 pointer-events-auto" 
                        : "opacity-0 pointer-events-none"  // now have to write styling if menu is open user is on mobile - and to check that we have to create a state
                    )}
                    >

                    <div className="flex flex-col space-y-8 text-xl">
                            {navItems.map((item, key) => (
                                <a
                                    key={key}
                                    href={item.href}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
        </nav>
    );
}