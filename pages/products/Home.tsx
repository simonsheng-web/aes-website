import React from "react";
import {
  ChevronRight,
  Wind,
  Camera,
  Wifi,
  Zap,
  Cpu,
  ShieldCheck,
  Box,
  MicOff,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomeProductPage: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div className="pt-16 bg-white font-sans">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
          <span className="text-slate-800">Products</span>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
          <span className="font-semibold text-blue-600">Home</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[400px] bg-slate-900 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
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
            Home Technology
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            From professional grooming to high-performance optics and next-gen
            Wi-Fi 7 networking.
          </p>
        </div>
      </div>

      {/* Product 1: PO8 Hair Dryer */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#f5f5f7] rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden group border border-slate-200 aspect-square lg:aspect-auto lg:h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full blur-[80px] opacity-40 group-hover:scale-125 transition-transform duration-1000"></div>
              {/* <Wind className="w-48 h-48 text-slate-400 relative z-10 drop-shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:text-blue-900" strokeWidth={0.5} /> */}
              <img
                src={`${baseUrl}assets/PO8 Smart Fast Hair Dryer.png`}
                alt="icon"
                className=" h-full  relative z-10 drop-shadow-2xl"
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                PO8 Smart Series
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                Smart Personal Care
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                PO8 Smart Fast Hair Dryer
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Engineered for speed and safety. The PO8 features intelligent
                thermal monitoring to prevent heat damage while delivering a
                powerful 1600W airflow for ultra-fast drying.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { label: "Rated Power", value: "1600W (120V)" },
                  { label: "Voltage/Freq", value: "120V / 60Hz" },
                  { label: "Dimension", value: "285 * 72 * 92mm" },
                ].map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-slate-100"
                  >
                    <span className="text-slate-500 font-medium">
                      {spec.label}
                    </span>
                    <span className="text-slate-900 font-semibold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2: BlockO Camera */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                Professional Optics
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                BlockO Camera (USB-C)
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                A high-definition USB-C camera designed for the professional
                workspace. Featuring a 1/2" Sony sensor and a distortion-free
                lens for crystal-clear video conferencing and live broadcasts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 text-orange-600">
                    <Camera className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Sony Sensor
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    IMX586-48M 4-in-1 HD output sensor for superior low-light
                    performance.
                  </p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 text-orange-600">
                    <MicOff className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Privacy First
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Built-in one-button touch control to instantly disable the
                    microphone.
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-500">
                <li>• Distortion-free HD lens (65° Horizontal FOV)</li>
                <li>• Adjustable distance: 20cm to infinity</li>
                <li>• Digital audio dual array microphone</li>
                <li>• Wide temperature range operation (-15°C to +70°C)</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-white rounded-[3rem] p-12 flex items-center justify-center border border-slate-200 shadow-xl aspect-square lg:aspect-auto lg:h-[500px]">
              {/* <Camera className="w-48 h-48 text-slate-200" strokeWidth={0.5} /> */}
              <img
                src={`${baseUrl}assets/BlockO Camera (USB-C).png`}
                alt="icon"
                className="w-full  relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product 3: BE3600 Wi-Fi 7 */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#f1f5f9] rounded-[3rem] p-12 flex items-center justify-center border border-slate-200 aspect-square lg:aspect-auto lg:h-[500px] overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              {/* <Wifi
                className="w-48 h-48 text-blue-600 transition-transform duration-700 group-hover:scale-110"
                strokeWidth={0.5}
              /> */}
              <img
                src={`${baseUrl}assets/BE3 Smart Home Mesh Wi-Fi 7.png`}
                alt="icon"
                className="h-full  relative z-10 drop-shadow-2xl"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                Next-Gen Networking
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                BE3 Smart Home Mesh Wi-Fi 7
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Future-proof your home with the BE3600 system. Supporting the
                new 802.11be standard, it delivers combined speeds of up to
                3600Mbps with advanced MLO and 4K QAM technologies.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold text-slate-900">3600</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Mbps Throughput
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold text-slate-900">
                    Wi-Fi 7
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    802.11BE Std.
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>{" "}
                  4*Built-in antennas | MLO | MRU | 4K QAM
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div> Easy
                  Mesh | 1*GE WAN + 2*GE LAN
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div> 1GHz
                  Dual Core CPU | Type-C Power
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div> Dim:
                  175 * 115.2 * 45mm
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 4: X30 SE Wi-Fi 6 */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider mb-6">
                Optimized Connectivity
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                X30 SE AX3000 Wi-Fi 6 System
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Reliable, high-speed mesh networking in a compact form factor.
                The X30 SE provides dual-band Wi-Fi 6 performance optimized for
                high-density device environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="font-bold text-slate-900">AX3000</div>
                  <div className="text-[10px] text-slate-400 uppercase">
                    Class
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="font-bold text-slate-900">1.3GHz</div>
                  <div className="text-[10px] text-slate-400 uppercase">
                    Dual-Core
                  </div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <div className="font-bold text-slate-900">Gigabit</div>
                  <div className="text-[10px] text-slate-400 uppercase">
                    Ethernet
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  AX3000 (2402+574Mbps) Throughput
                </div>
                <div className="flex items-center gap-2">
                  4*Internal Dual-band Antennas | OFDMA | TWT
                </div>
                <div className="flex items-center gap-2">
                  Easy Mesh Ready | 2 Gigabit Ports
                </div>
                <div className="flex items-center gap-2">
                  Dimensions: 105 * 105 * 87mm
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-slate-900 rounded-[3rem] p-12 flex items-center justify-center shadow-2xl aspect-square lg:aspect-auto lg:h-[500px]">
              {/* <Box className="w-48 h-48 text-white/10" strokeWidth={0.5} /> */}
              <img
                src={`${baseUrl}assets/X30 SE AX3000 Wi-Fi 6 System.png`}
                alt="icon"
                className="h-full  relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeProductPage;
