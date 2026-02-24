export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-slate-900">EcoTemp Mechanical</h3>
            <p className="text-slate-600">
              Trusted heating, cooling, and air quality service for Springfield and southwest Missouri.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Navigate</h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#home" className="hover:text-teal-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-700">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-700">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Core Services</h4>
            <ul className="space-y-2 text-slate-600">
              <li>AC and heating repairs</li>
              <li>System replacements</li>
              <li>Maintenance plans</li>
              <li>Indoor air quality</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Contact</h4>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="tel:417-576-2152" className="hover:text-teal-700">
                  (417) 576-2152
                </a>
              </li>
              <li>
                <a href="mailto:requests@ecotempmech.com" className="hover:text-teal-700">
                  requests@ecotempmech.com
                </a>
              </li>
              <li>Monday-Friday, 8:00 AM-5:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          {/* <p>&copy; {currentYear} EcoTemp Mechanical. All rights reserved.</p> */}
        </div>
      </div>
    </footer>
  );
}
