export function FadeSlides({ items, i }: { items: { src: string; label: string }[]; i: number }) {
  return (
    <>
      {items.map((b, k) => (
        <div key={b.src} className={`absolute inset-0 transition-opacity duration-[600ms] ease-[ease] ${k === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden={k !== i}>
          <img src={b.src} alt={b.label} className="w-full h-full object-cover block" />
        </div>
      ))}
    </>
  );
}
