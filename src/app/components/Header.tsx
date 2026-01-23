import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import ecotempLogo from '../../../ecotemp-logo.png'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            {/* <h1 className="text-2xl font-bold text-blue-600">EcoTemp Heating and Air</h1> */}
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <img className="ecotemp-logo-img" src={ecotempLogo} />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:417-576-2152" className="flex items-center text-blue-600">
              <Phone className="w-5 h-5 mr-2" />
              <span>(417) 576-2152</span>
            </a>
            <Button onClick={() => scrollToSection('contact')}>Get Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-blue-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-blue-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600 transition-colors">
                Contact
              </button>
              <a href="tel:417-576-5563" className="flex items-center text-blue-600">
                <Phone className="w-5 h-5 mr-2" />
                <span>(417) 576-2152</span>
              </a>
              <Button onClick={() => scrollToSection('contact')} className="w-full">Contact Us</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
