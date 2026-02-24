import { Snowflake, Flame, Wind, Wrench, ShieldCheck, Gauge } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';

const services = [
  {
    icon: Snowflake,
    title: 'Air Conditioning Service',
    description: 'Fast AC troubleshooting, seasonal tune-ups, and dependable repairs to keep your cooling system steady through Missouri summers.',
  },
  {
    icon: Flame,
    title: 'Heating Repair and Replacement',
    description: 'Furnace and heat pump service with practical recommendations for repair vs. replacement based on efficiency and system age.',
  },
  {
    icon: Wind,
    title: 'Indoor Air Quality',
    description: 'Filtration, humidity control, and airflow improvements that reduce dust, hot-cold spots, and stale indoor air.',
  },
  {
    icon: Wrench,
    title: 'Preventive Maintenance',
    description: 'Scheduled inspections and cleaning that help your equipment run longer, safer, and with fewer surprise breakdowns.',
  },
  {
    icon: ShieldCheck,
    title: 'Commercial HVAC Support',
    description: 'Responsive service for offices and small commercial spaces that need reliable comfort and minimal downtime.',
  },
  {
    icon: Gauge,
    title: 'System Upgrades',
    description: 'High-efficiency equipment, thermostat updates, and duct improvements designed around your building and budget.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-teal-50 px-4 py-1 text-sm font-semibold text-teal-700">What we do</span>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">Complete HVAC care for homes and businesses</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            From emergency fixes to planned replacements, EcoTemp keeps comfort systems running efficiently with workmanship you can trust.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group border-slate-200/80 bg-slate-50/60 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition-all group-hover:ring-teal-200">
                    <Icon className="h-6 w-6 text-teal-700" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-slate-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
