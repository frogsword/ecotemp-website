import { CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const features = [
  'Licensed and insured technicians',
  'Energy-efficient solutions',
  'Competitive pricing with no hidden fees',
  'Same-day service available',
  'Customer satisfaction guarantee',
  'Latest technology and equipment',
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758980960373-2be749113338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBjb25kaXRpb25pbmd8ZW58MXx8fHwxNzY4OTg0MjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Air Conditioning System"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted HVAC Partner in Southwest Missouri
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              CoolAir HVAC provides professional heating and cooling solutions for residential 
              and commercial properties in Springfield, Missouri and the surrounding areas. 
              Our team of certified technicians is dedicated to providing exceptional service and ensuring 
              your complete comfort and satisfaction.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We pride ourselves on our commitment to quality, reliability, and customer satisfaction. 
              Whether you need installation, repair, or maintenance, we're here to help.
            </p>
            <p className="text-lg font-semibold text-blue-600 mb-8">
              Authorized American Standard Dealer
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}