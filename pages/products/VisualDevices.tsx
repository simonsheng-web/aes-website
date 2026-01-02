import React from "react";
import {
  ChevronRight,
  Glasses,
  Eye,
  Monitor,
  Cpu,
  ShieldCheck,
  Zap,
  Globe,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";

const VisualDevicesProductPage: React.FC = () => {
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
          <span className="font-semibold text-blue-600">Visual Devices</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[400px] bg-slate-900 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
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
            Visual Devices
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Leading-edge AR optics and medical-grade vision platforms.
          </p>
        </div>
      </div>

      {/* Product 1: Consumer AR Glasses */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#f8fafc] rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden group border border-slate-200 aspect-square lg:aspect-auto lg:h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-100 rounded-full blur-[80px] opacity-40 group-hover:scale-125 transition-transform duration-1000"></div>
              {/* <Glasses className="w-48 h-48 text-purple-600 relative z-10 drop-shadow-2xl" strokeWidth={0.5} /> */}
              <img
                src={`${baseUrl}assets/AR Glasses.png`}
                alt="icon"
                className=" h-full  relative drop-shadow-2xl"
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                Next-Gen AR Platform
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                Consumer AR
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                AR Glasses
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Deliver an immersive next-generation experience with Micro LED
                high-resolution 120 Hz displays and premium integrated sound for
                lifelike visuals and audio. Designed for versatility and
                high-performance cross-platform use.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 text-purple-600">
                    <Zap className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Display
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 font-semibold">
                    Micro LED 120Hz High-Resolution
                  </p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 text-purple-600">
                    <Globe className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Universal
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    USB-C Connectivity across all major platforms.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-500 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>{" "}
                  iPhone, Steam/ROG, Mac, PC, Android, and iOS Support
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>{" "}
                  Premium integrated sound for spatial audio
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>{" "}
                  Lightweight design for extended gaming & productivity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2: Vision Care AR Glasses */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider mb-6">
                Medical Grade AR
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Vision Care AR Glasses
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                An integrated digital platform featuring vision testing
                applications, a purpose-built VRP headset, and data review tools
                for clinicians. This platform is an FDA-registered Class I
                510(k) exempt medical device.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                  <HeartPulse className="w-6 h-6 text-slate-900 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">
                      Status
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      FDA-registered Class I
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                  <Monitor className="w-6 h-6 text-slate-900 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">
                      Suite
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      Digital Vision Testing
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-3xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Regulatory Compliance
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "Following a 510(k) submission, an FDA review has determined
                  that this device meets the 510(k) exempt Class I status as a
                  medical device."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-white rounded-[3rem] p-12 flex items-center justify-center border border-slate-200 shadow-2xl aspect-square lg:aspect-auto lg:h-[500px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
              {/* <Eye className="w-48 h-48 text-slate-900 relative z-10" strokeWidth={0.5} /> */}
              <img
                src={`${baseUrl}assets/Vision Care AR Glasses.png`}
                alt="icon"
                className="h-full  relative drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisualDevicesProductPage;
