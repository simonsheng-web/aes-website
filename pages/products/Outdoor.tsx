import React from "react";
import {
  ChevronRight,
  Sun,
  Radio,
  Wifi,
  Clock,
  Camera,
  Zap,
  Smartphone,
  Shield,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const OutdoorProductPage: React.FC = () => {
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
          <span className="font-semibold text-blue-600">Outdoor</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[400px] bg-slate-900 overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
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
            Outdoor Solutions
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Rugged engineering for wildlife management, off-grid power, and
            industrial-grade connectivity.
          </p>
        </div>
      </div>

      {/* Product 1: NR3500X V2 5G CPE */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#f8fafc] rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden group border border-slate-200 aspect-square lg:aspect-auto lg:h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-100 rounded-full blur-[80px] opacity-40 group-hover:scale-125 transition-transform duration-1000"></div>
              {/* <Wifi
                className="w-48 h-48 text-emerald-600 relative z-10 drop-shadow-2xl"
                strokeWidth={0.5}
              /> */}
              <img
                src={`${baseUrl}assets/NR3500X.png`}
                alt="icon"
                className="h-full  relative  drop-shadow-2xl"
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 tracking-widest uppercase text-center">
                NR3500X V2 <br /> 5G NR AX3000 CPE
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                5G Industrial Connectivity
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                NR3500X V2 Wireless CPE
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                A high-performance 5G NR and Wi-Fi 6 wireless CPE unit. Designed
                for high-speed broadband access with robust coverage featuring 6
                internal antennas and dual-band MU-MIMO support.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-xs font-bold text-slate-400 uppercase mb-1">
                    Wireless Speed
                  </span>
                  <span className="text-slate-900 font-semibold text-sm">
                    AX3000 (2402+574Mbps)
                  </span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="block text-xs font-bold text-slate-400 uppercase mb-1">
                    Ports
                  </span>
                  <span className="text-slate-900 font-semibold text-sm">
                    2*Gigabit + 1*TEL
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  Wi-Fi 6 | 5G NR | M.2 module socket
                </li>
                <li className="flex items-center gap-2">
                  Portable Wi-Fi Hotspot | Support eSIM
                </li>
                <li className="flex items-center gap-2">
                  6*Internal Antennas | 2*external TS9 connectors
                </li>
                <li className="flex items-center gap-2">
                  Dimension: 216 * 142 * 127mm
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2: Hanging Directional Deer Feeder */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider mb-6">
                Directional Feeding
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Hanging Directional Feeder
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Targeted feeding solution for game trails or fish ponds.
                Features Bluetooth capability for remote control via App,
                allowing for precision feeding area management and RPM settings.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-500">Control Type</span>
                  <span className="font-semibold text-slate-900">
                    Bluetooth App Control
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-500">Battery Type</span>
                  <span className="font-semibold text-slate-900">
                    6V tab-top rechargeable
                  </span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-500">Highlights</span>
                  <span className="font-semibold text-slate-900">
                    Customizable RPM settings
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 italic font-medium">
                Compatible with Feeder Solar Panel for autonomous operation.
              </p>
            </div>
            <div className="order-1 lg:order-2 bg-white rounded-[3rem] p-12 flex items-center justify-center border border-slate-200 shadow-xl aspect-square lg:aspect-auto lg:h-[500px] overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] group-hover:w-48 group-hover:h-48 transition-all duration-700"></div>
              {/* <Target
                className="w-48 h-48 text-slate-200 relative z-10 group-hover:text-emerald-300 transition-colors"
                strokeWidth={0.5}
              /> */}
              <img
                src={`${baseUrl}assets/Hanging Directional Feeder.png`}
                alt="icon"
                className=" h-full  relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product 3: Outdoor Solar Panel */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#f0fdf4] rounded-[3rem] p-12 flex items-center justify-center border border-emerald-100 aspect-square lg:aspect-auto lg:h-[500px] overflow-hidden group">
              {/* <Sun
                className="w-48 h-48 text-emerald-200 group-hover:text-emerald-500 transition-all duration-700 group-hover:rotate-12"
                strokeWidth={0.5}
              /> */}
              <img
                src={`${baseUrl}assets/Outdoor Solar Panel.png`}
                alt="icon"
                className="h-full  relative z-10 drop-shadow-2xl"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                Sustainable Power
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Outdoor Solar Panel & Power Pack
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Eliminate the need for AA batteries. This solar panel and power
                pack combo provides continuous energy for trail cameras and
                feeders with just a few hours of full sun.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50">
                  <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">
                      Reporting
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      Advanced App Metrics
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50">
                  <Shield className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">
                      Rating
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      IP65 Waterproof
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-500">
                <li>• Delivers continuous power pack combo</li>
                <li>• Compatible with all USB-C devices for recharging</li>
                <li>• Varmint-resistant cables and threaded connections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product 4: 360 dispersal Feeder */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                Broad Range Feeding
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                360° Dispersal Feeder
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Full 360-degree dispersal for feed or supplements. App-enabled
                control allows users to set up to 4 feed times a day with
                durations ranging from 1 to 60 seconds.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold text-slate-900">4x</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Feed Times / Day
                  </div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold text-slate-900">360°</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Dispersal
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>{" "}
                  Bluetooth capable remote control via App
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>{" "}
                  Designed to run on 8 AA batteries
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>{" "}
                  Quick-Lock compatible and Solar Panel ready
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-slate-900 rounded-[3rem] p-12 flex items-center justify-center border border-slate-700 shadow-2xl aspect-square lg:aspect-auto lg:h-[500px]">
              {/* <Radio className="w-48 h-48 text-white/10" strokeWidth={0.5} /> */}
              <img
                src={`${baseUrl}assets/Deer Feeder.png`}
                alt="icon"
                className="h-full  relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product 5: Universal Digital Timer */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#f8fafc] rounded-[3rem] p-12 flex items-center justify-center border border-slate-200 aspect-square lg:aspect-auto lg:h-[400px]">
              {/* <Clock className="w-48 h-48 text-slate-300" strokeWidth={0.5} /> */}
              <img
                src={`${baseUrl}assets/Universal Digital Timer.png`}
                alt="icon"
                className=" h-full  relative z-10 drop-shadow-2xl"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                Precision Control
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Universal Digital Timer
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Compatible with both 6V and 12V feeders. Program up to 10 feed
                times per day with adjustable durations (0-60s) for maximum
                wildlife management control.
              </p>

              <div className="space-y-3 text-sm text-slate-500">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span>Feed Intervals</span>
                  <span className="font-bold text-slate-900">
                    Up to 10 Times / Day
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span>Housing</span>
                  <span className="font-bold text-slate-900">
                    Sealed Weather-Resistant
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span>Compatibility</span>
                  <span className="font-bold text-slate-900">
                    6V & 12V Feeders
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 6: M3L 4G LTE Mobile Wi-Fi */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-6">
                Mobile Connectivity
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                M3L 4G LTE Mobile Wi-Fi
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Compact, portable hotspot with a 1.44-inch color LCD display.
                Features high-speed LTE and Wi-Fi 6 support for on-the-go
                connectivity in outdoor environments.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                  <Smartphone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">
                      Battery
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      2100mAh
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                  <Settings className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">
                      LCD
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      1.44" Color
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-slate-500">
                <li>• LTE 150Mbps Download / 50Mbps Upload</li>
                <li>• Wi-Fi 6 (286Mbps) for multiple devices</li>
                <li>• Type-C interface and IPv4/IPv6 support</li>
                <li>• Dimension: 98.4 * 59.1 * 14.7mm</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-slate-900 rounded-[3rem] p-12 flex items-center justify-center border border-slate-700 shadow-xl aspect-square lg:aspect-auto lg:h-[400px]">
              {/* <Radio className="w-48 h-48 text-blue-400" strokeWidth={0.5} /> */}
              <img
                src={`${baseUrl}assets/outDoorM3L.png`}
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

const Settings: React.FC<any> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default OutdoorProductPage;
