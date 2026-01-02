import React from 'react';
import { Link } from 'react-router-dom';

const OutdoorIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 drop-shadow-2xl">
    {/* Chassis */}
    <rect x="50" y="70" width="100" height="85" rx="12" fill="url(#outdoor_grad)" />
    {/* Lens Housing */}
    <circle cx="100" cy="112" r="32" fill="#1e293b" />
    <circle cx="100" cy="112" r="24" fill="#0f172a" />
    <circle cx="100" cy="112" r="8" fill="#3b82f6" opacity="0.5" />
    {/* Heat sink / Texture */}
    <rect x="65" y="78" width="70" height="4" rx="2" fill="#94a3b8" opacity="0.4" />
    <rect x="65" y="86" width="70" height="4" rx="2" fill="#94a3b8" opacity="0.4" />
    {/* Top Antenna Stub */}
    <rect x="94" y="52" width="12" height="18" rx="3" fill="#64748b" />
    <defs>
      <linearGradient id="outdoor_grad" x1="50" y1="70" x2="150" y2="155" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f8fafc" />
        <stop offset="1" stopColor="#cbd5e1" />
      </linearGradient>
    </defs>
  </svg>
);

const HomeIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 drop-shadow-2xl">
    {/* Mesh Router Body */}
    <rect x="70" y="45" width="60" height="110" rx="14" fill="url(#home_grad)" stroke="#f1f5f9" strokeWidth="1" />
    {/* Base Shadow/Detail */}
    <path d="M70 145C70 150.523 74.4772 155 80 155H120C125.523 155 130 150.523 130 145V155H70V145Z" fill="#cbd5e1" opacity="0.3" />
    {/* Subtle indicator light */}
    <circle cx="100" cy="142" r="2.5" fill="#3b82f6">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
    {/* Top Texture */}
    <rect x="80" y="55" width="40" height="2" rx="1" fill="#e2e8f0" />
    <rect x="80" y="61" width="40" height="2" rx="1" fill="#e2e8f0" />
    <defs>
      <linearGradient id="home_grad" x1="70" y1="45" x2="130" y2="155" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#f1f5f9" />
      </linearGradient>
    </defs>
  </svg>
);

const VisualIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 drop-shadow-2xl">
    {/* AR Frame Silhouette */}
    <path d="M35 90C35 84.4772 39.4772 80 45 80H155C160.523 80 165 84.4772 165 90V102C165 110 158 115 150 115H50C42 115 35 110 35 102V90Z" fill="url(#visual_grad)" />
    {/* Waveguide lenses */}
    <rect x="48" y="85" width="45" height="25" rx="4" fill="#1e293b" opacity="0.1" />
    <rect x="107" y="85" width="45" height="25" rx="4" fill="#1e293b" opacity="0.1" />
    {/* Optical projection detail */}
    <circle cx="70" cy="97" r="6" fill="#3b82f6" opacity="0.2" />
    <circle cx="130" cy="97" r="6" fill="#3b82f6" opacity="0.2" />
    {/* Precision Hinge */}
    <rect x="35" y="88" width="4" height="12" rx="1" fill="#94a3b8" />
    <rect x="161" y="88" width="4" height="12" rx="1" fill="#94a3b8" />
    <defs>
      <linearGradient id="visual_grad" x1="35" y1="80" x2="165" y2="115" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
  </svg>
);

const WearablesIllustration = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 drop-shadow-2xl">
    {/* Straps */}
    <rect x="84" y="30" width="32" height="140" rx="10" fill="#e2e8f0" />
    {/* Case Body */}
    <rect x="68" y="70" width="64" height="64" rx="16" fill="url(#wear_grad)" stroke="#f1f5f9" strokeWidth="1" />
    {/* Screen Layer */}
    <rect x="76" y="78" width="48" height="48" rx="10" fill="#0f172a" />
    {/* Subtle interface detail */}
    <rect x="86" y="88" width="28" height="2" rx="1" fill="#3b82f6" opacity="0.3" />
    <circle cx="100" cy="102" r="10" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
    {/* Side Button */}
    <rect x="131" y="94" width="3" height="12" rx="1.5" fill="#cbd5e1" />
    <defs>
      <linearGradient id="wear_grad" x1="68" y1="70" x2="132" y2="134" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffffff" />
        <stop offset="1" stopColor="#f1f5f9" />
      </linearGradient>
    </defs>
  </svg>
);

const ProductsWeMade: React.FC = () => {
  const categories = [
    {
      title: "Outdoor",
      href: "/products/outdoor",
      subtitle: "Rugged IoT / Camera Modules / CPE",
      description: "Robust, weather-proof electronics engineered for extreme environments and off-grid reliability.",
      illustration: <OutdoorIllustration />,
      bg: "bg-[#fcfcfd]"
    },
    {
      title: "Home",
      href: "/products/home",
      subtitle: "Mesh Wi-Fi / Smart Personal Care",
      description: "Next-generation lifestyle technology bridging high-speed connectivity with sleek, modern utility.",
      illustration: <HomeIllustration />,
      bg: "bg-[#f8fafc]"
    },
    {
      title: "Visual Devices",
      href: "/products/visual-devices",
      subtitle: "AR Platforms / Medical Optics",
      description: "Precision-engineered optical systems for immersive consumer AR and clinical vision diagnostics.",
      illustration: <VisualIllustration />,
      bg: "bg-[#fcfcfd]"
    },
    {
      title: "Wearables",
      href: "/products/wearables",
      subtitle: "Smartwatch / Health Sensors",
      description: "Miniaturized, high-density hardware platforms delivering real-time health insights and connectivity.",
      illustration: <WearablesIllustration />,
      bg: "bg-[#f8fafc]"
    }
  ];

  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] mb-6 tracking-tight leading-tight">
            Comprehensive Engineering & <br /> Manufacturing Services.
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            From industrial IoT to precision consumer optics, we deliver mass-produced solutions across a diverse range of high-tech categories.
          </p>
        </div>
    
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.href} 
              className={`group relative flex flex-col md:flex-row h-full rounded-[2.5rem] border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${cat.bg}`}
            >
              {/* Illustration Area */}
              <div className="w-full md:w-2/5 flex items-center justify-center p-8 bg-white/40 backdrop-blur-sm border-b md:border-b-0 md:border-r border-slate-100 group-hover:bg-white transition-colors duration-500">
                <div className="transform group-hover:scale-105 transition-transform duration-700">
                  {cat.illustration}
                </div>
              </div>
              
              {/* Text Area */}
              <div className="w-full md:w-3/5 p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-2 tracking-tight">{cat.title}</h3>
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6 opacity-80">
                  {cat.subtitle.split(" / ").map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                  {cat.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                  Explore Capability <span>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsWeMade;