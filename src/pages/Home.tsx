import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, ShieldCheck, Zap, ChevronRight, Play, Download, MessageCircle, Calendar, CheckCircle2, Target, BarChart3, Users, Globe, Smartphone, Laptop, ExternalLink } from 'lucide-react';
import { LINKS } from '../constants';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="pt-20">
      <SEO 
        title="Aprende Trading - Guía Paso a Paso para Principiantes" 
        description="Domina el trading desde cero. Guía paso a paso para configurar tu cuenta XM, usar MetaTrader 5 y unirte a la mejor comunidad de trading en Discord. Sesiones en vivo gratis."
        keywords="trading, xm broker, metatrader 5, aprender trading, forex, criptomonedas, comunidad trading, slange trading"
      />
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-square bg-brand-blue/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-[10px] uppercase tracking-[0.3em] font-black mb-6 md:mb-8 leading-loose">
            Tu Guía Definitiva de Trading
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[1] md:leading-[0.95] mb-6 md:mb-8 tracking-tighter uppercase">
            Domina el <br /><span className="gradient-text">Mercado</span> hoy
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 md:mb-12 leading-relaxed font-light max-w-3xl mx-auto italic px-4 sm:px-0">
            "Te llevamos de la mano: Apertura de cuentas, configuración de MetaTrader 5, análisis de gráficas y participación en vivo. Todo lo que necesitas para operar como un profesional en un solo lugar."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Link to="/empezar" className="btn-primary py-4 md:py-5 px-6 md:px-10 text-base md:text-lg font-display tracking-tight uppercase w-full sm:w-auto">
              Ver Guía de Inicio <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={LINKS.XM_DEMO} target="_blank" rel="noopener noreferrer" className="btn-gold py-4 md:py-5 px-6 md:px-10 text-base md:text-lg font-display tracking-tight uppercase w-full sm:w-auto text-center justify-center">
              Crear Cuenta XM
            </a>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto px-4 md:px-0">
            {[
              { label: 'Cuentas Demo', icon: Play },
              { label: 'Cuentas Reales', icon: Target },
              { label: 'Configura MT5', icon: Download },
              { label: 'Soporte 24/7', icon: MessageCircle }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3 bg-white/5 border border-white/10 p-2.5 md:p-3 rounded-xl justify-center md:justify-start">
                <item.icon className="w-3.5 flex-shrink-0 h-3.5 md:w-4 md:h-4 text-brand-blue" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-widest text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 2. ¿QUÉ ES TRADING? */}
      <section className="section-padding bg-brand-darker">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-display font-bold">¿Qué es el Trading?</h2>
              <p className="text-gray-400 leading-relaxed font-light text-base md:text-lg">
                El trading es la actividad de comprar y vender activos financieros (como divisas, oro o acciones) en mercados globales con el objetivo de obtener una rentabilidad a través de la diferencia de precios.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                No es un juego de azar ni una fórmula mágica para hacerse rico rápido. Es una <span className="text-white font-bold">habilidad profesional</span> que requiere educación, disciplina y herramientas adecuadas.
              </p>
              <div className="pt-4 flex gap-6 md:gap-8 justify-center md:justify-start">
                <div className="text-center">
                  <div className="text-2xl font-bold font-display text-brand-blue">24/5</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Mercado Abierto</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-display text-brand-gold">$6.6T</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Volumen Diario</div>
                </div>
              </div>
            </div>
            <div className="glass-card p-2 aspect-video overflow-hidden relative group">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 pointer-events-none" />
               <div className="h-full w-full bg-black/40 flex items-center justify-center">
                  <BarChart3 className="w-20 h-20 text-brand-blue/30 group-hover:scale-110 transition-transform duration-700" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MERCADOS */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 md:mb-6">Mercados que puedes aprender</h2>
            <p className="text-gray-500 font-light text-sm md:text-base px-4">Diversifica tu conocimiento en los activos más operados del mundo.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: 'Forex', desc: 'Divisas mundiales', icon: Globe, color: 'text-blue-400' },
              { title: 'Oro', desc: 'Metales preciosos', icon: Zap, color: 'text-yellow-400' },
              { title: 'Índices', desc: 'Economías globales', icon: TrendingUp, color: 'text-emerald-400' },
              { title: 'Cripto', desc: 'Activos digitales', icon: ShieldCheck, color: 'text-violet-400' }
            ].map((market, i) => (
              <div key={i} className="glass-card p-8 text-center group hover:border-brand-blue/30 transition-all">
                <market.icon className={`w-10 h-10 ${market.color} mx-auto mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold mb-2">{market.title}</h3>
                <p className="text-xs text-gray-500 font-light uppercase tracking-widest leading-loose">{market.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RUTA DE APRENDIZAJE */}
      <section className="section-padding bg-brand-darker border-y border-white/5">
        <div className="container-width">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-12 md:mb-20 tracking-tight">Tu ruta al éxito paso a paso</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 relative">
            {/* Timeline connectors (desktop only) */}
            <div className="absolute top-10 left-0 w-full h-[1px] bg-white/5 hidden lg:block -z-10" />
            
            {[
              { step: '01', title: 'Conceptos Básicos', desc: 'Aprende los cimientos' },
              { step: '02', title: 'Cuenta Demo', desc: 'Practica sin riesgo' },
              { step: '03', title: 'Herramientas', desc: 'MT5 y TradingView' },
              { step: '04', title: 'Práctica', desc: 'Tus primeras ideas' },
              { step: '05', title: 'Comunidad', desc: 'Únete al Discord' },
              { step: '06', title: 'Evolución', desc: 'Aprende cada día' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group bg-white/5 md:bg-transparent p-6 md:p-0 rounded-2xl border border-white/5 md:border-transparent">
                <div className="w-16 h-16 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center font-display font-bold text-xl text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-xl shadow-brand-blue/0 group-hover:shadow-brand-blue/20">
                  {item.step}
                </div>
                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HERRAMIENTAS */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">El ecosistema profesional</h2>
            <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base px-4">Te enseñamos a usar las mismas herramientas que usan los bancos e instituciones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: 'XM Broker', desc: 'Tu puerta al mercado con respaldo y regulación.', icon: Globe },
              { name: 'MetaTrader 5', desc: 'La plataforma estándar para ejecutar tus ideas.', icon: Laptop },
              { name: 'TradingView', desc: 'La mejor herramienta de análisis gráfico visual.', icon: BarChart3 },
              { name: 'Discord', desc: 'Donde la comunidad cobra vida en tiempo real.', icon: MessageCircle }
            ].map((tool, i) => (
              <div key={i} className="glass-card p-8 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/10 transition-colors">
                  <tool.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold mb-3">{tool.name}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMUNIDAD */}
      <section className="section-padding bg-gradient-to-b from-brand-dark to-brand-blue/5">
        <div className="container-width">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 md:mb-8">Mucho más que <br className="hidden md:block" /><span className="gradient-text">un grupo de señales</span></h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8">
                Slange Trading es un ecosistema de aprendizaje colaborativo. Aquí no solo copias parámetros, entiendes los porqués de cada movimiento del mercado.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 text-left">
                {[
                  { title: 'Sesiones en Vivo', desc: 'Analizamos el mercado juntos.' },
                  { title: 'Soporte Real', desc: 'Preguntas y respuestas directas.' },
                  { title: 'Análisis Educativo', desc: 'Entiende la estructura.' },
                  { title: 'Networking', desc: 'Conoce a otros estudiantes.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass-card p-10 text-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Users className="w-40 h-40" />
                 </div>
                 <h3 className="text-2xl font-display font-bold mb-6">Únete a la Legion</h3>
                 <p className="text-gray-500 mb-8 font-light italic">"Aprende en comunidad, evoluciona en solitario."</p>
                 <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="btn-primary w-full bg-[#5865F2] hover:bg-[#4752c4] border-none">
                    Entrar al Discord
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ALIANZA EDUCATIVA */}
      <section className="section-padding border-t border-white/5 bg-brand-blue/[0.02]">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="glass-card p-10 bg-brand-dark overflow-hidden relative border-brand-gold/20 shadow-2xl shadow-brand-gold/5">
                <div className="absolute top-0 right-0 p-4">
                   <Zap className="w-8 h-8 text-brand-gold opacity-10" />
                </div>
                <h3 className="text-3xl font-display font-black mb-6 uppercase tracking-tighter">Academia <span className="text-brand-gold">Slange Trading</span></h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm">
                  Para aquellos que buscan una formación profesional estructurada, mentorías 24/7 y planes de estudio avanzados con la máxima transparencia.
                </p>
                <div className="space-y-4 mb-10">
                   {['Membresías Profesionales', 'Mentoría 1:1 con Expertos', 'Estrategias de Alta Precisión'].map((f, i) => (
                     <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> {f}
                     </div>
                   ))}
                </div>
                <Link to="/academia-slange" className="btn-gold w-full text-center py-4 uppercase font-black tracking-widest text-xs">
                   Ver Academia Slange
                </Link>
             </div>
             <div className="space-y-6">
                <h2 className="text-4xl font-display font-black uppercase tracking-tighter">Educación de <br/><span className="text-brand-blue">clase mundial</span></h2>
                <p className="text-gray-400 font-light text-lg leading-relaxed">
                  Este portal es tu guía inicial. Te ayudamos a saltar la barrera de entrada. Una vez estés listo para el profesionalismo total, Slange Trading es el camino.
                </p>
                <div className="p-6 border border-white/5 rounded-2xl bg-white/5">
                   <div className="flex gap-4 items-center">
                      <ShieldCheck className="w-8 h-8 text-brand-blue" />
                      <div>
                         <h4 className="font-bold text-white uppercase text-[10px] tracking-widest">Información de Independencia</h4>
                         <p className="text-[10px] text-gray-500 font-medium leading-relaxed mt-1 uppercase tracking-[0.15em]">
                           Somos un portal informativo independiente. Slange Trading opera de forma autónoma con su propio sitio y servicios.
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. RIESGOS BRIEF */}
      <section className="py-12 px-6 bg-red-950/20 border-y border-red-900/20">
        <div className="max-w-4xl mx-auto text-center">
           <div className="flex items-center justify-center gap-3 mb-4 text-red-500 uppercase tracking-widest font-black text-xs">
              <ShieldCheck className="w-5 h-5" /> Advertencia de Riesgo
           </div>
           <p className="text-gray-400 text-xs italic leading-relaxed">
             El trading de divisas y derivados financieros conlleva un elevado nivel de riesgo para su capital y no es adecuado para todos los inversores. No operes con dinero que no puedas permitirte perder.
           </p>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="section-padding bg-brand-dark overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-blue/5 blur-[120px] rounded-full -z-10" />
        <div className="container-width text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black mb-6 md:mb-8 tracking-tighter uppercase">Empieza tu camino <br className="hidden md:block" /><span className="gradient-text">hoy mismo</span></h2>
          <p className="text-gray-500 text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto font-light italic">
            "No dejes para mañana la habilidad que puede cambiar tu futuro financiero. Estamos aquí para apoyarte."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 md:px-12 py-4 md:py-5 text-base md:text-xl bg-[#25D366] hover:bg-[#1ebd5d] border-none uppercase font-black tracking-widest w-full sm:w-auto">
               Soporte WhatsApp
            </a>
            <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 md:px-12 py-4 md:py-5 text-base md:text-xl uppercase font-black tracking-widest w-full sm:w-auto">
               Entrar al Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
