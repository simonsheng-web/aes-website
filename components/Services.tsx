import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Digital Transformation",
    description: "Modernize legacy systems using strangler fig patterns and cloud-native architecture.",
    features: ["Legacy Migration", "Cloud Adoption", "Process Optimization"]
  },
  {
    title: "AI & ML Integration",
    description: "Embed intelligence into your product lifecycle to automate and enhance decision making.",
    features: ["Custom Models", "Data Pipelines", "AI Strategy"]
  },
  {
    title: "DevSecOps",
    description: "Secure your software supply chain while increasing deployment frequency.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Security Scanning"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
           <div className="lg:col-span-1">
              <h2 className="text-4xl font-semibold text-[#1d1d1f] mb-6">Services</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Comprehensive solutions tailored for the enterprise, executed with precision.
              </p>
           </div>
           <div className="lg:col-span-2 flex items-end justify-end">
             <a href="#contact" className="group flex items-center text-lg font-medium text-blue-600 hover:text-blue-700 transition-colors">
               Start a project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
              <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold w-fit mb-6">
                0{idx + 1}
              </span>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                {service.description}
              </p>
              
              <ul className="space-y-3 pt-6 border-t border-slate-100">
                {service.features.map((feature, fIdx) => (
                   <li key={fIdx} className="text-sm font-medium text-slate-600">
                     • {feature}
                   </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;