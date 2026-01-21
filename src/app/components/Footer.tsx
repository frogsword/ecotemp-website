import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">EcoTemp</h3>
            <p className="text-gray-400 mb-3">
              Southwest Missouri's trusted partner for all heating, cooling, and air quality needs.
            </p>
            <p className="text-sm text-gray-500">
              Authorized American Standard Dealer
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Serving Springfield, Missouri and Surrounding Areas
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Air Conditioning</li>
              <li>Heating Systems</li>
              <li>Air Quality</li>
              <li>Maintenance Plans</li>
              <li>System Replacement</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <p>Phone: (417) 576-2152</p>
              <p>Email: requests@ecotempmech.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}