import React from 'react';
import { ScanFace, LineChart, Users, CloudLightning, Cpu, Code2 } from 'lucide-react';

const AICapabilityOverview: React.FC = () => {
  return (
    <section id="ai-overview" className="py-32 bg-white relative overflow-hidden">
      
      {/* Dynamic Mesh Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[1200px] h-[1200px] bg-blue-50/40 rounded-full blur-[160px] animate-blob"></div>
        <div className="absolute bottom-[-15%] right-[-5%] w-[900px] h-[900px] bg-indigo-50/40 rounded-full blur-[160px] animate-blob animation-delay-4000"></div>
        
        {/* Fine Tech Grid */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 rounded-full bg-white border border-slate-200 px-5 py-2 text-[10px] font-black text-blue-600 tracking-[0.2em] uppercase mb-10 shadow-sm">
              <Cpu className="w-3.5 h-3.5" />
              <span>Core Intelligence</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-10 leading-[1.1]">
              AI Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Engineering
              </span>
            </h2>
            
            <p className="text-xl text-slate-500 leading-relaxed mb-12 font-light border-l-2 border-blue-500/20 pl-8">
              We leverage computer vision, predictive analytics, and adaptive learning to transform raw information into intelligent insights.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
               <div className="group p-6 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all">
                  <div className="text-4xl font-bold text-slate-900 mb-1 tabular-nums group-hover:text-blue-600 transition-colors">99.9%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Accuracy</div>
               </div>
               <div className="group p-6 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all">
                  <div className="text-4xl font-bold text-slate-900 mb-1 tabular-nums group-hover:text-indigo-600 transition-colors">&lt;10ms</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Latency</div>
               </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Cards */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="flex items-center gap-4 mb-8 ml-2">
                 <div className="h-[1px] w-12 bg-blue-600"></div>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Vertical Capabilities</span>
            </div>

            {/* Feature Cards with refined styling */}
            {[
              {
                icon: <ScanFace className="w-9 h-9" />,
                title: "Computer Vision",
                desc: "Detect, classify, and track objects with industrial-grade precision. Optimized for edge deployment on low-power silicon.",
                color: "from-blue-50 to-indigo-50",
                text: "text-blue-600"
              },
              {
                icon: <LineChart className="w-9 h-9" />,
                title: "Predictive Intelligence",
                desc: "Forecast system bottlenecks and maintenance needs weeks in advance. Prevent downtime before it starts.",
                color: "from-purple-50 to-indigo-50",
                text: "text-indigo-600"
              },
              {
                icon: <Users className="w-9 h-9" />,
                title: "Adaptive Learning",
                desc: "Dynamic user modeling that evolves in real-time. Deliver hyper-personalized experiences that adjust to context instantly.",
                color: "from-emerald-50 to-teal-50",
                text: "text-emerald-600"
              },
              {
                icon: <CloudLightning className="w-9 h-9" />,
                title: "Hybrid Inference",
                desc: "Seamless execution across edge and cloud. Run latency-critical tasks on-device while offloading complex reasoning.",
                color: "from-orange-50 to-amber-50",
                text: "text-orange-600"
              }
            ].map((card, i) => (
              <div key={i} className="group relative bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row gap-8">
                      <div className={`flex-shrink-0 w-20 h-20 rounded-3xl bg-gradient-to-br ${card.color} flex items-center justify-center ${card.text} group-hover:scale-110 transition-all duration-500 shadow-inner`}>
                           {card.icon}
                      </div>
                      <div>
                          <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{card.title}</h4>
                          <p className="text-slate-500 leading-relaxed text-base">
                              {card.desc}
                          </p>
                      </div>
                  </div>
              </div>
            ))}
            
            {/* Quote Block */}
            <div className="mt-16 p-12 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute -top-12 -right-12 p-8 opacity-[0.05]">
                    <Code2 className="w-64 h-64 text-white transform rotate-12" />
                </div>
                <div className="relative z-10">
                  <p className="text-2xl font-light leading-relaxed mb-8">
                    "We build AI that is <span className="text-blue-400 font-medium">explainable</span> and <span className="text-indigo-400 font-medium">human-centric</span> — designed to enhance understanding, not just automate execution."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-px w-10 bg-blue-500/50"></div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">AES R&D Vision</span>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AICapabilityOverview;