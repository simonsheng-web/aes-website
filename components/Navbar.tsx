import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  // Construction of logo URL using Vite's BASE_URL
  const baseUrl = import.meta.env?.BASE_URL || '/';
  const logoUrl = `${baseUrl}${baseUrl.endsWith('/') ? '' : '/'}logo.png`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    
    if (isHome) {
      // 如果在首页，直接滚动到锚点
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Capabilities', href: '#ai-overview' },
    { name: 'Contact', href: '#contact' },
  ];

  const isScrolledOrInner = scrolled || !isHome;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${isScrolledOrInner ? 'pt-4' : 'pt-6'}`}>
        <div className={`
          relative flex items-center justify-between px-6 
          transition-all duration-300 ease-in-out
          ${isScrolledOrInner   
            ? 'w-[90%] md:w-[700px] h-14 rounded-full glass-nav shadow-lg bg-white/80' 
            : 'w-full max-w-[1400px] h-16 bg-transparent px-6 lg:px-12'
          }
        `}>
          
          {/* Logo - Safe pathing for various environments */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src={logoUrl}
              alt="AES"
              className={`h-8 w-auto transition-all duration-300 rounded-full `} //${!isScrolledOrInner ? 'brightness-0 invert' : ''}
              onError={(e) => {
                // Fallback if BASE_URL fails
                (e.target as HTMLImageElement).src = 'logo.png';
              }}
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-semibold transition-colors duration-200 cursor-pointer uppercase tracking-widest
                  ${isScrolledOrInner ? 'text-slate-600 hover:text-black' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolledOrInner ? 'text-slate-900' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-slate-900 hover:text-blue-600"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 p-2 rounded-full bg-slate-100"
          >
            <X className="w-6 h-6 text-slate-900" />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;