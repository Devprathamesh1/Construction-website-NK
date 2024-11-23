function Services() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Residential Construction",
    description: "Building dream homes with attention to detail and quality craftsmanship.",
    features: [
      "Custom home construction",
      "Residential developments",
      "Home renovations and extensions",
      "Interior finishing",
      "Sustainable home solutions"
    ]
  },
  {
    title: "Commercial Construction",
    description: "Creating modern commercial spaces that drive business success.",
    features: [
      "Office buildings",
      "Retail spaces",
      "Industrial facilities",
      "Warehouses",
      "Commercial renovations"
    ]
  },
  {
    title: "Infrastructure Development",
    description: "Building the foundation for community growth and development.",
    features: [
      "Road construction",
      "Bridge building",
      "Underground utilities",
      "Public facilities",
      "Transportation infrastructure"
    ]
  },
  {
    title: "Specialized Projects",
    description: "Handling unique construction challenges with innovative solutions.",
    features: [
      "Healthcare facilities",
      "Educational institutions",
      "Sports complexes",
      "Cultural centers",
      "Religious buildings"
    ]
  }
];

export default Services;