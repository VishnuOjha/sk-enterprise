import {
  FaLayerGroup,
  FaPaintBrush,
  FaWrench,
  FaLightbulb,
  FaThermometerHalf,
  FaVolumeUp,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLayerGroup className="text-5xl text-green-600" />,
      title: "False Ceiling Installation in Ahmedabad",
      description:
        "Professional dropped/suspended ceiling installation using premium gypsum, PVC, and metal materials. Perfect for hiding wiring, AC ducts, and structural imperfections while creating a modern, elegant finish for homes and offices across Ahmedabad.",
      features: [
        "Gypsum False Ceiling",
        "PVC Waterproof Ceiling",
        "Metal & Aluminum Ceiling",
      ],
      keywords:
        "false ceiling ahmedabad, gypsum ceiling installation, suspended ceiling",
    },
    {
      icon: <FaPaintBrush className="text-5xl text-green-600" />,
      title: "POP Work in Ahmedabad",
      description:
        "High-quality Plaster of Paris (POP) work for smooth wall finishes, decorative elements, cornices, and elegant ceiling designs. We specialize in modern POP designs that add sophistication and beauty to residential and commercial interiors in Ahmedabad.",
      features: [
        "Wall Textures & Finishes",
        "Decorative Moldings",
        "POP Cornices & Borders",
      ],
      keywords: "pop work ahmedabad, plaster of paris, pop ceiling design",
    },
    {
      icon: <FaWrench className="text-5xl text-green-600" />,
      title: "Gypsum Solutions Ahmedabad",
      description:
        "Lightweight, durable, and fire-resistant gypsum board installations for partition walls, wall cladding, false ceiling, and custom interior designs. Our gypsum work provides excellent sound insulation and thermal efficiency for modern spaces.",
      features: [
        "Gypsum Partition Walls",
        "Wall Cladding Solutions",
        "Custom Gypsum Designs",
      ],
      keywords: "gypsum work ahmedabad, gypsum partition, drywall installation",
    },
    {
      icon: <FaLightbulb className="text-5xl text-green-600" />,
      title: "LED Ceiling Lighting Integration",
      description:
        "Expert installation of modern LED lights, recessed lighting, LED strips, spotlights, and cove lighting integrated with false ceilings. Create stunning ambiance while reducing electricity costs with energy-efficient lighting solutions.",
      features: [
        "LED Strip Integration",
        "Recessed Spotlights",
        "Cove Lighting Design",
      ],
      keywords: "led false ceiling, ceiling lights ahmedabad, cove lighting",
    },
    {
      icon: <FaThermometerHalf className="text-5xl text-green-600" />,
      title: "Heat Insulation & Temperature Control",
      description:
        "False ceiling creates an air gap between the original ceiling and dropped ceiling, providing excellent heat insulation. Reduce heat transfer in Ahmedabad's hot climate and lower your AC costs by up to 30% with our insulated ceiling solutions.",
      features: [
        "Heat Insulation Layer",
        "Energy Cost Reduction",
        "AC Efficiency Boost",
      ],
      keywords: "insulated ceiling, heat resistant ceiling, energy efficient",
    },
    {
      icon: <FaVolumeUp className="text-5xl text-green-600" />,
      title: "Acoustic & Sound Insulation",
      description:
        "Specialized acoustic ceiling solutions that improve room acoustics, reduce noise pollution, and create a peaceful environment. Perfect for offices, conference rooms, auditoriums, and residential spaces requiring sound dampening.",
      features: [
        "Noise Reduction Technology",
        "Better Room Acoustics",
        "Soundproof Solutions",
      ],
      keywords: "acoustic ceiling, soundproof ceiling, noise reduction",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* SEO-optimized heading */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            Our False Ceiling Services in Ahmedabad
          </h2>
          <p className="section-subtitle">
            Comprehensive gypsum, POP, and PVC ceiling solutions for modern
            homes and offices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span
                      className="w-2 h-2 bg-green-600 rounded-full mr-3"
                      aria-hidden="true"
                    ></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Professional False Ceiling Installation?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Aesthetic Benefits:
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• Modern, elegant appearance</li>
                  <li>• Conceals wiring and ductwork</li>
                  <li>• Custom designs and patterns</li>
                  <li>• Integrated lighting options</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Functional Benefits:
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• Excellent heat insulation</li>
                  <li>• Sound dampening properties</li>
                  <li>• Energy cost reduction</li>
                  <li>• Fire-resistant materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-primary"
            aria-label="Contact SK Enterprise for free false ceiling consultation in Ahmedabad"
          >
            Get Free Consultation & Quote
          </a>
        </div>

        {/* Local SEO content */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            <strong>Trusted False Ceiling Contractor in Ahmedabad</strong> |
            Serving Satellite, Bopal, Prahlad Nagar, Vastrapur, Bodakdev, and
            all areas across Gujarat
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
