import { scrollToId } from '../../../lib/scroll';

const lines = ['Informe', 'de práctica', 'laboral.'];
const lbl = 'text-xs text-p-muted uppercase tracking-[0.08em] mb-[6px]';
const val = 'text-[17px] font-semibold';

export default function Hero({ loaded }: { loaded: boolean }) {
  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-end pt-[120px] px-7 pb-7 relative">
      <div className="flex flex-wrap gap-x-10 gap-y-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-p-muted mb-7">
        <span>Presentación de título</span>
        <span>Técnico en Diseño Digital y Publicitario</span>
      </div>
      <h1 className="m-0 font-black [font-stretch:62%] uppercase text-[clamp(72px,16.5vw,280px)] leading-[0.82] tracking-[-0.015em]">
        {lines.map((t, i) => (
          <span key={t} className="block overflow-hidden pb-[0.02em]">
            <span className={`block transition-transform duration-[1100ms] ease-expo ${loaded ? 'translate-y-0' : 'translate-y-[105%]'} ${i === 2 ? 'text-acc' : 'text-p-ink'}`}
              style={{ transitionDelay: `${0.08 * i + 0.25}s` }}>{t}</span>
          </span>
        ))}
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 border-t border-p-line mt-9 pt-[18px]">
        <div><div className={lbl}>Estudiante</div><div className={val}>Daniela Esperanza Quiñones Olea</div></div>
        <div><div className={lbl}>Centro de práctica</div><div className={val}>Agupa SpA · Diseño y Marketing</div></div>
        <div><div className={lbl}>Profesora guía</div><div className={val}>Desirée Natalie Alvarado Díaz</div></div>
        <div className="flex items-end justify-between gap-3">
          <div><div className={lbl}>Santiago</div><div className={val}>27/07/2026</div></div>
          <button type="button" onClick={() => scrollToId('introduccion')} className="cursor-pointer text-[13px] font-bold uppercase tracking-[0.1em] flex gap-2 items-center">Scroll <span className="inline-block animate-bob">↓</span></button>
        </div>
      </div>
    </section>
  );
}
