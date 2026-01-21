import { Snowflake, Flame, Wind, Wrench, Shield, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';

const services = [
  {
    icon: Snowflake,
    title: 'Air Conditioning',
    description: 'Installation, repair, and maintenance of all AC systems. Keep your home cool and comfortable.',
  },
  {
    icon: Flame,
    title: 'Heating Systems',
    description: 'Expert heating solutions including furnaces, heat pumps, and boiler services.',
  },
  {
    icon: Wind,
    title: 'Air Quality',
    description: 'Improve indoor air quality with our ventilation, filtration, and purification systems.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Plans',
    description: 'Regular maintenance to keep your HVAC system running efficiently year-round.',
  },
  {
    icon: Shield,
    title: 'System Replacement',
    description: 'Upgrade to energy-efficient systems with our expert installation services.',
  },
  {
    icon: Settings,
    title: 'Repairs & Service',
    description: 'Professional repair services to get your system running smoothly again.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            HVAC solutions for commercial and residential properties in Springfield and throughout southwest Missouri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}