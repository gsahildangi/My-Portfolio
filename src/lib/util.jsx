// We have  make this particular file to manage the large classes of tailwind and also to use tailwind merge
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs) => {
   return twMerge(clsx(inputs))
}

// Go check src/components/ThemeToggle - and check we have used the cn() function there
// here cn is de structure the input and then twMerge will merge all the classes that will come in cn funtion.
// After making above function now while writing the large classes in same line we can send the tailwind using commos and 
//readibilty is more in this case