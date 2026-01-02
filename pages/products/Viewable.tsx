import React from 'react';
import { ChevronRight, Glasses, Eye, Layers, Cpu, Scan, PenTool, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ViewableProductPage: React.FC = () => {
  return (
    <div className="pt-16 bg-white font-sans">
      
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center text-sm text-slate-500">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
          <span className="text-slate-800">Products</span>
          <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
          <span className="font-semibold text-blue-600">Viewable</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[500px] bg-slate-900 overflow-hidden flex items-center">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(147,51,234,0.15),transparent_50%)]"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-50"></div>
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10" 
               style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs font-bold uppercase tracking-widest mb-6">
              Augmented Reality
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Viewable
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              AR glasses ODM from optics to system integration. Lightweight, immersive, and optical precision.
            </p>
          </div>
        </div>
      </div>

      {/* Section A: Optical Design */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                    <Glasses className="w-6 h-6" />
                 </div>
                 <h2 className="text-3xl font-bold text-slate-900">Optical & Display Engine</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We specialize in integrating cutting-edge waveguide technology and micro-display engines. Our optical engineers ensure high brightness, wide Field of View (FOV), and minimal artifacts for a seamless user experience.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-600">
                   <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                   <span>Diffractive and holographic waveguide expertise</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                   <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                   <span>Micro-LED and LCoS display engine calibration</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                   <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                   <span>Prescription lens insert compatibility</span>
                </li>
              </ul>
            </div>
            
            {/* Image Grid Placeholder */}
            <div className="grid grid-cols-2 gap-4">
               <div className="col-span-2 h-64 bg-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                  <Glasses className="w-16 h-16 text-slate-300 relative z-10" />
               </div>
               <div className="h-40 bg-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse delay-75"></div>
               </div>
               <div className="h-40 bg-slate-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-slate-200 animate-pulse delay-150"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Tech Stack */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Technologies</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Packing advanced sensors and processing into a form factor that feels natural to wear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Card 1 */}
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                <div className="h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                   <Scan className="w-12 h-12 text-slate-300 group-hover:text-purple-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">SLAM & Tracking</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Hardware calibration for robust 6DoF tracking and Simultaneous Localization and Mapping (SLAM).
                </p>
             </div>

             {/* Card 2 */}
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                <div className="h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                   <PenTool className="w-12 h-12 text-slate-300 group-hover:text-purple-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Industrial Design</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Ergonomic weight distribution and premium materials (magnesium alloy, titanium) for all-day comfort.
                </p>
             </div>

             {/* Card 3 */}
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                <div className="h-48 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                   <Zap className="w-12 h-12 text-slate-300 group-hover:text-purple-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Thermal Mgmt</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Advanced heat dissipation techniques to keep frames cool during intensive compute tasks.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Section C: System Integration */}
      <section className="py-24 border-b border-slate-100 relative overflow-hidden">
         <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform origin-top-right"></div>
         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 h-[400px] bg-slate-900 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
                   <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-slate-900/50"></div>
                   <div className="text-center p-8 relative z-10">
                       <Cpu className="w-24 h-24 text-white/20 mx-auto mb-4" />
                       <div className="text-sm text-slate-400 uppercase tracking-widest">High Density PCB</div>
                   </div>
               </div>
               <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase mb-4">
                     Integration
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">System Integration & Mass Production</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Taking a prototype to mass production requires meticulous planning. We handle rigid-flex PCB design to fit inside slender frames, battery safety certification, and automated optical inspection (AOI) on the assembly line.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our clean-room assembly lines ensure dust-free optical engines, critical for maintaining image clarity and contrast in the final product.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Section D: Core Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Core Capabilities</h2>
              <div className="h-1 w-20 bg-purple-600 mt-4 rounded-full"></div>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Capability 1 */}
              <div className="p-6 border border-slate-200 rounded-xl hover:border-purple-400 transition-colors duration-300 group cursor-default">
                  <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                     <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Optical Lab</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    In-house testing for brightness, uniformity, MTF, and color accuracy.
                  </p>
              </div>

              {/* Capability 2 */}
              <div className="p-6 border border-slate-200 rounded-xl hover:border-purple-400 transition-colors duration-300 group cursor-default">
                  <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                     <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Clean Room</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Class 100/1000 clean rooms for contamination-free optical assembly.
                  </p>
              </div>

              {/* Capability 3 */}
              <div className="p-6 border border-slate-200 rounded-xl hover:border-purple-400 transition-colors duration-300 group cursor-default">
                  <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                     <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Miniaturization</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    High-density interconnect (HDI) and SiP (System in Package) integration.
                  </p>
              </div>

              {/* Capability 4 */}
              <div className="p-6 border border-slate-200 rounded-xl hover:border-purple-400 transition-colors duration-300 group cursor-default">
                  <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                     <Glasses className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Human Factors</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Anthropometric databases to ensure fit across diverse head shapes and sizes.
                  </p>
              </div>

           </div>
        </div>
      </section>

    </div>
  );
};

export default ViewableProductPage;