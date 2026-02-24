import { CheckCircle2, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import bosch from '../../../bosch.png';

const differentiators = [
  'Straight answers and clear, itemized recommendations',
  'Residential and light commercial experience',
  'Energy-focused upgrades to reduce operating cost',
  'Respectful, clean, and professional service at your property',
  'Maintenance support that protects your equipment investment',
  'Local team focused on long-term customer relationships',
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-100 py-24">
      <div className="absolute -left-20 top-20 h-48 w-48 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <span className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1 text-sm font-semibold text-teal-700 ring-1 ring-slate-200">
            <Sparkles className="mr-2 h-4 w-4" />
            Why EcoTemp
          </span>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            A practical HVAC partner built on quality work.
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-slate-700">
            EcoTemp Mechanical serves Springfield and surrounding communities with heating, cooling, and indoor air quality solutions tailored to each property.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-slate-700">
            We focus on dependable fixes, efficient system performance, and communication you can actually use to make good decisions for your home or business.
          </p>
          <div className="space-y-3">
            {differentiators.map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-teal-700" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
            <ImageWithFallback src={bosch} alt="EcoTemp technician equipment" className="h-[520px] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
