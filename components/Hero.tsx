import React, { useEffect, useState } from "react";
import { ChevronRight, PlayCircle } from "lucide-react";
import VideoModal from "./VideoModal";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden font-sans">
      
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${import.meta.env.BASE_URL}assets/index.mp4`} type="video/mp4" />
      </video>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Enhanced Dynamic Glows */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] opacity-70 animate-pulse transition-opacity duration-[5000ms]"></div>
        <div className="absolute -bottom-48 -right-48 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-40"></div>

        {/* Subtle Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div
        className={`relative z-10 max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Title Block - Adjusted for single line layout */}
        <div className="flex flex-col gap-6 mb-16">
          {/* Title Line 1 - Reduced max size to fit on one line */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl whitespace-normal md:whitespace-nowrap">
            Agile Engineering Solutions
          </h1>
          {/* <a href="mailto:sales@agileengineeringsolution.com">Contact Us</a> */}
          {/* Title Line 2 */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white tracking-normal leading-relaxed opacity-90 max-w-4xl mx-auto">
            Global Supply Design and Manufacture Service
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="group px-10 py-4.5 bg-white text-black rounded-full font-bold text-lg hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 cursor-pointer"
          >
            Products we made
            {/* <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
          </button>
          {/* <a 
            href="#ai-demo" 
            className="group px-10 py-4.5 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1"
          >
            <PlayCircle className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
            Watch Demo
          </a> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc={`${import.meta.env.BASE_URL}assets/product.mp4`}
      />
    </div>
  );
};

export default Hero;
