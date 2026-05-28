import React, { useState } from 'react';
import ContactModal from './ContactModal';

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="contact" className="py-24 bg-[#F8F9FA] border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Headline & Message */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6 relative pb-6">
              Let's build something extraordinary.
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500 rounded-full"></span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
              Ready to accelerate your engineering roadmap? Reach out to discuss how our AI-driven solutions can transform your business.
            </p>
          </div>

          {/* Right Column: Contact Details */}
          <div className="space-y-12 pt-2">
            
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Address</h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  301 Thelma Dr #102,<br />
                  SMB 8770 WY 82609
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Contact</h4>
                <div className="space-y-2">
                  <p className="text-slate-600 text-lg font-medium">(224) 789 - 8885</p>
                  <p>
                    <a href="mailto:sales@agileengineeringsolution.com" className="text-slate-600 hover:text-blue-600 transition-colors text-lg">
                      sales@agileengineeringsolution.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-lg font-medium text-lg hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-200 cursor-pointer"
              >
                Contact Us
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Contact;