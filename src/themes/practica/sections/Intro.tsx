import { useEffect, useRef, useState } from 'react';

const introText = 'El presente informe da a conocer el desarrollo de mi práctica profesional en Agupa SpA, enfocada en el área de e-commerce: piezas gráficas y catálogos digitales para Mercado Libre y marcas como Carry All, Gama y Tozo.';
const words = introText.split(' ');
const N = words.length;

export default function Intro() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [t, setT] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect(), vh = window.innerHeight;
      setT(Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.35))));
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <section id="introduccion" className="pt-[18vh] px-7 pb-[14vh]">
      <div className="text-[13px] font-bold uppercase tracking-[0.1em] text-acc mb-8">01 — Introducción</div>
      <p ref={ref} className="m-0 max-w-[1240px] text-[clamp(28px,4.4vw,68px)] leading-[1.08] font-bold tracking-[-0.02em] text-pretty">
        {words.map((w, i) => <span key={i} className="transition-opacity duration-[250ms]" style={{ opacity: Math.max(0.16, Math.min(1, t * (N + 6) - i)) }}>{w} </span>)}
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10 mt-16 max-w-[1240px] text-[18px] leading-[1.6] text-p-soft">
        <p className="m-0 text-pretty">Esta experiencia permitió aplicar conocimientos de diseño y adaptarse a requerimientos reales del entorno laboral, fortaleciendo habilidades técnicas, creativas y de trabajo con lineamientos de marca.</p>
        <p className="m-0 text-pretty">En este informe se presentan las actividades realizadas, el contexto del centro de práctica y los principales aprendizajes obtenidos.</p>
      </div>
    </section>
  );
}
