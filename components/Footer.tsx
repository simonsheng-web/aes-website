import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0c10] text-gray-400 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              {/* brightness-0 invert */}
              <img src="/logo.png" alt="AES Logo" className="h-8 w-auto " />
              <span className="font-bold text-xl text-white tracking-wider">
                AES
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering enterprises with intelligent, agile engineering
              solutions.
            </p>
          </div>

          {/*/!* Column 2: Company *!/*/}
          {/*<div>*/}
          {/*  <h4 className="text-xs font-semibold tracking-wider text-gray-200 uppercase mb-6">*/}
          {/*    Company*/}
          {/*  </h4>*/}
          {/*  <ul className="space-y-4 text-sm">*/}
          {/*    <li>*/}
          {/*      <a*/}
          {/*        href="#"*/}
          {/*        className="hover:text-white transition-colors duration-200"*/}
          {/*      >*/}
          {/*        About Us*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a*/}
          {/*        href="#"*/}
          {/*        className="hover:text-white transition-colors duration-200"*/}
          {/*      >*/}
          {/*        Careers*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a*/}
          {/*        href="#"*/}
          {/*        className="hover:text-white transition-colors duration-200"*/}
          {/*      >*/}
          {/*        Newsroom*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a*/}
          {/*        href="#"*/}
          {/*        className="hover:text-white transition-colors duration-200"*/}
          {/*      >*/}
          {/*        Investors*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}

          {/* Column 3: Solutions */}
          {/*<div>*/}
          {/*  <h4 className="text-xs font-semibold tracking-wider text-gray-200 uppercase mb-6">*/}
          {/*    Solutions*/}
          {/*  </h4>*/}
          {/*  <ul className="space-y-4 text-sm">*/}
          {/*    <li>*/}
          {/*      <a*/}
          {/*        href="#"*/}
          {/*        className="hover:text-white transition-colors duration-200"*/}
          {/*      >*/}
          {/*        AI Solutions*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a*/}
          {/*        href="#"*/}
          {/*        className="hover:text-white transition-colors duration-200"*/}
          {/*      >*/}
          {/*        Product Engineering*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a*/}
          {/*        href="#"*/}
          {/*        className="hover:text-white transition-colors duration-200"*/}
          {/*      >*/}
          {/*        Manufacturing Services*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a*/}
          {/*        href="#"*/}
          {/*        className="hover:text-white transition-colors duration-200"*/}
          {/*      >*/}
          {/*        Cloud Infrastructure*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-gray-200 uppercase mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="leading-relaxed">
                301 Thelma Dr #102,
                <br />
                SMB 8770 WY 82609
              </p>
              <p className="hover:text-white transition-colors duration-200">
                (224) 789 - 8885
              </p>
              <p>
                <a
                  href="mailto:sales@agileengineeringsolution.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  sales@agileengineeringsolution.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 md:gap-0">
          <div>
            &copy; 2025 Agile Engineering Solutions. All rights reserved.
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Use
              </a>
            </div>
            <div className="flex space-x-4 md:border-l border-gray-800 md:pl-8">
              <a
                href="#"
                className="hover:text-white hover:scale-110 transition-transform duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:text-white hover:scale-110 transition-transform duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:text-white hover:scale-110 transition-transform duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
