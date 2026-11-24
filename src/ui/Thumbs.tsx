export default function Thumbs({ srcs, active, onPick, className = '', itemClass }: { srcs: string[]; active: number; onPick: (i: number) => void; className?: string; itemClass: (active: boolean) => string }) {
  return (
    <div className={`flex gap-2 overflow-x-auto ${className}`}>
      {srcs.map((src, i) => (
        <button key={src + i} type="button" aria-label={`Imagen ${i + 1}`} aria-current={i === active} onClick={() => onPick(i)} className={`flex-none p-0 overflow-hidden cursor-pointer ${itemClass(i === active)}`}>
          <img src={src} alt="" className="w-full h-full object-cover block" />
        </button>
      ))}
    </div>
  );
}
