import Marquee from '../../../ui/Marquee';

const words = ['Carry All', 'GAMA', 'TOZO', 'Mercado Libre', 'Falabella', 'Paris', 'Ripley', 'Walmart', 'E-commerce', 'Rebranding'];

export default function Words() {
  return (
    <div className="border-y border-p-line py-[18px] overflow-hidden">
      <Marquee duration="38s" className="text-[clamp(40px,6vw,88px)] font-black [font-stretch:62%] uppercase leading-none whitespace-nowrap">
        {words.map((w) => (
          <span key={w} className="inline-flex items-center gap-10 pr-10"><span>{w}</span><span className="text-acc [font-stretch:100%]">+</span></span>
        ))}
      </Marquee>
    </div>
  );
}
