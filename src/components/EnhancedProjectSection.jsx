import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Calendar, Star, Eye, Filter } from "lucide-react";

// Not currently using this as it is advance and i wanted to use simple component
const projects = [
  {
    id: 1,
    title: "Shopping Cart Demo",
    description: "A fully functional e-commerce cart with add/remove items, quantity controls, real-time price calculations, and persistent storage functionality.",
    image: "/projects/Cart-demo.png",
    tags: ["React", "JavaScript", "HTML/CSS"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Live",
    completedDate: "Dec 2024",
    features: ["Real-time updates", "Persistent storage", "Responsive design"],
    githubStars: 12,
    liveViews: 234
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather application with location search, 5-day forecasts, beautiful weather animations, and detailed meteorological data display.",
    image: "/projects/Weather-app.png", 
    tags: ["React", "TailwindCSS", "API Integration"],
    demoUrl: "#",
    githubUrl: "#",
    status: "Live",
    completedDate: "Nov 2024",
    features: ["5-day forecast", "Location search", "Weather animations"],
    githubStars: 8,
    liveViews: 156
  },
  {
    id: 3,
    title: "Quiz App",
    description: "Interactive quiz application with multiple categories, score tracking, timer functionality, and comprehensive performance analytics dashboard.",
    image: "/projects/Quiz-app.png",
    tags: ["React", "TailwindCSS", "Local Storage"],
    demoUrl: "#",
    githubUrl: "#", 
    status: "Featured",
    completedDate: "Oct 2024",
    features: ["Multiple categories", "Score tracking", "Performance analytics"],
    githubStars: 15,
    liveViews: 89
  }
];

const filterOptions = ["All", "React", "JavaScript", "TailwindCSS", "API Integration"];

export const EnhancedProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.some(tag => tag.includes(activeFilter)));

  const getStatusColor = (status) => {
    switch(status) {
      case "Live":  
        return { bg: "bg-green-500", shadow: "0 0 10px rgba(34, 197, 94, 0.4)" };
      case "Featured": 
        return { bg: "bg-purple-500", shadow: "0 0 10px rgba(139, 92, 246, 0.4)" };
      case "In Progress": 
        return { bg: "bg-yellow-500", shadow: "0 0 10px rgba(234, 179, 8, 0.4)" };
      default: 
        return { bg: "bg-gray-500", shadow: "0 0 10px rgba(107, 114, 128, 0.4)" };
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background Stars using your existing star class */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="star w-1 h-1 top-20 left-10 animate-pulse-subtle"></div>
        <div className="star w-2 h-2 top-40 right-20 animate-float"></div>
        <div className="star w-1 h-1 bottom-32 left-1/4 animate-pulse-subtle"></div>
        <div className="star w-1 h-1 top-60 right-1/3 animate-float"></div>
        <div className="star w-2 h-2 bottom-20 right-10 animate-pulse-subtle"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Here are some of my recent projects. Each project was carefully crafted with attention
            to details, performance, and user experience. Click to explore live demos and source code.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-fade-in-delay-1">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={16} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "cosmic-button"
                    : "bg-card hover:bg-primary/10 text-foreground hover:text-primary border border-border hover:scale-105"
                }`}
                style={{
                  boxShadow: activeFilter === filter 
                    ? "0 0 15px rgba(139, 92, 246, 0.3)" 
                    : "none"
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-xl overflow-hidden shadow-lg card-hover gradient-border opacity-0 ${
                index === 0 ? 'animate-fade-in-delay-2' : 
                index === 1 ? 'animate-fade-in-delay-3' : 'animate-fade-in-delay-4'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                transition: "all 0.5s ease",
                transform: hoveredProject === project.id ? "scale(1.03)" : "scale(1)",
                boxShadow: hoveredProject === project.id 
                  ? "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 30px rgba(139, 92, 246, 0.15)"
                  : "0 4px 6px rgba(0, 0, 0, 0.1)"
              }}
            >
              {/* Project Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Status Badge */}
                <div 
                  className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full text-white ${getStatusColor(project.status).bg}`}
                  style={{ boxShadow: getStatusColor(project.status).shadow }}
                >
                  {project.status}
                </div>
                
                {/* Hover Overlay */}
                <div 
                  className={`absolute inset-0 bg-primary/20 backdrop-blur-sm transition-all duration-500 flex items-center justify-center gap-4 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: hoveredProject === project.id 
                      ? "rgba(139, 92, 246, 0.15)" 
                      : "transparent"
                  }}
                >
                  <a
                    href={project.demoUrl}
                    className="cosmic-button flex items-center gap-2 transform transition-transform hover:scale-110"
                  >
                    <Eye size={16} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="cosmic-button flex items-center gap-2 transform transition-transform hover:scale-110"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary/20 text-primary border-primary/30 transition-all duration-300 cursor-pointer hover:scale-105"
                      style={{
                        background: "rgba(139, 92, 246, 0.1)",
                        borderColor: "rgba(139, 92, 246, 0.3)"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(139, 92, 246, 0.2)";
                        e.target.style.borderColor = "rgba(139, 92, 246, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(139, 92, 246, 0.1)";
                        e.target.style.borderColor = "rgba(139, 92, 246, 0.3)";
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary mb-2 text-glow">Key Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex} 
                        className="text-xs text-muted-foreground bg-card border border-border rounded px-2 py-1 transition-all hover:border-primary/30 hover:text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Calendar size={12} />
                      {project.completedDate}
                    </span>
                    <span className="flex items-center gap-1 hover:text-primary transition-colors">
                      <Star size={12} />
                      {project.githubStars}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Eye size={12} />
                    {project.liveViews} views
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-125"
                      title="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-125"
                      title="View Source Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <button className="text-xs text-primary hover:text-primary/80 font-medium transition-all hover:scale-105">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 opacity-0 animate-fade-in-delay-2">
            <p className="text-muted-foreground text-lg">No projects found for "{activeFilter}"</p>
            <button 
              onClick={() => setActiveFilter("All")}
              className="cosmic-button mt-4"
            >
              Show All Projects
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center opacity-0 animate-fade-in-delay-4">
          <a
            href="https://github.com/gsahildangi"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center gap-3 text-lg px-8 py-4 group"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = "0 0 30px rgba(139, 92, 246, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = "0 0 20px rgba(139, 92, 246, 0.4)";
            }}
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform" />
            Explore All Projects on GitHub
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Project Count Badge  "Not Required"*/}
        {/* <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-primary text-primary-foreground px-3 py-2 rounded-full text-sm font-medium shadow-lg">
            {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''} 
            {activeFilter !== "All" && ` in ${activeFilter}`}
          </div>
        </div> */}
      </div>
    </section>
  );
}