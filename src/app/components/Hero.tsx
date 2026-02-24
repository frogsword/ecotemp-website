import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { MapPin, ShieldCheck, Wrench, PhoneCall } from 'lucide-react';
import gauges from '../../../gauges.jpg';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-slate-900 pt-28 text-white md:pt-32">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.35),_transparent_48%),radial-gradient(circle_at_left,_rgba(245,158,11,0.2),_transparent_45%),linear-gradient(145deg,_#0f172a,_#0b1320_45%,_#111827)]" />
      </div>
      <div className="absolute inset-0 opacity-20 [background:linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.06)_25px,rgba(255,255,255,0.06)_26px,transparent_27px),linear-gradient(transparent_24px,rgba(255,255,255,0.06)_25px,rgba(255,255,255,0.06)_26px,transparent_27px)] [background-size:72px_72px]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-white">
            <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-teal-200">
              Springfield and Southwest Missouri HVAC
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Heating and cooling done right the first time.
            </h1>
            <p className="mb-8 max-w-xl text-lg text-slate-200 md:text-xl">
              EcoTemp Mechanical helps homeowners and businesses stay comfortable with reliable repairs, smart replacements, and maintenance that keeps systems efficient year-round.
            </p>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="h-12 rounded-full bg-teal-500 px-8 text-base font-semibold text-slate-900 hover:bg-teal-400"
              >
                Request Service
              </Button>
              <a
                href="tel:417-576-2152"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 bg-white/5 px-8 text-base font-semibold text-white transition hover:bg-white/10"
              >
                <PhoneCall className="mr-2 h-4 w-4" />
                Call (417) 576-2152
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <ShieldCheck className="mb-2 h-6 w-6 text-teal-300" />
                <p className="text-sm font-semibold">Licensed and insured</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <Wrench className="mb-2 h-6 w-6 text-teal-300" />
                <p className="text-sm font-semibold">Repair and install expertise</p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <MapPin className="mb-2 h-6 w-6 text-teal-300" />
                <div>
                  <p className="text-sm font-semibold">Serving southwest Missouri</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-sm xl:max-w-md">
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-amber-400/30 blur-2xl" />
            <div className="absolute -bottom-5 -right-4 h-24 w-24 rounded-full bg-teal-400/30 blur-2xl" />
            <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/20 shadow-2xl sm:h-[420px]">
              <ImageWithFallback
                src={gauges}
                alt="HVAC diagnostic gauges"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-slate-900/75 p-4 text-white backdrop-blur-sm">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-200">Why customers call EcoTemp</p>
                <div className="grid gap-2 text-sm sm:grid-cols-2">
                  <p>Clear recommendations</p>
                  <p>Straightforward pricing</p>
                  <p>Efficient system performance</p>
                  <p>Friendly local service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
