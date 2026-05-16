import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Play, 
  Download, 
  Smartphone, 
  Monitor, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ExternalLink,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { LINKS } from '../constants';
import SEO from '../components/SEO';

const STEPS = [
  {
    step: '01',
    title: 'Cuenta Demo',
    desc: 'Empieza sin riesgo. XM te da una cuenta con saldo virtual para practicar.',
    longDesc: 'Registra tus datos básicos y obtén acceso instantáneo a los mercados con capital virtual. Es el mejor lugar para cometer errores sin costo.',
    icon: Globe,
    link: LINKS.XM_DEMO,
    btn: 'Abrir Demo XM'
  },
  {
    step: '02',
    title: 'Descargar MT5',
    desc: 'La terminal profesional para operar.',
    longDesc: 'MetaTrader 5 es la herramienta donde verás los gráficos y pondrás operaciones. Disponible para Windows, iPhone y Android.',
    icon: Download,
    link: LINKS.MT5_DOWNLOAD,
    btn: 'Descargar MT5'
  },
  {
    step: '03',
    title: 'Cuenta Real',
    desc: 'Cuando estés listo para el éxito real.',
    longDesc: 'Abre tu cuenta de inversión real. XM ofrece bonos educativos y ejecución ultra rápida para que operes con confianza.',
    icon: Zap,
    link: LINKS.XM_REAL,
    btn: 'Abrir Cuenta Real'
  },
  {
    step: '04',
    title: 'Vincular y Aprender',
    desc: 'Conecta todo y entra a la comunidad.',
    longDesc: 'Vincula tu ID de XM a MetaTrader 5 y únete a nuestro Discord para empezar a seguir análisis y aprender la metodología.',
    icon: Play,
    link: LINKS.DISCORD,
    btn: 'Unirse al Discord'
  }
];

export default function GetStarted() {
  return (
    <div className="pt-28 pb-24 selection:bg-brand-blue/30 selection:text-white">
      <SEO 
        title="Inicio Rápido - Aprende Trading" 
        description="Sigue estos 4 pasos para configurar tu cuenta, descargar MT5 y empezar a operar en el mercado hoy mismo."
      />
      {/* Header Section */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="container-width max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-[10px] uppercase tracking-[0.3em] font-black mb-6 md:mb-8 leading-loose"
          >
            Paso a Paso hacia tu Libertad
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[1] md:leading-[0.95]">
            Guía de <br /><span className="gradient-text">Inicio Rápido</span>
          </h1>
          <p className="text-gray-400 font-light text-base md:text-xl leading-relaxed max-w-2xl mx-auto italic font-medium px-4">
            "Sigue estos 4 pasos y estarás operando en los mercados internacionales antes de que termine el día."
          </p>
        </div>
      </section>

      {/* Steps Grid */}
      <div className="container-width px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STEPS.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 border border-white/5 hover:border-brand-blue/30 transition-all flex flex-col items-start group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <s.icon className="w-20 h-20" />
              </div>
              <span className="text-4xl font-display font-black text-brand-blue/10 mb-8 select-none">{s.step}</span>
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-8 border border-white/10 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-black mb-4 uppercase tracking-tighter text-white">{s.title}</h3>
              <p className="text-gray-400 text-[11px] uppercase tracking-widest font-black leading-loose mb-4 text-brand-blue/60">{s.desc}</p>
              <p className="text-gray-500 text-xs font-light leading-relaxed mb-10 flex-grow italic">
                {s.longDesc}
              </p>
              <a 
                href={s.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary w-full py-4 text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-xl shadow-black/20"
              >
                {s.btn} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ASESORÍA PERSONALIZADA */}
      <section className="mt-20 md:mt-32 section-padding bg-brand-blue/[0.03] border-y border-brand-blue/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5">
           <Zap className="w-40 h-40 md:w-56 md:h-56 text-brand-blue" />
        </div>
        <div className="container-width px-6">
           <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 space-y-6 text-center md:text-left relative z-10">
                 <div className="inline-block px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-[10px] uppercase tracking-widest font-black leading-loose">
                    Atención VIP 1 a 1
                 </div>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tighter uppercase leading-[1] md:leading-[0.95]">
                    ¿Prefieres que te <br className="hidden md:block" /><span className="text-brand-blue text-4xl md:text-6xl italic">guiemos nosotros?</span>
                 </h2>
                 <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed">
                    Si te sientes confundido con la tecnología o quieres asegurarte de que todo esté perfecto desde el primer minuto, ofrecemos una sesión de acompañamiento total.
                 </p>
                 <div className="flex flex-col sm:flex-row items-center md:items-start gap-6 md:gap-10">
                    <div className="flex flex-col text-center sm:text-left">
                       <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Inversión única</span>
                       <span className="text-4xl font-display font-black text-white">$10 <span className="text-sm font-light text-gray-500 italic">/ sesión 60min</span></span>
                    </div>
                    <div className="h-px w-full sm:h-12 sm:w-px bg-white/10" />
                    <ul className="space-y-2 inline-block text-left">
                       {['Creación de cuenta Real/Demo', 'Vinculación a MT5', 'Configuración de Gráficos', 'Primera Orden Guiada'].map((t, i) => (
                         <li key={i} className="text-[9px] uppercase tracking-[0.2em] font-black text-brand-blue flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-brand-gold" /> {t}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
              <div className="w-full md:w-auto shrink-0">
                 <a 
                   href={`https://wa.me/${LINKS.SUPPORT_PHONE.replace('+', '')}?text=Hola,%20busco%20la%20asesoría%20de%2010$%20para%20configurar%20mi%20cuenta.`} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn-gold px-12 py-7 text-xl font-display font-black uppercase tracking-tighter shadow-2xl shadow-brand-gold/20 flex flex-col items-center group"
                 >
                    <span className="group-hover:scale-110 transition-transform">Solicitar Ayuda</span>
                    <span className="text-[10px] tracking-widest mt-1 uppercase opacity-60 font-bold">Vía WhatsApp</span>
                 </a>
              </div>
           </div>
        </div>
      </section>

      {/* BINANCE SECTION */}
      <section className="section-padding overflow-hidden relative">
        <div className="container-width px-6">
          <div className="glass-card p-12 bg-zinc-900/40 relative overflow-hidden border-white/5">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Zap className="w-64 h-64 text-brand-blue" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-display font-black uppercase tracking-tighter">¿Cómo fondear <br /><span className="text-brand-blue">con cripto?</span></h2>
                <p className="text-gray-400 font-light text-lg leading-relaxed">
                  Muchos de nuestros estudiantes prefieren fondear sus cuentas usando USDT o Bitcoin por su rapidez y bajas comisiones. Para esto, recomendamos <strong>Binance</strong> como el exchange líder mundial.
                </p>
                <div className="space-y-4">
                  {['Compre Cripto en Segundos', 'Transfiera a XM al instante', 'Sin intermediarios bancarios'].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
                      <ShieldCheck className="w-4 h-4 text-brand-blue" /> {f}
                    </div>
                  ))}
                </div>
                <a 
                  href={LINKS.BINANCE} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary py-5 px-10 text-lg font-display font-black uppercase tracking-widest inline-flex items-center gap-3 shadow-xl"
                >
                  Abrir Binance <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-brand-blue/20 blur-[80px] rounded-full group-hover:bg-brand-blue/30 transition-all opacity-50" />
                <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                   <div className="text-center p-10">
                      <h4 className="text-6xl font-display font-black text-brand-blue mb-4">BINANCE</h4>
                      <p className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">Tu puente al mundo cripto</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-20 md:mt-32 py-16 md:py-24 border-t border-white/5">
        <div className="container-width px-4 sm:px-6 text-center">
           <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black mb-6 md:mb-8 uppercase tracking-tighter">¿Listo para <br className="hidden md:block" /><span className="text-brand-gold">el éxito?</span></h2>
           <p className="text-gray-500 text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto italic font-medium leading-relaxed">"Estamos aquí para guiarte en cada paso. No hay preguntas tontas, solo falta de información. Únete al Discord y empieza a aprender hoy mismo."</p>
           <div className="flex gap-4 md:gap-6 justify-center flex-col sm:flex-row">
              <Link to="/faq" className="btn-secondary px-6 md:px-12 py-4 md:py-5 text-base md:text-lg font-black uppercase tracking-widest w-full sm:w-auto">Preguntas Frecuentes</Link>
              <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 md:px-12 py-4 md:py-5 text-base md:text-lg font-black uppercase tracking-widest w-full sm:w-auto">Entrar al Discord</a>
           </div>
        </div>
      </section>
    </div>
  );
}
