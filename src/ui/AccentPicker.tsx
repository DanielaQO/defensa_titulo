export default function AccentPicker({ options, value, onChange, className = '' }: { options: string[]; value: string; onChange: (c: string) => void; className?: string }) {
  return (
    <div className={`fixed bottom-4 left-4 z-[95] flex gap-2 p-2 rounded-full bg-black/60 backdrop-blur ${className}`} role="group" aria-label="Color de acento">
      {options.map((c) => (
        <button key={c} type="button" aria-label={`Acento ${c}`} aria-pressed={c === value} onClick={() => onChange(c)}
          className={`w-6 h-6 rounded-full cursor-pointer border-2 ${c === value ? 'border-white' : 'border-transparent'}`} style={{ background: c }} />
      ))}
    </div>
  );
}
