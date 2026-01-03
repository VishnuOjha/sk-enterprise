import {
  FaHammer,
  FaPaintRoller,
  FaRulerCombined,
  FaCheckCircle,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-green-50 to-white section-padding"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - SEO Optimized */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Best False Ceiling in{" "}
              <span className="text-green-600">Ahmedabad</span>
            </h1>

            {/* SEO-rich subheading */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Professional Gypsum, POP & PVC Ceiling Solutions
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Looking for <strong>false ceiling near me</strong>? SK Enterprise
              is Ahmedabad&apos;s leading contractor for{" "}
              <strong>false ceiling installation</strong>, POP work, and gypsum
              solutions. We specialize in residential and commercial spaces
              across Gujarat, delivering precision craftsmanship with premium
              materials.
            </p>

            <p className="text-base md:text-lg text-gray-600 mb-8">
              Transform your home or office with our expert{" "}
              <strong>gypsum false ceiling</strong>, elegant{" "}
              <strong>POP designs</strong>, waterproof{" "}
              <strong>PVC ceilings</strong>, and modern metal solutions. We
              provide complete ceiling services including heat insulation, LED
              lighting integration, and custom designs at competitive prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary text-center"
                aria-label="Get free false ceiling quote in Ahmedabad"
              >
                Get Free Quote Today
              </a>
              <a
                href="tel:+919714620060"
                className="btn-secondary text-center"
                aria-label="Call SK Enterprise for false ceiling services"
              >
                Call: +91 9714620060
              </a>
            </div>

            {/* Stats - SEO Enhanced */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-green-600">500+</h3>
                <p className="text-gray-600">Projects in Ahmedabad</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-600">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-600">100%</h3>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
            </div>

            {/* Trust signals for SEO */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-2" />
                Licensed & Insured
              </span>
              <span className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-2" />
                Free Site Visit
              </span>
              <span className="flex items-center">
                <FaCheckCircle className="text-green-600 mr-2" />
                All Areas in Ahmedabad
              </span>
            </div>
          </div>

          {/* Right Content - Services Cards */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <FaRulerCombined className="text-green-600 text-4xl mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gypsum Ceiling
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Modern & fire-resistant
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8">
                  <FaPaintRoller className="text-green-600 text-4xl mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">POP Work</h3>
                  <p className="text-gray-600 text-sm">Elegant finishing</p>
                </div>
              </div>
              <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FaHammer className="text-green-600 text-2xl" />
                  <span className="text-gray-900 font-semibold text-lg">
                    Complete Solutions
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-gray-600 text-sm">PVC Ceiling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-gray-600 text-sm">Metal Ceiling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-gray-600 text-sm">
                      LED Integration
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional SEO content - Service areas */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            <strong>Serving All Areas:</strong> Satellite, Bopal, Prahlad Nagar,
            Vastrapur, Bodakdev, Thaltej, Ambawadi, Maninagar, Naranpura, and
            across Ahmedabad, Gujarat
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
