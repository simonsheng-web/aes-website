import React from "react";
import {
  ChevronRight,
  Watch,
  Heart,
  Activity,
  Smartphone,
  Radio,
  Zap,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const WearablesProductPage: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div className="pt-16 bg-white font-sans text-[#1d1d1f]">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
          <span className="text-slate-800">Products</span>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
          <span className="font-semibold text-blue-600">Wearables</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[400px] bg-slate-900 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Wearable Tech
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Connected health and communication, engineered for the wrist.
          </p>
        </div>
      </div>

      {/* Product 1: Smartwatch */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#fcfcfc] rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden group border border-slate-200 aspect-square lg:aspect-auto lg:h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-100 rounded-full blur-[80px] opacity-40 group-hover:scale-125 transition-transform duration-1000"></div>
              {/* <Watch className="w-48 h-48 text-slate-800 relative z-10 drop-shadow-2xl transition-all duration-500 group-hover:scale-110" strokeWidth={0.5} /> */}
              <img
                src={`${baseUrl}assets/Smartwatch.png`}
                alt="icon"
                className="h-full  relative drop-shadow-2xl"
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                Premium Smart Series
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                Connected Smart Wearable
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Smartwatch
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Combines elegant design with powerful connectivity. Engineered
                for seamless performance, it supports standalone LTE/5G
                communication, enabling calls, messages, and data access without
                needing a smartphone.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-2 text-red-600">
                    <Radio className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Communication
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Standalone LTE/5G support for calls & messages.
                  </p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-2 text-red-600">
                    <Heart className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Health Insights
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Advanced heart rate monitoring and fitness tracking.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: "Navigation",
                    value: "Built-in GPS Navigation",
                    icon: <MapPin className="w-4 h-4" />,
                  },
                  {
                    label: "Performance",
                    value: "Seamless standalone data access",
                    icon: <Zap className="w-4 h-4" />,
                  },
                  {
                    label: "Durability",
                    value: "Engineered for active lifestyle",
                    icon: <ShieldCheck className="w-4 h-4" />,
                  },
                ].map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-3 border-b border-slate-100"
                  >
                    <div className="text-red-500">{spec.icon}</div>
                    <div className="flex-1 flex justify-between">
                      <span className="text-slate-500 text-sm font-medium">
                        {spec.label}
                      </span>
                      <span className="text-slate-900 text-sm font-bold">
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Informed Anywhere
          </h3>
          <p className="text-lg text-slate-500 leading-relaxed italic font-light">
            "Our wearable platforms are designed to bridge the gap between
            aesthetics and functionality, ensuring users stay connected to their
            digital life and their health data without ever needing to reach for
            their phone."
          </p>
        </div>
      </section>
    </div>
  );
};

export default WearablesProductPage;
