import React, { useState, useRef, useEffect, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import { Factory, Building, ShoppingBag, Coffee, Car, Fuel } from "lucide-react";

const industries = [
  { id: "industry", title: "Промышленность", description: "Контроль производственных процессов и безопасность персонала.", icon: Factory, video: "/videos/industry.mp4" },
  { id: "construction", title: "Строительство", description: "Наблюдение за объектами и контроль доступа.", icon: Building, video: "/videos/construction.mp4" },
  { id: "retail", title: "Ритейл", description: "Анализ покупательского потока и контроль выкладки.", icon: ShoppingBag, video: "/videos/retail.mp4" },
  { id: "horeca", title: "HoReCa", description: "Оптимизация обслуживания гостей и контроль качества.", icon: Coffee, video: "/videos/horeca.mp4" },
  { id: "logistics", title: "Логистика", description: "Мониторинг складов и отслеживание транспорта.", icon: Car, video: "/videos/logistics.mp4" },
  { id: "gas-station", title: "АЗС", description: "Контроль заправок и безопасность.", icon: Fuel, video: "/videos/fuel.mp4" },
];

export function Industries() {
  const [activeId, setActiveId] = useState<string>(industries[0].id);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToCard = (id: string) => {
    const card = cardRefs.current[id];
    if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="industries" className="py-24 bg-transparent relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-primary font-tech uppercase tracking-widest text-xs mb-3">Отрасли применения</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white max-w-xl leading-tight uppercase">
            РЕШЕНИЯ <br /><span className="text-slate-500">ДЛЯ ЛЮБОГО БИЗНЕСА</span>
          </h3>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-12 gap-8">
          <div className="col-span-3">
            <div className="sticky top-28 space-y-3">
              {industries.map((industry) => (
                <button key={industry.id} onClick={() => scrollToCard(industry.id)} className={`w-full flex items-center gap-3 p-3 rounded-sm border transition-all ${activeId === industry.id ? "bg-white/5 border-primary/60 text-white" : "border-white/5 text-slate-500"}`}>
                  <div className="w-8 h-8 border border-white/10 flex items-center justify-center rounded-sm"><industry.icon className="w-4 h-4" /></div>
                  <span className="font-tech font-bold uppercase text-[10px]">{industry.title}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-9 space-y-10">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} ref={(el) => { cardRefs.current[industry.id] = el; }} onInView={() => setActiveId(industry.id)} />
            ))}
          </div>
        </div>

        {/* MOBILE: В РЯД + АВТО-ВИДЕО */}
        <div className="md:hidden flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-6">
          {industries.map((industry) => (
            <div key={industry.id} className="w-[85vw] min-w-[85vw] shrink-0 snap-center">
              <div className="relative border border-white/5 rounded-lg overflow-hidden bg-[#020617]">
                <div className="relative aspect-video w-full">
                  <video 
                    src={industry.video} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent z-10" />
                  <div className="absolute top-3 left-3 w-8 h-8 border border-primary/40 bg-black/40 backdrop-blur-md flex items-center justify-center rounded-sm z-20">
                    <industry.icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-display font-bold text-white mb-2 tracking-tight">{industry.title}</h4>
                  <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-3">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const IndustryCard = forwardRef<HTMLDivElement, { industry: any, onInView: () => void }>(
  ({ industry, onInView }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { margin: "-45% 0px -45% 0px" });
    useEffect(() => { if (isInView) onInView(); }, [isInView]);
    useEffect(() => { if (typeof ref === "function") ref(cardRef.current); else if (ref) (ref as any).current = cardRef.current; }, [ref]);

    return (
      <div ref={cardRef} className="relative border border-white/5 rounded-lg overflow-hidden transition-all duration-500 hover:border-primary/40 bg-[#020617]">
        <div className="relative aspect-[16/6] w-full">
          <video 
            src={industry.video} 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent z-10" />
        </div>
        <div className="relative z-20 p-6 mt-[-25px]">
          <h4 className="text-2xl font-display font-bold text-white mb-2">{industry.title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">{industry.description}</p>
        </div>
      </div>
    );
  }
);
