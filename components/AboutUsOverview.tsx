import React from 'react';
import { ArrowRight, Cpu, Factory, Globe2, Network, Sparkles, Zap } from 'lucide-react';

const capabilityCards = [
  {
    icon: Sparkles,
    title: 'Creative Innovation',
    text: 'Independent XR design resources support fast concept development, customization, and product realization.',
  },
  {
    icon: Network,
    title: 'Netcom ODM / OEM',
    text: 'Full-chain services for routers, CPE, MiFi, and connected network devices from definition to mass production.',
  },
  {
    icon: Zap,
    title: 'Power Products',
    text: 'Development and manufacturing support for solar charging equipment, battery packs, and related power solutions.',
  },
  {
    icon: Factory,
    title: 'Overseas EMS',
    text: 'EMS and delivery service capability across Vietnam and Malaysia to support flexible regional supply.',
  },
];

const processSteps = [
  'Product Definition',
  'Engineering Development',
  'Manufacturing Ramp',
  'Global Delivery',
];

const AboutUsOverview: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-28 border-b border-slate-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute bottom-0 left-[-8%] h-80 w-80 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left narrative */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
              About AES
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] leading-tight">
              Creative Innovation Meets Industrial Excellence.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-500">
              AES brings together product design, engineering development, manufacturing, and regional delivery to help partners turn connected hardware concepts into scalable commercial products.
            </p>

            <div className="mt-10 rounded-[2rem] border border-slate-100 bg-slate-50/80 p-6 shadow-sm">
              <div className="flex items-center gap-3 text-slate-900 font-semibold">
                <Globe2 className="h-5 w-5 text-blue-600" />
                Silicon Valley presence with global execution
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Headquartered in San Jose with China engineering offices and overseas EMS support, AES is structured to bridge customer requirements, product engineering, and manufacturable solutions.
              </p>
            </div>
          </div>

          {/* Right capability system */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {capabilityCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="group rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-blue-600 ring-1 ring-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{card.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[2rem] border border-slate-100 bg-[#0f172a] p-7 text-white shadow-xl shadow-slate-200/70">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Full-Chain Delivery Model</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">From idea to mass production</h3>
                </div>
                <ArrowRight className="hidden md:block h-6 w-6 text-blue-300" />
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3">
                {processSteps.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-white/8 border border-white/10 p-4">
                    <div className="text-xs font-bold text-blue-300">0{index + 1}</div>
                    <div className="mt-2 text-sm font-semibold leading-5">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOverview;
