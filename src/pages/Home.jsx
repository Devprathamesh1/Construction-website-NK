import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Building Tomorrow's World Today</h1>
            <p className="text-xl mb-8">Excellence in Construction and Infrastructure Development</p>
            <Link to="/contact" className="bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-400">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="text-yellow-600 hover:text-yellow-700">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Residential Construction",
    description: "Custom homes and residential developments built to the highest standards."
  },
  {
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and industrial facilities."
  },
  {
    title: "Renovation Services",
    description: "Modernization and renovation of existing structures."
  }
];

const projects = [
  {
    title: "Modern Office Complex",
    description: "A state-of-the-art office building in downtown.",
    image: "/images/project1.jpg"
  },
  {
    title: "Luxury Apartments",
    description: "High-end residential complex with premium amenities.",
    image: "/images/project2.jpg"
  },
  {
    title: "Shopping Center",
    description: "Modern retail space with sustainable design.",
    image: "/images/project3.jpg"
  }
];

export default Home;