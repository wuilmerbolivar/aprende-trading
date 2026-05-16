import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Target, Heart, TrendingUp, Users, Globe, Award } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="pt-28 pb-24">
      <SEO 
        title="Nuestra Filosofía - Aprende Trading" 
        description="Conoce nuestra misión de democratizar el acceso a los mercados financieros y promover una educación transparente y estructurada."
      />
      {/* Hero Header */}
      <section className="px-6 mb-24">
        <div className="container-width max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold mb-6 md:mb-8 tracking-tight italic px-4">Nuestra <span className="gradient-text">Filosofía</span></h1>
          <p className="text-gray-400 font-light text-base md:text-xl leading-relaxed max-w-2xl mx-auto italic px-4 sm:px-0">
            "No vendemos una vida de lujos vacíos; enseñamos el camino hacia la verdadera autonomía financiera a través de la educación real."
          </p>
        </div>
      </section>

      <div className="container-width px-6">
        {/* The Story/Mission */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
           <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tighter uppercase leading-[0.95]">¿Por qué <br /><span className="text-brand-blue">Aprende Trading?</span></h2>
              <p className="text-gray-400 font-light text-sm sm:text-base md:text-lg leading-relaxed">
                Nacimos como una iniciativa para democratizar el acceso real a los mercados financieros. Nuestra misión es ser el filtro de calidad que todo principiante necesita, conectándote con las mejores herramientas del mundo como XM y formación de élite como la Academia Slange Trading.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                 <div className="p-6 bg-white/5 border border-white/5 rounded-2xl group hover:border-brand-blue/30 transition-all flex flex-col items-center md:items-start text-center md:text-left">
                    <Heart className="w-8 h-8 text-brand-blue mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-sm mb-2">Pasión</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Por los mercados</p>
                 </div>
                 <div className="p-6 bg-white/5 border border-white/5 rounded-2xl group hover:border-brand-gold/30 transition-all flex flex-col items-center md:items-start text-center md:text-left">
                    <ShieldCheck className="w-8 h-8 text-brand-gold mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-sm mb-2">Transparencia</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">En cada operativa</p>
                 </div>
              </div>
           </div>
           <div className="glass-card aspect-[4/5] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent pointer-events-none" />
              <div className="h-full w-full flex flex-col justify-center p-12 text-center items-center">
                 <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
                    <Globe className="w-10 h-10 text-brand-blue" />
                 </div>
                 <h3 className="text-2xl font-display font-bold mb-4">Misión Global</h3>
                 <p className="text-gray-500 font-light leading-relaxed italic">
                   Buscamos profesionalizar al trader independiente en el mercado hispano, dándole las armas técnicas y mentales para competir en las grandes ligas.
                 </p>
              </div>
           </div>
        </div>

        {/* Pillars */}
        <section className="section-padding border-t border-white/5">
           <div className="text-center mb-10 md:mb-20">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Nuestros Pilares</h2>
              <p className="text-gray-500 font-light text-sm md:text-base">Lo que nos mantiene firmes ante la volatilidad.</p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { title: 'Guía Progresiva', desc: 'De 0 a tu primera operación sin saltar pasos.', icon: TrendingUp },
                { title: 'Gestión Rigurosa', desc: 'El capital es lo único sagrado.', icon: Target },
                { title: 'Apoyo Directo', desc: 'Soporte humano vía WhatsApp y Discord.', icon: Users },
                { title: 'Alianzas de Élite', desc: 'Conectamos con XM y Slange Trading.', icon: Award }
              ].map((p, i) => (
                <div key={i} className="text-center group">
                   <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-all">
                      <p.icon className="w-6 h-6" />
                   </div>
                   <h4 className="font-bold mb-3">{p.title}</h4>
                   <p className="text-xs text-gray-500 font-light leading-relaxed">{p.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Final Statement */}
        <section className="mt-20 md:mt-32 glass-card p-10 md:p-16 text-center border-brand-blue/20 bg-brand-blue/5 overflow-hidden relative mx-4 lg:mx-0">
           <div className="absolute top-0 left-0 p-8 opacity-5">
              <Zap className="w-64 h-64 text-brand-blue" />
           </div>
           <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl font-display font-bold mb-6 italic">"El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es hoy."</h3>
              <p className="text-gray-400 font-light text-lg mb-10 leading-relaxed font-display">
                No importa tu pasado financiero, importa lo que decidas aprender hoy. Estamos aquí para acompañarte.
              </p>
              <div className="flex gap-4 justify-center">
                 <div className="w-12 h-1 bg-brand-blue rounded" />
                 <div className="w-12 h-1 bg-brand-gold rounded" />
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
