import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { LINKS } from '../constants';

const NAV_LINKS = [
  { name: 'Inicio', path: '/' },
  { name: 'Aprende', path: '/aprende-trading' },
  { name: 'Inicio Rápido', path: '/empezar' },
  { name: 'Herramientas', path: '/herramientas' },
  { name: 'Comunidad', path: '/comunidad' },
  { name: 'Academia Slange', path: '/academia-slange' },
  { name: 'FAQ', path: '/faq' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Aprende Trading Inicio">
          <div className="w-10 h-10 bg-gradient-to-tr from-brand-blue to-brand-gold rounded-lg flex items-center justify-center font-bold text-xl text-white transform group-hover:rotate-6 transition-transform" aria-hidden="true">AT</div>
          <div className="flex flex-col leading-none uppercase">
            <span className="font-display font-black tracking-tighter text-xl text-white">APRENDE</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">Trading</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-xs font-bold transition-colors hover:text-brand-blue uppercase tracking-widest ${location.pathname === link.path ? 'text-brand-blue' : 'text-gray-400'}`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={LINKS.XM_DEMO} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gold py-2 px-6 text-sm"
          >
            Iniciar Ahora
          </a>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú de navegación" aria-expanded={isOpen}>
          {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 lg:hidden px-6 py-8 flex flex-col gap-6 shadow-2xl"
          >
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold flex justify-between items-center uppercase tracking-widest ${location.pathname === link.path ? 'text-brand-blue' : 'text-gray-300'}`}
              >
                {link.name}
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
            <a 
              href={LINKS.XM_DEMO} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary py-4 text-center"
            >
              Comenzar Gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
