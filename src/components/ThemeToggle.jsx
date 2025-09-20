// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
// import { cn } from "@/lib/util";

// export const ThemeToggle = () => {

//     const [isDarkMode, setIsDarkMode] = useState(true);

//     useEffect(() => {
//         const storedTheme = localStorage.getItem("theme")
//         if (storedTheme === "dark") {
//             setIsDarkMode(false);
//             document.documentElement.classList.remove('dark')
//         } else {
//             setIsDarkMode(true)
//             document.documentElement.classList.add('dark')

//         }
//     }, [])

//     const toggleTheme = () => {
//         if (isDarkMode) {
//             document.documentElement.classList.remove('dark')
//             localStorage.setItem("theme", "dark")
//             setIsDarkMode(false);
//         } else {
//             document.documentElement.classList.add('dark')
//             localStorage.setItem("theme", "light    ")
//             setIsDarkMode(true);
//         }
//     }

//     return <button
//         className={cn("fixed max-sm:hidden top-2 right-2 z-50 p-2 rounded-full transition-colors duration-300",
//                       "focus:outline-hidden"
//         )}
//         onClick={toggleTheme}>{isDarkMode ? <Sun className= "h-5 w-5 text-yellow-300"/> : <Moon className="h-5 w-5 text-blue-700"/>}

//     </button>
// }   