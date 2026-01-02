import React from 'react';

const GlobalFootprint: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1d1d1f] mb-4 tracking-tight">
            Global Sales and Manufacturing Sites
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Strategically positioned across the globe to deliver agile solutions and manufacturing excellence.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[450px] bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-sm mb-12 group/map">
          
          {/* Map Image */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1280px-World_map_-_low_resolution.svg.png" 
            alt="World Map" 
            className="absolute inset-0 w-full h-full object-cover opacity-75 grayscale-[20%]"
          />

          {/* --- SALES SITES (BLUE) --- */}

          {/* San Jose, USA */}
          <div className="absolute left-[14%] top-[22%] group z-10">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-blue-600 shadow-lg ring-2 ring-white cursor-pointer hover:scale-125 transition-transform duration-300"></div>
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20 whitespace-nowrap">
                <div className="bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-xl border border-slate-100 flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-900">San Jose, USA</span>
                  <span className="text-[10px] text-blue-600 font-medium uppercase tracking-wide">HQ and R&D office</span>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rotate-45 border-r border-b border-slate-100"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Atalant, USA */}
          <div className="absolute left-[24%] top-[27%] group z-10">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-blue-600 shadow-lg ring-2 ring-white cursor-pointer hover:scale-125 transition-transform duration-300"></div>
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20 whitespace-nowrap">
                <div className="bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-xl border border-slate-100 flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-900">Atlanta, USA</span>
                  <span className="text-[10px] text-blue-600 font-medium uppercase tracking-wide">Operation office</span>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rotate-45 border-r border-b border-slate-100"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Shanghai, China */}
          <div className="absolute left-[81%] top-[26%] group z-10">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-blue-600 shadow-lg ring-2 ring-white cursor-pointer hover:scale-125 transition-transform duration-300"></div>
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20 whitespace-nowrap">
                <div className="bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-xl border border-slate-100 flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-900">Shanghai, China</span>
                  <span className="text-[10px] text-blue-600 font-medium uppercase tracking-wide">R&D office</span>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rotate-45 border-r border-b border-slate-100"></div>
                </div>
              </div>
            </div>
          </div>

          {/* --- MANUFACTURING SITES (ORANGE) --- */}

          {/* Shenzhen, China */}
          <div className="absolute left-[79%] top-[33%] group z-10">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-orange-500 shadow-lg ring-2 ring-white cursor-pointer hover:scale-125 transition-transform duration-300"></div>
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20 whitespace-nowrap">
                <div className="bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-xl border border-slate-100 flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-900">Shenzhen, China</span>
                  <span className="text-[10px] text-orange-600 font-medium uppercase tracking-wide">Manufacturing</span>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rotate-45 border-r border-b border-slate-100"></div>
                </div>
              </div>
            </div>
          </div>

          

          {/* Ho Chi Minh, Vietnam */}
          <div className="absolute left-[79%] top-[39%] group z-10">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-orange-500 shadow-lg ring-2 ring-white cursor-pointer hover:scale-125 transition-transform duration-300"></div>
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20 whitespace-nowrap">
                <div className="bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-xl border border-slate-100 flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-900">Ho Chi Minh, Vietnam</span>
                  <span className="text-[10px] text-orange-600 font-medium uppercase tracking-wide">Manufacturing</span>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rotate-45 border-r border-b border-slate-100"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Malaysia */}
          <div className="absolute left-[77%] top-[45%] group z-10">
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-orange-500 shadow-lg ring-2 ring-white cursor-pointer hover:scale-125 transition-transform duration-300"></div>
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20 whitespace-nowrap">
                <div className="bg-white text-slate-800 px-3 py-1.5 rounded-lg shadow-xl border border-slate-100 flex flex-col items-center">
                  <span className="text-xs font-bold text-slate-900">Malaysia</span>
                  <span className="text-[10px] text-orange-600 font-medium uppercase tracking-wide">Manufacturing</span>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white rotate-45 border-r border-b border-slate-100"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legend */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                </span>
                <span className="text-sm font-medium text-slate-600">Operating Offices</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-orange-500 ring-2 ring-orange-100"></span>
                <span className="text-sm font-medium text-slate-600">Manufacturing and R&D Sites</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalFootprint;