function Projects() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Modern Office Complex",
    description: "A 20-story modern office building featuring sustainable design and smart technology integration.",
    image: "/images/project1.jpg",
    tags: ["Commercial", "Sustainable", "Modern"]
  },
  {
    title: "Luxury Residential Tower",
    description: "High-end residential complex with 200 premium apartments and world-class amenities.",
    image: "/images/project2.jpg",
    tags: ["Residential", "Luxury", "High-rise"]
  },
  {
    title: "Shopping Mall",
    description: "Contemporary shopping center with 100+ retail spaces and entertainment facilities.",
    image: "/images/project3.jpg",
    tags: ["Commercial", "Retail", "Entertainment"]
  },
  {
    title: "Industrial Park",
    description: "State-of-the-art industrial facility with advanced manufacturing capabilities.",
    image: "/images/project4.jpg",
    tags: ["Industrial", "Manufacturing"]
  },
  {
    title: "Healthcare Center",
    description: "Modern medical facility with specialized healthcare infrastructure.",
    image: "/images/project5.jpg",
    tags: ["Healthcare", "Specialized"]
  },
  {
    title: "Educational Campus",
    description: "Comprehensive educational facility with modern classrooms and research centers.",
    image: "/images/project6.jpg",
    tags: ["Educational", "Institutional"]
  }
];

export default Projects;