import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Users, 
  Zap, 
  Calendar, 
  TrendingUp, 
  Target, 
  ShieldCheck, 
  PlayCircle,
  Clock,
  Globe
} from 'lucide-react';
import { LINKS } from '../constants';
import SEO from '../components/SEO';

const CHANNELS = [
  { name: '#bienvenida', desc: 'Reglas, protocolos y primeros pasos.', icon: ShieldCheck },
  { name: '#señales-vip', desc: 'Alertas en tiempo real con TP/SL.', icon: Zap },
  { name: '#análisis-diario', desc: 'Gráficos explicados por expertos.', icon: TrendingUp },
  { name: '#trading-en-vivo', desc: 'Acceso a las llamadas semanales.', icon: PlayCircle },
  { name: '#comunidad-general', desc: 'El lugar para hablar con todos.', icon: MessageCircle }
];

const TIMEZONES = [
  { region: 'México / Perú / Col / Ecu', time8: '08:00 AM', time9: '09:00 AM' },
  { region: 'Venezuela / USA (Miami)', time8: '09:00 AM', time9: '10:00 AM' },
  { region: 'España / Italia', time8: '03:00 PM', time9: '04:00 PM' }
];

export default function Community() {
  return (
    <div className="pt-28 pb-24">
      <SEO 
        title="Comunidad de Trading - Discord Aprende Trading" 
        description="Únete a nuestra comunidad gratuita en Discord. Sesiones en vivo, mentoría, señales y una red de traders independientes enfocada en tu éxito."
      />
      <section className="px-6 mb-16 md:mb-24">
        <div className="container-width max-w-4xl text-center">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[1] md:leading-[0.95]">Evoluciona en <br /><span className="gradient-text">Comunidad</span></h1>
          <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto italic font-medium">
            El trading suele ser solitario. Aquí te rodeas de personas que buscan el mismo objetivo que tú: la libertad financiera y el dominio real de los mercados.
          </p>
        </div>
      </section>

      <div className="container-width px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-32">
           <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tighter uppercase leading-[0.95]">Un ecosistema <br className="hidden md:block" />para <span className="text-brand-blue">crecer juntos</span></h2>
              <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed">
                Nuestra comunidad en Discord es el corazón de esta iniciativa. Te conectamos directamente con otros estudiantes y con el ambiente de trabajo de la Academia Slange Trading.
              </p>
              <div className="space-y-6">
                 {[
                   { title: 'Mentores Activos', desc: 'Traders con experiencia que responden tus dudas en tiempo real.' },
                   { title: 'Transparencia Total', desc: 'Analizamos tanto las ganancias como los aprendizajes en las pérdidas.' },
                   { title: 'Ritual Semanal', desc: 'Todos los jueves nos conectamos para ver qué está haciendo el mercado.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 group-hover:scale-150 transition-transform" />
                      <div>
                         <h4 className="font-bold text-white mb-1">{item.title}</h4>
                         <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="glass-card p-1 border-brand-blue/20">
              <div className="bg-brand-dark rounded-xl overflow-hidden shadow-2xl relative group">
                 <div className="absolute inset-0 bg-brand-blue/10 pointer-events-none" />
                 <div className="p-8">
                    <div className="flex items-center justify-between mb-8">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-[#5865F2] flex items-center gap-2">
                          <MessageCircle className="w-3 h-3" /> Discord Interface
                       </span>
                       <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500 animate-pulse" />
                    </div>
                    <div className="space-y-4">
                       {CHANNELS.map((ch, i) => (
                         <div key={i} className="flex items-center gap-4 p-3 bg-white/5 border border-white/5 rounded-lg hover:border-brand-blue/30 transition-all cursor-default">
                            <ch.icon className="w-4 h-4 text-gray-500" />
                            <div>
                               <h5 className="text-xs font-bold text-white leading-none mb-1">{ch.name}</h5>
                               <p className="text-[10px] text-gray-500 leading-none">{ch.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <section className="mb-20 md:mb-32">
           <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tighter mb-4">Agenda <span className="text-brand-blue">Semanal</span></h2>
              <p className="text-gray-500 font-light text-sm md:text-base">Programación oficial de nuestras sesiones en vivo.</p>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div className="glass-card p-8 md:p-10 border-brand-blue/20 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <PlayCircle className="w-40 h-40" />
                 </div>
                 <div className="inline-block px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-[10px] font-black uppercase tracking-widest mb-6">
                    Sesión Principal
                 </div>
                 <h3 className="text-3xl font-display font-black uppercase tracking-tighter mb-4">Operativa en VIVO</h3>
                 <p className="text-gray-400 font-light text-base mb-8 italic">"Análisis técnico puro y ejecuciones en tiempo real por los expertos de la academia."</p>
                 
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-brand-gold">
                       <Calendar className="w-5 h-5" />
                       <span className="text-sm font-black uppercase tracking-widest">Todos los Jueves</span>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 space-y-4">
                       {TIMEZONES.map((tz, i) => (
                         <div key={i} className="flex justify-between items-center text-xs">
                            <span className="text-gray-500 font-bold uppercase tracking-widest">{tz.region}</span>
                            <span className="text-white font-black font-mono">{tz.time8}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="glass-card p-8 md:p-10 border-brand-gold/20 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Users className="w-40 h-40" />
                 </div>
                 <div className="inline-block px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-[10px] font-black uppercase tracking-widest mb-6">
                    Sesión Comunitaria
                 </div>
                 <h3 className="text-3xl font-display font-black uppercase tracking-tighter mb-4">Mesa Redonda Estudiantil</h3>
                 <p className="text-gray-400 font-light text-base mb-8 italic">"Sesión interactiva gratuita entre estudiantes para compartir proyecciones y resolver dudas."</p>
                 
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-brand-blue">
                       <Clock className="w-5 h-5" />
                       <span className="text-sm font-black uppercase tracking-widest">Post-Operativa (Jueves)</span>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 space-y-4">
                       {TIMEZONES.map((tz, i) => (
                         <div key={i} className="flex justify-between items-center text-xs">
                            <span className="text-gray-500 font-bold uppercase tracking-widest">{tz.region}</span>
                            <span className="text-white font-black font-mono">{tz.time9}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <section className="section-padding bg-brand-dark border border-white/5 rounded-3xl overflow-hidden relative">
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <Calendar className="w-64 h-64" />
           </div>
           <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 px-10">
              <div>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.4)]" />
                    <span className="text-xs font-black uppercase tracking-tighter text-white">Siguiente Llamada</span>
                 </div>
                 <h3 className="text-4xl font-display font-extrabold mb-6 italic tracking-tighter">PREPÁRATE PARA <br/><span className="text-brand-blue tracking-tighter">EL PRÓXIMO JUEVES</span></h3>
                 <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed max-w-sm">
                   Asegúrate de tener MetaTrader 5 abierto 10 minutos antes para no perderte el análisis de pre-mercado.
                 </p>
                 <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="btn-primary py-5 px-10">
                   Unirse ahora gratis
                 </a>
              </div>
              <div className="glass-card p-10 bg-white/5 border-white/10 text-center">
                 <Target className="w-12 h-12 text-brand-gold mx-auto mb-6" />
                 <h4 className="text-xl font-bold mb-4">Contenido de las Sesiones</h4>
                 <ul className="space-y-4 text-left inline-block">
                    {['Estructura de Mercado real', 'Psicología de la sesión', 'Gestión de riesgo en vivo', 'P&R Directas'].map((t, i) => (
                       <li key={i} className="flex gap-3 items-center text-sm text-gray-400 uppercase tracking-widest font-bold">
                          <Zap className="w-3 h-3 text-brand-blue" /> {t}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>
        </section>

        <div className="mt-20 md:mt-32 text-center">
           <h2 className="text-3xl sm:text-4xl font-display font-bold mb-10 md:mb-16 uppercase tracking-tighter">Testimonios de la <span className="text-brand-blue">Comunidad</span></h2>
           <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                { name: "Andrés V.", text: "Lo mejor es que la ayuda es real. He preguntado las cosas más básicas y siempre hay alguien con paciencia para explicar." },
                { name: "Sofía M.", text: "Las señales me ayudaron a confiar en mi MT5. Ahora ya empiezo a ver mis propios análisis." },
                { name: "Roberto K.", text: "El ambiente es profesional. Nada de gente presumiendo Lambos, aquí se viene a trabajar y aprender de verdad." }
              ].map((t, i) => (
                <div key={i} className="glass-card p-8 border-white/5 text-left">
                   <p className="text-gray-400 italic text-sm mb-6 leading-relaxed">"{t.text}"</p>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-blue/20" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white">{t.name}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
