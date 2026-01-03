import { FaHammer, FaPaintRoller, FaRulerCombined, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Space with{' '}
              <span className="text-green-600">SK Enterprise</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Expert False Ceiling, POP, and Gypsum solutions for residential and commercial spaces. 
              We deliver precision craftsmanship and elegant designs that elevate your interiors while providing insulation, aesthetics, and modern ambiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                Get Free Quote
              </a>
              <a href="#gallery" className="btn-secondary text-center">
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-green-600">500+</h3>
                <p className="text-gray-600">Projects Done</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-600">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-600">100%</h3>
                <p className="text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Services Cards */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <FaRulerCombined className="text-green-600 text-4xl mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">False Ceiling</h3>
                  <p className="text-gray-600 text-sm">Modern designs & installation</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8">
                  <FaPaintRoller className="text-green-600 text-4xl mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">POP Work</h3>
                  <p className="text-gray-600 text-sm">Elegant finishing solutions</p>
                </div>
              </div>
              <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FaHammer className="text-green-600 text-2xl" />
                  <span className="text-gray-900 font-semibold text-lg">Gypsum Solutions</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-gray-600 text-sm">Partition Walls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-gray-600 text-sm">Wall Cladding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-gray-600 text-sm">Custom Designs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;