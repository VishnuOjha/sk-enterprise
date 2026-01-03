import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-white rounded-lg p-3 inline-block mb-4">
              <Image 
                src="/logo.png" 
                alt="SK Enterprise Logo" 
                width={180} 
                height={72}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium false ceiling, POP, and gypsum solutions. Transforming spaces with quality craftsmanship since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">False Ceiling Installation</li>
              <li className="text-gray-400">POP Work & Finishing</li>
              <li className="text-gray-400">Gypsum Solutions</li>
              <li className="text-gray-400">Integrated Lighting</li>
              <li className="text-gray-400">Temperature Control</li>
              <li className="text-gray-400">Sound Insulation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-green-400" />
                <span className="text-gray-400">
                  Your City, State, India
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-green-400" />
                <a href="tel:+91XXXXXXXXXX" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-green-400" />
                <a href="mailto:info@skenterprise.com" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  info@skenterprise.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} SK Enterprise. Founded by Shri Kisan Ojha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;