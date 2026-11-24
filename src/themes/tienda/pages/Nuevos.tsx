import { useState } from 'react';
import { glPairs, glNew, glOld } from '../../../data/glasgow';
import { banners, videos } from '../../../data/media';
import { useGallery } from '../../../hooks/useGallery';
import BeforeAfter from '../../../ui/BeforeAfter';
import { FadeSlides } from '../FadeSlider';
import { useZoom } from '../nav';

const eyebrow = 'text-[13px] font-extrabold text-t-red';
const h3 = 'm-0 text-[clamp(26px,3vw,38px)] font-black tracking-[-0.03em] leading-[1.05]';
const pill = 'absolute top-3.5 text-xs font-extrabold py-1.5 px-[11px] rounded-full text-t-cream pointer-events-none';
const arrow = 'absolute top-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-[21px] border-0 bg-[rgba(255,247,234,.92)] text-t-ink text-lg font-extrabold cursor-pointer z-[2]';
const tabs: [string, string][] = [['new', 'Ahora · 7'], ['old', 'Antes · 5']];

export default function Nuevos() {
  const zoom = useZoom();
  const [gi, setGi] = useState(0);
  const [v, setV] = useState(50);
  const [tab, setTab] = useState('new');
  const b = useGallery(banners.length);
  const cur = glPairs[gi];
  return (
    <div className="max-w-[1280px] mx-auto pt-16 px-6 pb-20">
      <div className="flex flex-wrap gap-8 items-end justify-between mb-7">
        <div className="max-w-[640px]">
          <div className={`${eyebrow} mb-2`}>Caso destacado · Carry All</div>
          <h2 className="mt-0 mx-0 mb-3 text-[clamp(32px,4vw,56px)] font-black tracking-[-0.035em] leading-none">Carrito de compras <span className="text-t-red">Glasgow</span></h2>
          <p className="m-0 text-base leading-[1.6] text-t-body text-pretty">El mismo producto, antes y después. El pack original usaba fondo blanco e íconos de línea; la versión nueva lleva el carrito a escenas de uso reales, con titulares más grandes, círculos de detalle y flechas que guían la lectura.</p>
        </div>
        <div className="flex gap-7">
          <div><div className="text-4xl font-black leading-none">5</div><div className="text-[13px] font-semibold text-t-muted">piezas antes</div></div>
          <div><div className="text-4xl font-black leading-none text-t-red">7</div><div className="text-[13px] font-semibold text-t-muted">piezas ahora</div></div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 mb-5">
        <div className="flex-[1.3_1_420px] min-w-0">
          <BeforeAfter before={cur.before} after={cur.after} value={v} onChange={setV}
            className="aspect-square rounded-3xl bg-white" lineClass="bg-t-red"
            handle={<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-3xl bg-t-red text-t-cream flex items-center justify-center text-base font-black shadow-[0_6px_18px_rgba(0,0,0,.25)]">‹ ›</div>}>
            <span className={`${pill} left-3.5 bg-t-ink`}>ANTES · Práctica</span>
            <span className={`${pill} right-3.5 bg-t-red`}>AHORA</span>
          </BeforeAfter>
          <div className="text-[13px] text-t-muted mt-2.5 text-center">Arrastra sobre la imagen para comparar</div>
        </div>
        <div className="flex-[1_1_300px] min-w-0 flex flex-col gap-2">
          <div className="text-sm font-black mb-1">Comparar por pieza</div>
          {glPairs.map((p, i) => (
            <button key={p.old} onClick={() => { setGi(i); setV(50); }} className={`flex items-center gap-3 p-2 rounded-2xl cursor-pointer text-left border-2 text-t-ink ${i === gi ? 'bg-white border-t-red' : 'bg-transparent border-t-line'}`}>
              <span className="flex flex-none">
                <img src={p.before} alt="" className="w-[52px] h-[52px] rounded-[10px] object-cover block border-2 border-t-cream" />
                <img src={p.after} alt="" className="w-[52px] h-[52px] rounded-[10px] object-cover block -ml-3.5 border-2 border-t-cream" />
              </span>
              <span className="flex-[1_1_auto] min-w-0">
                <span className="block text-xs text-t-muted">{p.old}</span>
                <span className="block text-[15px] font-extrabold">→ {p.neu}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap mt-12 mb-4">
        <h3 className="m-0 text-[26px] font-black tracking-[-0.02em]">Pack completo</h3>
        <div className="flex p-1 rounded-full bg-white border-2 border-t-red">
          {tabs.map(([k, label]) => (
            <button key={k} onClick={() => setTab(k)} className={`h-[38px] px-[18px] rounded-full border-0 cursor-pointer text-[13px] font-extrabold ${tab === k ? 'bg-t-red text-t-cream' : 'bg-transparent text-t-red'}`}>{label}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3 mb-20">
        {(tab === 'new' ? glNew : glOld).map((src) => (
          <button key={src} onClick={() => zoom(src)} className="group p-0 border-0 rounded-2xl overflow-hidden cursor-zoom-in aspect-square bg-white">
            <img src={src} alt="" className="w-full h-full object-cover block transition-transform duration-500 ease-expo group-hover:scale-[1.04]" />
          </button>
        ))}
      </div>

      <h2 className="mt-0 mx-0 mb-2 text-center text-[clamp(30px,3.4vw,44px)] font-black tracking-[-0.03em]">Proyectos <span className="text-t-red">nuevos</span></h2>
      <p className="mt-0 mx-0 mb-12 text-center text-[15px] text-t-muted">Trabajos realizados después de la práctica.</p>

      <div className="flex flex-wrap justify-between items-end gap-4 mb-[18px]">
        <div>
          <div className={`${eyebrow} mb-1.5`}>Proyecto 01 · Página web</div>
          <h3 className={h3}>Banners principales de carryall.cl</h3>
        </div>
        <a href="https://carryall.cl/" target="_blank" rel="noopener" className="text-sm font-extrabold text-t-red flex gap-1.5 items-center">Ver sitio en vivo ↗</a>
      </div>
      <div className="rounded-[20px] overflow-hidden bg-t-ink shadow-[0_20px_50px_rgba(30,20,18,.18)] mb-3.5">
        <div className="flex items-center gap-3 py-3 px-4">
          <div className="flex gap-1.5">
            <span className="w-[11px] h-[11px] rounded-md bg-[#ff5f57]" />
            <span className="w-[11px] h-[11px] rounded-md bg-[#febc2e]" />
            <span className="w-[11px] h-[11px] rounded-md bg-[#28c840]" />
          </div>
          <div className="flex-[1_1_auto] max-w-[420px] mx-auto h-7 rounded-lg bg-[#3a2c29] text-[#e9dccb] text-xs font-semibold flex items-center justify-center">carryall.cl</div>
          <div className="w-[51px]" />
        </div>
        <div className="relative aspect-[3840/1400] bg-[#0d1a3a] overflow-hidden">
          <FadeSlides items={banners} i={b.i} />
          <button type="button" aria-label="Anterior" onClick={b.prev} className={`${arrow} left-3.5`}>‹</button>
          <button type="button" aria-label="Siguiente" onClick={b.next} className={`${arrow} right-3.5`}>›</button>
          <div className="absolute left-0 right-0 bottom-3 flex gap-2 justify-center z-[2]">
            {banners.map((x, k) => (
              <button key={x.src} onClick={() => b.set(k)} aria-label={`Banner ${k + 1}`} className={`h-2 rounded border-0 p-0 cursor-pointer bg-t-cream transition-[width] duration-300 ${k === b.i ? 'w-7 opacity-100' : 'w-2 opacity-55'}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-20">
        {banners.map((x, k) => (
          <button key={x.src} onClick={() => b.set(k)} className={`text-left p-2 rounded-[14px] cursor-pointer border-2 bg-white text-t-ink flex flex-col gap-2 ${k === b.i ? 'border-t-red' : 'border-transparent'}`}>
            <div className="aspect-[3840/1400] rounded-lg overflow-hidden bg-t-sand flex items-center justify-center">
              <img src={x.src} alt="" className="w-full h-full object-cover block" />
            </div>
            <div className="py-0 px-1 pb-0.5"><div className="text-xs text-t-muted">Banner {k + 1}</div><div className="text-sm font-extrabold">{x.label}</div></div>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-10 items-center">
        <div className="flex-[1_1_320px] min-w-0">
          <div className={`${eyebrow} mb-1.5`}>Proyecto 02 · Tienda online y redes sociales</div>
          <h3 className={`${h3} mb-3.5`}>Videos de producto</h3>
          <p className="m-0 text-base leading-[1.6] text-t-body">Dos videos promocionales realizados para Carry All, para su tienda online y redes sociales.</p>
        </div>
        <div className="flex-[1.4_1_420px] min-w-0 grid grid-cols-2 gap-4">
          {videos.map((x) => (
            <div key={x.src} className="flex flex-col gap-2.5">
              <div className="aspect-[9/16] rounded-[22px] overflow-hidden bg-t-ink border-[6px] border-t-ink relative">
                <video src={x.src} controls playsInline className="w-full h-full object-cover block rounded-2xl bg-black" />
              </div>
              <div className="text-sm font-extrabold px-1">{x.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
