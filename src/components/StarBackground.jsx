import { useEffect, useState } from "react"

//A Star is nothing just have : id, size, x,y, opacity, animation duration
export const StarBackground = () => {
   
    const [stars, setStars] = useState([]);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      generateStars();
    
      // Add scroll listener
       const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    
    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerHeight * window.innerWidth) / 7000)
    
    
    const newStars = []

    for ( let i =0 ; i < numberOfStars ; i++) {
        newStars.push({
            id:i,
            size: Math.random() * 1.5 + 0.5 ,  // Smaller stars: 0.5-2px -- 3 + 1(this is giving big stars)This will generate stars from 1-3px
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.8 + 0.2 ,
            animationDuration: Math.random() * 3 + 1, // 4 + 2 Means from 2-6 sec
            scrollSpeed: Math.random() * 0.5 + 0.1 // Different scroll speeds 
        })
    }
 setStars(newStars)
}  
  
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: `${star.size}px` ,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${(star.y + scrollY * star.scrollSpeed * 0.1) % 100}%`, // Scroll effect
                opacity: `${star.opacity}`,
                animationDuration:`${star.animationDuration}s`
            }}/>
        ) )}
    </div> // Here in above className a animation class is missing as i did not define them in the first place
}