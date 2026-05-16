import React from 'react';
import { ShieldCheck, FileText, AlertTriangle, Scale } from 'lucide-react';
import SEO from '../components/SEO';

interface LegalProps {
  type: 'privacy' | 'terms' | 'risk';
}

export default function Legal({ type }: LegalProps) {
  const content = {
    privacy: {
      title: 'Política de Privacidad',
      icon: ShieldCheck,
      sections: [
        {
          h: '1. Recolección de Datos',
          p: 'Aprende Trading no solicita datos financieros directos. Los datos proporcionados para el acceso a la comunidad o asesorías se manejan bajo estrictos protocolos de confidencialidad.'
        },
        {
          h: '2. Uso de Cookies',
          p: 'Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y rastreo de afiliación con el broker XM.'
        },
        {
          h: '3. Terceros',
          p: 'No compartimos tu información con terceros ajenos a los servicios técnicos necesarios para el funcionamiento de este portal informativo.'
        }
      ]
    },
    terms: {
      title: 'Términos y Condiciones',
      icon: Scale,
      sections: [
        {
          h: '1. Propósito Informativo',
          p: 'Aprende Trading es un portal 100% informativo y de guía para principiantes. No somos una academia formal, gestores de capital ni asesores financieros.'
        },
        {
          h: '2. Independencia',
          p: 'Este sitio es independiente de XM y de la Academia Slange Trading. Recomendamos estos servicios por su calidad, pero no somos responsables de sus operaciones externas.'
        },
        {
          h: '3. Propiedad Intelectual',
          p: 'Todo el contenido gráfico y textual de Aprende Trading está protegido y no puede ser redistribuido sin autorización.'
        }
      ]
    },
    risk: {
      title: 'Descargo de Responsabilidad',
      icon: AlertTriangle,
      sections: [
        {
          h: 'Advertencia Crítica',
          p: 'El trading en mercados financieros internacionales (Forex, Metales, Índices, Cripto) conlleva un elevado grado de riesgo para su capital. Existe la posibilidad de perder parte o la totalidad de sus fondos invertidos.'
        },
        {
          h: 'Responsabilidad Individual',
          p: 'Cada usuario es responsable único de sus decisiones operativas. Aprende Trading proporciona guías informativas que no deben interpretarse como sugerencias directas de inversión.'
        },
        {
          h: 'Resultados Históricos',
          p: 'Los rendimientos pasados no garantizan resultados futuros. El éxito de otros miembros de la comunidad Discord no asegura su éxito personal.'
        }
      ]
    }
  };

  const active = content[type];

  return (
    <div className="pt-28 pb-24 px-6">
      <SEO 
        title={`${active.title} - Aprende Trading`} 
        description={`Página legal sobre ${active.title.toLowerCase()} en Aprende Trading`}
      />
      <div className="container-width max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 mb-10 md:mb-12">
           <div className="w-12 h-12 bg-white/5 rounded-xl flex shrink-0 items-center justify-center text-brand-blue">
              <active.icon className="w-6 h-6" />
           </div>
           <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">{active.title}</h1>
        </div>

        <div className="space-y-12 bg-white/5 border border-white/5 p-10 rounded-2xl">
           {active.sections.map((s, i) => (
             <div key={i} className="space-y-4">
                <h3 className="text-lg font-display font-bold text-white border-b border-white/5 pb-2 inline-block">{s.h}</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                   {s.p}
                </p>
             </div>
           ))}
        </div>

        <div className="mt-20 p-8 border border-white/5 rounded-xl text-center">
           <p className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-loose">
              Última actualización: Mayo 2026 • Aprende Trading Portal
           </p>
        </div>
      </div>
    </div>
  );
}
