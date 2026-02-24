import { useState } from 'react';
import { Menu, X, Phone, Clock3 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import ecotempLogo from '../../../ecotemp-logo.png';

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/[0.92] backdrop-blur-lg">
      <div className="hidden border-b border-slate-200/70 bg-slate-50/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm text-slate-700 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-teal-700" />
            Monday-Friday, 8:00 AM-5:00 PM
          </p>
          <a href="tel:417-576-2152" className="font-semibold text-teal-700 hover:text-teal-800">
            Call for fast scheduling: (417) 576-2152
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="EcoTemp home">
              <img className="ecotemp-logo-img" src={ecotempLogo} alt="EcoTemp Mechanical logo" />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="font-medium text-slate-700 transition-colors hover:text-teal-700">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="font-medium text-slate-700 transition-colors hover:text-teal-700">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="font-medium text-slate-700 transition-colors hover:text-teal-700">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="font-medium text-slate-700 transition-colors hover:text-teal-700">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:417-576-2152" className="flex items-center rounded-full bg-teal-50 px-4 py-2 font-semibold text-teal-700 transition-colors hover:bg-teal-100">
              <Phone className="mr-2 h-4 w-4" />
              <span>(417) 576-2152</span>
            </a>
            <Button onClick={() => scrollToSection('contact')} className="h-10 rounded-full px-6">
              Book Service
            </Button>
          </div>

          <button className="rounded-md p-1 text-slate-700 md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden">
            <nav className="flex flex-col space-y-4 rounded-xl bg-slate-50 p-4">
              <button onClick={() => scrollToSection('home')} className="text-left font-medium text-slate-700 transition-colors hover:text-teal-700">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left font-medium text-slate-700 transition-colors hover:text-teal-700">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left font-medium text-slate-700 transition-colors hover:text-teal-700">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left font-medium text-slate-700 transition-colors hover:text-teal-700">
                Contact
              </button>
              <a href="tel:417-576-2152" className="flex items-center font-semibold text-teal-700">
                <Phone className="mr-2 h-4 w-4" />
                <span>(417) 576-2152</span>
              </a>
              <Button onClick={() => scrollToSection('contact')} className="w-full rounded-full">
                Book Service
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
