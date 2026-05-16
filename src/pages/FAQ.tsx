import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, HelpCircle, MessageCircle, AlertTriangle, ShieldCheck, Zap, TrendingUp, Target } from 'lucide-react';
import { LINKS } from '../constants';
import SEO from '../components/SEO';

const FAQS = [
  {
    category: 'Misión del Portal',
    icon: Target,
    items: [
      { q: '¿Qué es exactamente Aprende Trading?', a: 'Es un portal de navegación y guía gratuita. Nuestro objetivo es que no te pierdas en el mar de información del trading. Te damos los enlaces oficiales, te enseñamos a configurar tu terminal y te abrimos las puertas a una comunidad real.' },
      { q: '¿Tienen algún costo los recursos de aquí?', a: 'No. Todo el contenido de este sitio es 100% gratuito. Ganamos visibilidad y credibilidad al referirte a las mejores herramientas, pero tú no pagas nada por usar esta guía.' },
      { q: '¿Quiénes están detrás de esto?', a: 'Somos traders independientes y entusiastas de la tecnología que queremos elevar el estándar de la educación de trading en Latinoamérica, promoviendo brokers regulados y academias de calidad.' }
    ]
  },
  {
    category: 'Cuentas y Seguridad',
    icon: ShieldCheck,
    items: [
      { q: '¿Por qué recomiendan XM Broker?', a: 'XM es uno de los brokers más grandes del mundo, regulado por la ASIC, CySEC y FSC. Para un principiante, es ideal porque permite abrir cuentas con depósitos mínimos bajos y ofrece una cuenta DEMO gratuita de por vida.' },
      { q: '¿Mis fondos están seguros?', a: 'Al depositar en XM, lo haces en un broker regulado. Nosotros nunca pedimos tus claves ni tocamos tu dinero. Tu relación es directa con la institución financiera.' },
      { q: '¿Puedo retirar mi dinero cuando quiera?', a: 'Sí. Los retiros se procesan usualmente en 24 horas y puedes usar métodos locales, tarjetas o criptomonedas.' }
    ]
  },
  {
    category: 'Soporte y Aprendizaje',
    icon: Zap,
    items: [
      { q: '¿Cómo funciona la asesoría de $10?', a: 'Es una sesión "One-on-One" de una hora. Si eres de los que prefiere que alguien le comparta pantalla y le diga "haz clic aquí", este servicio es para ti. Configuramos todo para que solo te preocupes por aprender.' },
      { q: '¿Qué diferencia hay con Slange Academy?', a: 'Nosotros somos el mapa; Slange es el entrenamiento militar. En Slange aprenderás estrategias avanzadas, psicología profunda y gestión de capital a nivel institucional.' },
      { q: '¿Hay grupos para principiantes?', a: 'Sí, en nuestro Discord tenemos canales específicos para quienes están empezando, donde puedes preguntar sin miedo a ser juzgado.' }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="pt-28 pb-24 selection:bg-brand-blue/30 selection:text-white">
      <SEO 
        title="Preguntas Frecuentes - Aprende Trading" 
        description="Aclara todas tus dudas sobre XM, la Academia Slange Trading y nuestra comunidad de trading gratuita."
      />
      {/* Header Section */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="container-width max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue/10 border border-brand-blue/20 rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8 text-brand-blue"
          >
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[1] md:leading-[0.95]">
            Centro de <br /><span className="gradient-text">Claridad</span>
          </h1>
          <p className="text-gray-400 font-light text-base md:text-xl leading-relaxed max-w-2xl mx-auto italic font-medium px-4">
            "En el trading, la confusión es el primer paso hacia la pérdida. Despeja tus dudas y opera con confianza."
          </p>
        </div>
      </section>

      <div className="container-width px-6">
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* FAQ Categories Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="lg:sticky lg:top-32 space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6 flex items-center gap-2">
                Categorías de Ayuda <TrendingUp className="w-3 h-3" />
              </h3>
              {FAQS.map((cat, i) => (
                <button 
                  key={i}
                  onClick={() => document.getElementById(`cat-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                  className="w-full text-left p-6 glass-card border-white/5 hover:border-brand-blue/30 transition-all group flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-white">{cat.category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-8 space-y-20">
            {FAQS.map((cat, i) => (
              <div key={i} id={`cat-${i}`} className="scroll-mt-32">
                <div className="flex items-center gap-4 mb-8">
                  <cat.icon className="w-6 h-6 text-brand-gold" />
                  <h2 className="text-2xl font-display font-black uppercase tracking-tight">{cat.category}</h2>
                </div>
                <div className="space-y-4">
                  {cat.items.map((item, k) => (
                    <motion.details 
                      key={k} 
                      className="glass-card group overflow-hidden border-white/5 hover:border-white/10 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: k * 0.05 }}
                    >
                      <summary className="flex justify-between items-center p-8 cursor-pointer list-none select-none">
                        <span className="font-display font-black text-base sm:text-lg md:text-xl group-open:text-brand-blue transition-colors max-w-[85%] uppercase tracking-tight text-left">{item.q}</span>
                        <div className="w-8 h-8 shrink-0 rounded-full bg-white/5 flex items-center justify-center group-open:rotate-90 transition-transform">
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </summary>
                      <div className="px-8 pb-8">
                        <div className="h-px w-full bg-white/5 mb-8" />
                        <p className="text-gray-400 font-light leading-relaxed text-base italic border-l-2 border-brand-gold/30 pl-6">
                           {item.a}
                        </p>
                      </div>
                    </motion.details>
                  ))}
                </div>
              </div>
            ))}

            {/* Support CTA */}
            <section className="section-padding p-1 relative overflow-hidden">
               <div className="glass-card bg-brand-blue/5 border-brand-blue/20 overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-10 opacity-5">
                     <MessageCircle className="w-64 h-64 text-brand-blue" />
                  </div>
                  <div className="p-12 text-center relative z-10">
                    <div className="inline-block px-4 py-1 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-[10px] font-black uppercase tracking-widest mb-6">
                       Soporte Inmediato
                    </div>
                    <h3 className="text-4xl font-display font-black uppercase tracking-tighter mb-6">¿Aún tienes dudas?</h3>
                    <p className="text-gray-400 font-light text-lg mb-10 max-w-xl mx-auto italic font-medium leading-relaxed">
                      "No dejes que una pequeña duda te cueste una gran oportunidad. Te respondemos personalmente."
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                       <a href={LINKS.WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary bg-[#25D366] hover:bg-[#1ebd5d] border-none px-12 py-5 text-lg font-black uppercase tracking-widest flex items-center justify-center gap-3">
                          WhatsApp <MessageCircle className="w-5 h-5" />
                       </a>
                       <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="btn-secondary px-12 py-5 text-lg font-black uppercase tracking-widest flex items-center justify-center gap-3">
                          Comunidad Discord
                       </a>
                    </div>
                  </div>
               </div>
            </section>
          </div>
        </div>
      </div>

      {/* Warning/Risk Brief */}
      <section className="mt-32 py-12 px-6 border-t border-white/5">
        <div className="container-width flex flex-col md:flex-row gap-8 items-center bg-red-950/10 border border-red-900/20 p-10 rounded-3xl">
           <AlertTriangle className="w-12 h-12 text-red-500 shrink-0" />
           <div className="space-y-2">
              <h4 className="text-red-500 font-display font-black uppercase tracking-widest text-xs">Advertencia de Riesgo</h4>
              <p className="text-[10px] text-gray-500 italic leading-relaxed uppercase tracking-[0.1em] font-medium">
                NINGUNA INFORMACIÓN PROPORCIONADA EN ESTE PORTAL O EN LA RECOMENDACIÓN DE ALIADOS ESTRATÉGICOS CONSTITUYE ASESORÍA FINANCIERA PROFESIONAL. EL TRADING DE DERIVADOS FINANCIEROS CONLLEVA UN NIVEL EXTREMODAMENTE ALTO DE RIESGO PARA SU CAPITAL Y SOLO DEBE SER REALIZADO CON FONDOS QUE USTED ESTÉ DISPUESTO A PERDER TOTALMENTE.
              </p>
           </div>
        </div>
      </section>
    </div>
  );
}
