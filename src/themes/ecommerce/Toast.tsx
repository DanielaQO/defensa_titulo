export default function Toast({ text, on }: { text: string; on: boolean }) {
  return (
    <div aria-live="polite" className="fixed left-1/2 bottom-6 z-[90] transition duration-[400ms] ease-expo bg-e-ink text-white py-[14px] px-[18px] text-sm font-semibold flex gap-[10px] items-center pointer-events-none"
      style={{ transform: on ? 'translate(-50%,0)' : 'translate(-50%,20px)', opacity: on ? 1 : 0 }}>
      <span className="w-2 h-2 rounded-full bg-acc" />{text}
    </div>
  );
}
