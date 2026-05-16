import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  BarChart3, 
  Laptop, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  Target, 
  Zap,
  TrendingUp,
  Cpu,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { LINKS } from '../constants';
import SEO from '../components/SEO';

const TOOLS = [
  {
    name: 'XM Broker',
    tag: 'Infraestructura',
    desc: 'Tu aliado regulado para acceder a los mercados. Es el broker que recomendamos para conectar tu MetaTrader y operar de forma segura.',
    features: ['Ejecución ultra rápida', 'Bajos spreads', 'Bonos educativos', 'Regulación internacional'],
    link: LINKS.XM_HOME,
    icon: Globe,
    color: 'text-brand-blue'
  },
  {
    name: 'MetaTrader 5',
    tag: 'Operativa',
    desc: 'La plataforma donde ejecutamos las ideas. Es la terminal estándar de la industria, robusta, rápida y técnica.',
    features: ['Gráficos avanzados', 'Multiplataforma', 'Operativa con un click', 'Historial detallado'],
    link: LINKS.MT5_DOWNLOAD,
    icon: Laptop,
    color: 'text-brand-gold'
  },
  {
    name: 'TradingView',
    tag: 'Análisis',
    desc: 'Donde la magia visual sucede. Gráficos modernos de alta fidelidad para marcar tus zonas y proyecciones.',
    features: ['Análisis en la nube', 'Alertas de precio', 'Comunidad global', 'Indicadores avanzados'],
    link: 'https://www.tradingview.com/',
    icon: BarChart3,
    color: 'text-blue-400'
  },
  {
    name: 'Binance',
    tag: 'Cripto Exchange',
    desc: 'El puente ideal para fondear tu cuenta XM usando criptomonedas (USDT/BTC). Es el exchange líder mundial.',
    features: ['Comprar con tarjeta', 'P2P seguro', 'Transferencias rápidas', 'Bajas comisiones'],
    link: LINKS.BINANCE,
    icon: Target,
    color: 'text-yellow-500'
  }
];

export default function Tools() {
  return (
    <div className="pt-28 pb-24">
      <SEO 
        title="Herramientas de Trading - El Ecosistema Profesional" 
        description="Conoce las mejores herramientas para operar en los mercados financieros: XM Broker, MetaTrader 5, TradingView y Binance."
      />
      {/* Hero Section */}
      <section className="px-6 mb-16 md:mb-24">
        <div className="container-width max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue text-[10px] uppercase tracking-[0.3em] font-black mb-6 md:mb-8 leading-loose"
          >
            Tu Arsenal de Inversor
          </motion.div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[1] md:leading-[0.95]">
            Tu Ecosistema <br /><span className="gradient-text">Técnico</span>
          </h1>
          <p className="text-gray-400 font-light text-base md:text-xl leading-relaxed max-w-2xl mx-auto italic font-medium px-4">
            "No necesitas cientos de indicadores. Solo herramientas sólidas, confiables y bien configuradas para empezar a ver el mercado con claridad profesional."
          </p>
        </div>
      </section>

        {/* Tools Grid */}
      <div className="container-width px-6">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
           {TOOLS.map((tool, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass-card p-6 sm:p-8 lg:p-10 flex flex-col group relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <tool.icon className="w-40 h-40" />
                </div>
                
                <div className="flex justify-between items-start mb-8">
                   <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center ${tool.color} border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                      <tool.icon className="w-8 h-8" />
                   </div>
                   <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">{tool.tag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black mb-3 md:mb-4 uppercase tracking-tight">{tool.name}</h3>
                <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed mb-6 md:mb-8 max-w-sm">
                   {tool.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12">
                   {tool.features.map((f, k) => (
                     <div key={k} className="flex gap-3 text-[9px] md:text-[10px] text-gray-500 font-black uppercase tracking-widest items-center leading-tight">
                        <CheckCircle2 className="w-3 h-3 text-brand-blue" />
                        {f}
                     </div>
                   ))}
                </div>

                <div className="mt-auto">
                   <a 
                     href={tool.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn-gold w-full py-5 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl transition-all group/btn"
                   >
                      Ir al Sitio Oficial <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                   </a>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-12 glass-card p-1 items-center overflow-hidden border-white/5">
           <div className="grid md:grid-cols-12 items-center bg-brand-blue/5">
              <div className="md:col-span-8 p-10 lg:p-16">
                 <div className="flex items-center gap-4 mb-8">
                    <MessageCircle className="w-12 h-12 text-[#5865F2]" />
                    <h3 className="text-4xl font-display font-black tracking-tighter uppercase">Discord: Tu Centro de <br className="hidden sm:block" /> Operaciones</h3>
                 </div>
                 <p className="text-gray-400 font-light text-lg mb-10 max-w-2xl leading-relaxed italic">
                    "La herramienta de comunicación donde enviamos señales, resolvemos dudas técnicas y realizamos las operativas en vivo cada semana."
                 </p>
                 <div className="flex flex-wrap gap-6">
                    <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="btn-primary bg-[#5865F2] hover:bg-[#4752c4] border-none px-12 py-5 text-lg font-black uppercase tracking-widest">
                       Entrar Gratis
                    </a>
                    <div className="px-6 py-5 flex items-center gap-3 bg-white/5 rounded-2xl border border-white/10">
                       <ShieldCheck className="w-6 h-6 text-brand-blue" />
                       <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 leading-tight">Comunidad <br /> Moderada</span>
                    </div>
                 </div>
              </div>
              <div className="md:col-span-4 h-full bg-[#5865F2]/10 border-l border-white/5 flex items-center justify-center p-12 lg:p-20">
                 <div className="w-full aspect-square bg-[#5865F2] rounded-[40px] rotate-6 group flex items-center justify-center shadow-2xl shadow-[#5865F2]/30 group-hover:rotate-0 transition-transform duration-700">
                    <MessageCircle className="w-32 h-32 text-white -rotate-6 group-hover:rotate-0 transition-transform duration-700" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
