import React from 'react';
import { Bot, BrainCircuit, Workflow, ShieldCheck, BarChart3, CloudLightning, ArrowUpRight } from 'lucide-react';
import { Capability } from '../types';

const AICapabilities: React.FC = () => {
  return (
    <section id="ai-capabilities" className="py-32 bg-[#f5f5f7] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-semibold text-[#1d1d1f] tracking-tight mb-6">
            Intelligence in every layer.
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            We don't just add AI. We rebuild the core of engineering with it.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* Card 1: Large (Span 2 cols) */}
          <div className="group md:col-span-2 relative bg-white rounded-[2rem] p-10 overflow-hidden bento-card border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300">
             <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Bot className="w-72 h-72 text-blue-600 rotate-12 transform group-hover:scale-110 transition-transform duration-700" />
             </div>
             <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Bot className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-3">Generative Architecture</h3>
                   <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                     Leverage LLMs to scaffold microservices and infrastructure code from high-level requirements instantly.
                   </p>
                </div>
                <div className="absolute bottom-8 right-8">
                  <button className="w-12 h-12 rounded-full bg-[#f5f5f7] flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
             </div>
          </div>

          {/* Card 2: QA */}
           <div className="group relative bg-white rounded-[2rem] p-8 bento-card border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                   <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Intelligent QA</h3>
                <p className="text-slate-500 leading-relaxed">
                  Self-healing test scripts that adapt to UI changes automatically without human intervention.
                </p>
              </div>
           </div>

           {/* Card 3: Analytics */}
           <div className="group relative bg-white rounded-[2rem] p-8 bento-card border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                   <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Predictive Analytics</h3>
                <p className="text-slate-500 leading-relaxed">
                  Forecast system bottlenecks and capacity issues weeks before they impact your users.
                </p>
              </div>
           </div>

           {/* Card 4: Semantic Search (Large) */}
           <div className="group md:col-span-2 relative bg-[#1d1d1f] rounded-[2rem] p-10 overflow-hidden bento-card text-white shadow-xl">
             <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black z-0"></div>
             <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <BrainCircuit className="w-72 h-72 text-white -rotate-12 transform group-hover:scale-110 transition-transform duration-700" />
             </div>
             <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <BrainCircuit className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-3xl font-semibold text-white mb-3">Semantic Search & RAG</h3>
                   <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                     Implement enterprise-grade search that understands context, not just keywords, powered by vector databases and advanced RAG pipelines.
                   </p>
                </div>
             </div>
          </div>

          {/* Card 5: Workflow */}
          <div className="group relative bg-white rounded-[2rem] p-8 bento-card border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                   <Workflow className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Auto-Workflow</h3>
                <p className="text-slate-500 leading-relaxed">
                  Autonomous agents handling repetitive ops tasks, freeing your team for innovation.
                </p>
              </div>
           </div>

           {/* Card 6: FinOps */}
           <div className="group relative bg-white rounded-[2rem] p-8 bento-card border border-white/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                   <CloudLightning className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Cloud FinOps</h3>
                <p className="text-slate-500 leading-relaxed">
                  Real-time resource analysis to automatically right-size instances and reduce cloud spend.
                </p>
              </div>
           </div>
           
           {/* CTA Card */}
           <div className="group relative bg-blue-600 rounded-[2rem] p-8 bento-card flex items-center justify-center text-center cursor-pointer hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
             <div>
               <h3 className="text-2xl font-semibold text-white mb-2">View All Features</h3>
               <ArrowUpRight className="w-8 h-8 text-white mx-auto mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default AICapabilities;