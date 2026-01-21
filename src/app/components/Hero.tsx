import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { MapPin, Award, Phone } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Comfort is Our <span className="text-cyan-300">Mission</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Professional HVAC solutions for commercial and residential properties serving Southwest Missouri. Experience unmatched comfort and efficiency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto shadow-xl"
              >
                Get Free Quote
              </Button>
            </div>

            {/* Service Area & Certifications */}
            <div className="grid sm:grid-cols-2 gap-4 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Service Area</p>
                  <p className="text-sm text-blue-100">Springfield, Missouri and Surrounding Areas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Authorized Dealer</p>
                  <p className="text-sm text-blue-100">We are an authorized American Standard dealer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:block">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-50 animate-pulse delay-500"></div>
            
            {/* Main Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent z-10"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761679296910-0a0078baa1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwY29tZm9ydCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTAwNzY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Home Comfort"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 right-8 bg-white rounded-2xl shadow-2xl p-4 backdrop-blur-sm z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Serving Southwest Missouri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}