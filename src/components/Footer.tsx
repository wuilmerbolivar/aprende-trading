import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ExternalLink, Download, Headphones } from 'lucide-react';
import { LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16 md:mb-24">
        <div className="space-y-8 lg:col-span-5 lg:pr-12">
          <Link to="/" className="flex items-center gap-3" aria-label="Aprende Trading Inicio">
            <div className="w-12 h-12 bg-gradient-to-tr from-brand-blue to-brand-gold rounded-xl flex items-center justify-center font-bold text-2xl text-white" aria-hidden="true">AT</div>
            <div className="flex flex-col leading-none uppercase">
              <span className="font-display font-black tracking-tighter text-2xl text-white">APRENDE</span>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">Trading</span>
            </div>
          </Link>
          <p className="text-gray-400 text-[10px] sm:text-xs leading-loose max-w-sm uppercase tracking-widest font-bold">
            Tu guía paso a paso para dominar los mercados financieros. Comunidad independiente e informativa.
          </p>
          <div className="flex gap-4">
            <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white" aria-label="Comunidad Discord">
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href={LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 h-12 px-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white" aria-label="Contacto WhatsApp">
              <Headphones className="w-5 h-5" aria-hidden="true" />
              <span className="text-[10px] font-black tracking-[0.15em] sm:tracking-[0.2em]">SOPORTE</span>
            </a>
          </div>
        </div>

        <div className="space-y-8 lg:col-span-2 lg:pl-4">
          <h4 className="text-white font-black uppercase tracking-widest text-[11px]">Navegación</h4>
          <ul className="grid grid-cols-1 gap-5">
            {[
              { name: 'Inicio', path: '/' },
              { name: 'Filosofía', path: '/nosotros' },
              { name: 'Aprende', path: '/aprende-trading' },
              { name: 'Inicio Rápido', path: '/empezar' },
              { name: 'Herramientas', path: '/herramientas' },
              { name: 'Comunidad', path: '/comunidad' },
              { name: 'Academia Slange', path: '/academia-slange' },
              { name: 'FAQ', path: '/faq' }
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-gray-400 hover:text-brand-blue text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-widest font-bold transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8 lg:col-span-3">
          <h4 className="text-white font-black uppercase tracking-widest text-[11px]">Enlaces Sugeridos</h4>
          <ul className="grid grid-cols-1 gap-5">
            <li>
              <a href={LINKS.XM_DEMO} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-widest font-bold transition-all flex items-center gap-2 group">
                Cuenta Demo XM <ArrowRight className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href={LINKS.XM_REAL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-widest font-bold transition-all flex items-center gap-2 group">
                Cuenta Real XM <ArrowRight className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href={LINKS.BINANCE} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-widest font-bold transition-all flex items-center gap-2 group">
                Binance <ExternalLink className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href={LINKS.SLANGE_TRADING} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-widest font-bold transition-all flex items-center gap-2 group">
                Slange Trading <ArrowRight className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href={LINKS.MT5_DOWNLOAD} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-gold text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-widest font-bold transition-all flex items-center gap-3 max-w-fit mt-2">
                Instalar MT5 <Download className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-8 lg:col-span-2">
          <h4 className="text-white font-black uppercase tracking-widest text-[11px]">Ecosistema & Legal</h4>
          <ul className="grid grid-cols-1 gap-5">
            <li className="pt-1 flex flex-col gap-5">
              <Link to="/faq" className="text-gray-400 hover:text-white text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-widest font-bold">Ayuda y FAQ</Link>
              <Link to="/risk-disclosure" className="text-gray-400 hover:text-white text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-widest font-bold">Aviso de Riesgo</Link>
              <Link to="/privacy" className="text-gray-500 hover:text-white text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-widest font-bold italic opacity-60">Privacidad</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 text-center">
        <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl mb-10">
          <p className="text-[9px] text-gray-500 leading-relaxed uppercase tracking-[0.2em] max-w-4xl mx-auto italic font-black">
            AVISO: ESTA PÁGINA ES UNA GUÍA INDEPENDIENTE Y NO REPRESENTA A XM NI A SLANGE TRADING ACADEMY. EL TRADING EN MERCADOS FINANCIEROS IMPLICA RIESGO SIGNIFICATIVO. LOS RESULTADOS PASADOS NO GARANTIZAN RESULTADOS FUTUROS. EL CONTENIDO EDUCATIVO AQUÍ PROPORCIONADO NO CONSTITUYE ASESORÍA FINANCIERA PROFESIONAL. EL TRADING DE DERIVADOS FINANCIEROS CONLLEVA UN ELEVADO NIVEL DE RIESGO PARA SU CAPITAL.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-4">
          <div className="text-[10px] text-gray-700 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} APRENDE TRADING. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="text-[10px] text-gray-500 font-medium">
            Desarrollado por <a href={LINKS.DEVELOPER_PORTFOLIO} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Wuilmer Bolívar</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
