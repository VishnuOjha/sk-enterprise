import { FaCheckCircle, FaAward, FaUsers, FaHandshake } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaAward className="text-4xl text-green-600" />,
      title: 'Quality Craftsmanship',
      description: 'Premium materials and expert installation for lasting results',
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: 'Skilled Professionals',
      description: 'Experienced team dedicated to perfection in every project',
    },
    {
      icon: <FaHandshake className="text-4xl text-green-600" />,
      title: 'Customer Satisfaction',
      description: 'Building trust through exceptional service and reliability',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">About SK Enterprise</h2>
          <p className="section-subtitle">
            Your trusted partner for premium false ceiling and interior solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Spaces Since 2008
            </h3>
            <p className="text-gray-600 mb-6">
              Founded by Shri Kisan Ojha, SK Enterprise has been at the forefront of providing innovative false ceiling, POP, and gypsum solutions for over 15 years. We specialize in creating stunning interiors that combine aesthetics with functionality, helping residential and commercial spaces achieve a modern, sophisticated look.
            </p>
            <p className="text-gray-600 mb-6">
              Our expertise lies in installing dropped/suspended ceilings that hide unsightly wiring and ducts, improve temperature control, enhance sound insulation, and create the perfect ambiance with integrated lighting solutions. We use premium materials including gypsum, PVC, metal, and thermocol to deliver customized solutions that meet your specific needs.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" />
                <span className="text-gray-700">Fire-resistant & waterproof materials</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" />
                <span className="text-gray-700">Energy-efficient temperature control</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" />
                <span className="text-gray-700">Integrated LED & cove lighting</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-3" />
                <span className="text-gray-700">Custom designs & multi-tiered patterns</span>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;