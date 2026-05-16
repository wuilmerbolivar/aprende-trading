import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, HelpCircle, ShieldAlert, TrendingUp, Target, BarChart3, Info, ArrowRight, PlayCircle, Globe } from 'lucide-react';
import { LINKS } from '../constants';
import SEO from '../components/SEO';

const SECTIONS = [
  {
    id: 'que-es-trading',
    title: '¿Qué es Trading?',
    icon: BarChart3,
    content: 'El trading es el arte de comprar y vender activos en mercados financieros mundiales. No es una apuesta; es la interpretación del valor de un activo frente a otro para obtener un beneficio de su movimiento de precio.'
  },
  {
    id: 'que-es-forex',
    title: '¿Qué es Forex?',
    icon: Globe,
    content: 'Forex (Foreign Exchange) es el mercado más grande del mundo. Aquí se intercambian divisas como el Euro, el Dólar o el Yen. Funciona las 24 horas del día, 5 días a la semana.'
  },
  {
    id: 'que-es-broker',
    title: '¿Qué es un Broker?',
    icon: Target,
    content: 'Un broker es el intermediario que te permite conectarte a los mercados globales. Piensa en ellos como el "puente" entre tus órdenes de compra/venta y la bolsa real. Recomendamos XM por su reputación y regulación internacional.'
  },
  {
    id: 'que-es-demo',
    title: '¿Qué es una Cuenta Demo?',
    icon: PlayCircle,
    content: 'Es un simulador con dinero ficticio que te permite operar en condiciones reales de mercado sin arriesgar un solo centavo. Es el paso 1 obligatorio para todo estudiante.'
  },
  {
    id: 'que-es-vela',
    title: '¿Qué es una Vela Japonesa?',
    icon: TrendingUp,
    content: 'Es la forma visual de representar el movimiento del precio en un periodo de tiempo. Una vela te dice dónde empezó el precio, dónde terminó y qué tan alto o bajo llegó.'
  },
  {
    id: 'que-es-riesgo',
    title: '¿Qué es el Riesgo?',
    icon: ShieldAlert,
    content: 'El riesgo es la probabilidad de que una operación no salga como esperas. La clave no es evitar el riesgo, sino gestionarlo correctamente para que tus pérdidas nunca superen tus ganancias.'
  }
];

export default function Learn() {
  return (
    <div className="pt-28 pb-24">
      <SEO 
        title="Aprende Trading - Conceptos Básicos" 
        description="Entiende qué es el trading, forex, brokers, velas japonesas y cómo gestionar el riesgo operativo sin tecnicismos innecesarios."
      />
      <section className="px-6 mb-16 md:mb-20">
        <div className="container-width max-w-4xl text-center">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[1] md:leading-[0.95]">Portal <br /><span className="gradient-text">Aprende Trading</span></h1>
          <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto italic font-medium px-4">
            Tu punto de partida para entender el mundo de las finanzas. Sin tecnicismos innecesarios, solo conceptos reales explicados de forma humana.
          </p>
        </div>
      </section>

      <div className="container-width px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-2 hidden lg:block">
            <div className="glass-card p-6 sticky top-28">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6">Conceptos Básicos</h4>
              <nav className="flex flex-col gap-1">
                {SECTIONS.map((s) => (
                  <a 
                    key={s.id} 
                    href={`#${s.id}`}
                    className="px-4 py-2.5 rounded-lg text-sm text-gray-500 hover:text-white hover:bg-white/5 transition-all flex items-center gap-3"
                  >
                    <s.icon className="w-4 h-4" />
                    {s.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t border-white/5">
                <a href={LINKS.XM_DEMO} target="_blank" rel="noopener noreferrer" className="btn-primary w-full py-3 text-sm">
                   Empezar Hoy
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8 space-y-6 md:space-y-8">
            {SECTIONS.map((section, i) => (
              <motion.section 
                key={section.id} 
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-10 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-display font-bold">{section.title}</h2>
                </div>
                <div className="prose prose-invert prose-p:text-gray-400 prose-p:font-light prose-p:leading-relaxed max-w-none">
                  <p>{section.content}</p>
                </div>
                
                {section.id === 'que-es-broker' && (
                  <div className="mt-8 p-6 bg-brand-gold/5 border border-brand-gold/20 rounded-xl">
                    <h5 className="text-brand-gold font-black uppercase text-[10px] tracking-widest mb-3">Recomendación Directa:</h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed italic font-bold mb-4 text-center uppercase tracking-[0.05em]">"Un buen broker no solo procesa tus órdenes, protege tu capital mediante regulaciones internacionales estrictas."</p>
                    <a href={LINKS.XM_HOME} target="_blank" rel="noopener noreferrer" className="text-xs font-black uppercase tracking-widest text-brand-blue flex items-center gap-2 hover:gap-4 transition-all">
                      Conoce XM Broker <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </motion.section>
            ))}

            <section className="glass-card p-10 bg-brand-blue/5 border-brand-blue/20 text-center">
               <HelpCircle className="w-12 h-12 text-brand-blue mx-auto mb-6" />
               <h3 className="text-2xl font-display font-bold mb-4">¿Tienes más dudas?</h3>
               <p className="text-gray-400 font-light mb-8 max-w-lg mx-auto">Nuestro equipo y comunidad están listos para ayudarte. No te quedes con la duda, el trading se aprende preguntando.</p>
               <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="btn-secondary px-12 py-4">
                  Entrar al Discord
               </a>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
