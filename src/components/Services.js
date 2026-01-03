import { FaLayerGroup, FaPaintBrush, FaWrench, FaLightbulb, FaThermometerHalf, FaVolumeUp } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLayerGroup className="text-5xl text-green-600" />,
      title: 'False Ceiling Installation',
      description: 'Professional dropped/suspended ceiling installation that hides wiring, ducts, and structural imperfections while creating a modern, clean finish.',
      features: ['Gypsum Ceilings', 'PVC Ceilings', 'Metal & Aluminum'],
    },
    {
      icon: <FaPaintBrush className="text-5xl text-green-600" />,
      title: 'POP Work',
      description: 'High-quality Plaster of Paris work for smooth finishes, decorative elements, and elegant designs that add sophistication to your interiors.',
      features: ['Wall Textures', 'Decorative Moldings', 'Cornices & Borders'],
    },
    {
      icon: <FaWrench className="text-5xl text-green-600" />,
      title: 'Gypsum Solutions',
      description: 'Lightweight, durable, and fire-resistant gypsum installations for partition walls, wall cladding, and custom designs tailored to your needs.',
      features: ['Partition Walls', 'Wall Cladding', 'Custom Designs'],
    },
    {
      icon: <FaLightbulb className="text-5xl text-green-600" />,
      title: 'Integrated Lighting',
      description: 'Expert installation of recessed lights, LED strips, spotlights, and cove lighting to enhance ambiance and reduce electricity costs.',
      features: ['LED Integration', 'Spotlights', 'Cove Lighting'],
    },
    {
      icon: <FaThermometerHalf className="text-5xl text-green-600" />,
      title: 'Temperature Control',
      description: 'Create an air gap between ceilings for improved insulation, reducing heat transfer and lowering your cooling and heating bills significantly.',
      features: ['Heat Insulation', 'Energy Efficiency', 'Cost Reduction'],
    },
    {
      icon: <FaVolumeUp className="text-5xl text-green-600" />,
      title: 'Sound Insulation',
      description: 'Acoustic ceiling solutions that improve room acoustics, reduce noise pollution, and create a peaceful, comfortable environment.',
      features: ['Noise Reduction', 'Better Acoustics', 'Comfort Enhancement'],
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive false ceiling and interior solutions for modern spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;