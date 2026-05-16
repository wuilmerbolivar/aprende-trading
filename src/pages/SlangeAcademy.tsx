import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Target, 
  ShieldCheck, 
  Users, 
  Trophy, 
  Cpu, 
  Brain, 
  Smartphone,
  ExternalLink
} from 'lucide-react';
import { LINKS } from '../constants';
import SEO from '../components/SEO';

const OFFERS = [
  { title: 'Educación en trading', icon: Brain },
  { title: 'Clases en vivo', icon: Play },
  { title: 'Operativa en vivo', icon: Zap },
  { title: 'Señales de trading', icon: Trophy },
  { title: 'Psicología del trading', icon: Brain },
  { title: 'Gestión de riesgo', icon: ShieldCheck },
  { title: 'Trading algorítmico', icon: Cpu },
  { title: 'Cuentas de fondeo', icon: Target },
  { title: 'Coaching personalizado', icon: Users },
  { title: 'Marca personal', icon: Smartphone },
  { title: 'Tecnología aplicada', icon: Cpu }
];

export default function SlangeAcademy() {
  return (
    <div className="pt-28 pb-24">
      <SEO 
        title="Academia Slange Trading - Oportunidad de Crecimiento" 
        description="Lleva tu trading al siguiente nivel. Descubre nuestro aliado educativo, con mentorías 24/7 y formación profesional."
      />
      <section className="px-6 mb-16 md:mb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -z-10" />
        
        <div className="container-width max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/20 rounded-full text-brand-gold text-[10px] uppercase tracking-[0.3em] font-black mb-6 md:mb-8 leading-loose"
          >
            Aliado Estratégico de Formación
          </motion.div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-black mb-6 md:mb-8 tracking-tighter uppercase leading-[1] md:leading-[0.95]">
            Academia <br /><span className="text-brand-gold">Slange Trading</span>
          </h1>
          
          <p className="text-gray-400 font-light text-base md:text-xl leading-relaxed max-w-2xl mx-auto italic font-medium px-4">
            "Comunidad educativa de Élite enfocada en trading, desarrollo personal y crecimiento profesional dentro de los mercados financieros."
          </p>
        </div>
      </section>

      <section className="px-6 mb-20 md:mb-32">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tighter uppercase leading-[1] md:leading-[0.95]">
                Formando <span className="text-brand-gold text-4xl sm:text-5xl">Traders</span> <br className="hidden lg:block"/>con propósito
              </h2>
              <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed">
                Slange Trading no es solo un lugar para aprender a leer gráficos. Es un ecosistema integral donde se trabaja la <strong>disciplina</strong>, la <strong>psicología</strong> y la <strong>consistencia</strong>. 
                Preparan a sus estudiantes para construir ingresos sostenibles mediante el conocimiento profundo de los mercados internacionales.
              </p>
              <div className="p-8 bg-brand-gold/5 border border-brand-gold/10 rounded-2xl">
                <p className="text-sm italic text-gray-400 leading-relaxed text-center uppercase tracking-widest font-black">
                  "El trading es 10% técnica y 90% psicología. En Slange entendemos que sin una mentalidad de hierro, la estrategia no sirve de nada."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-4 sm:p-8 text-brand-gold border border-white/5 group hover:border-brand-gold/30 transition-all text-center">
                  <div>
                    <Target className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4" />
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-tight block">Resultados Verificables</span>
                  </div>
                </div>
                <div className="aspect-[4/5] bg-white/5 rounded-2xl flex items-center justify-center p-4 sm:p-8 text-brand-blue border border-white/5 group hover:border-brand-blue/30 transition-all text-center">
                  <div>
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4" />
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-tight block">Mentoría 24/7</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-10 sm:pt-12">
                <div className="aspect-[4/5] bg-white/5 rounded-2xl flex items-center justify-center p-4 sm:p-8 text-brand-gold border border-white/5 group hover:border-brand-gold/30 transition-all text-center">
                  <div>
                    <Cpu className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4" />
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-tight block">Tecnología de Vanguardia</span>
                  </div>
                </div>
                <div className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-4 sm:p-8 text-white border border-white/5 group hover:border-white/20 transition-all text-center">
                  <div>
                    <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4" />
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-tight block">Marca Personal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white/[0.02] border-y border-white/5">
        <div className="container-width px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tighter mb-4">¿Qué ofrecen en <span className="text-brand-gold">Slange?</span></h2>
            <p className="text-gray-500 font-light text-base md:text-lg">Un abanico completo para tu desarrollo como operador profesional.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {OFFERS.map((offer, i) => (
              <div key={i} className="glass-card p-6 border border-white/5 hover:border-brand-gold/30 transition-all flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-gold mb-4">
                  <offer.icon className="w-6 h-6" />
                </div>
                <h4 className="text-[10px] font-black uppercase tracking-widest leading-tight text-white">{offer.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width px-6">
          <div className="max-w-3xl mx-auto text-center space-y-10 md:space-y-12">
            <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tighter leading-tight">
              ¿Por qué los <br className="hidden sm:block" /><span className="text-brand-blue">recomendamos?</span>
            </h2>
            <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed shadow-xl shadow-white/[0.02] px-4">
              En <strong>Aprende Trading</strong> somos exigentes con nuestros aliados. Recomendamos a Slange Trading porque comparten nuestros valores de <strong>transparencia</strong>, <strong>educación honesta</strong> y <strong>acompañamiento real</strong>. No venden esquemas de riqueza rápida, venden una profesión.
            </p>

            <div className="p-6 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl max-w-xl mx-auto">
              <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2 font-display">Beneficio Exclusivo</p>
              <p className="text-sm text-gray-300 leading-relaxed font-medium italic">
                "Si decides inscribirte como alumno, menciona que vienes de <strong>Aprende Trading</strong> y utiliza el código <span className="text-brand-gold text-lg font-black not-italic underline decoration-brand-gold/30">M32JB</span> para recibir un descuento especial en tu membresía."
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="mt-12"
            >
              <a 
                href={LINKS.SLANGE_TRADING} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-gold py-5 md:py-6 px-8 md:px-12 text-sm sm:text-lg md:text-xl font-display font-black uppercase tracking-tighter md:tracking-normal inline-flex items-center gap-3 md:gap-4 group w-full sm:w-auto text-center justify-center"
              >
                Visitar Sitio Oficial Slange Trading <ExternalLink className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>
            
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest italic pt-8 uppercase">
              * Nota: Slange Trading es una academia independiente. Al acceder a sus servicios, estarás bajo sus propios términos y condiciones.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
