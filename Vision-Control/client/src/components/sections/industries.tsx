import React, { useState, useRef, useEffect, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import { Factory, Building, ShoppingBag, Coffee, Car, Fuel } from "lucide-react";

const industries = [
  {
    id: "industry",
    title: "Промышленность",
    description: "Контроль производственных процессов, безопасность персонала и мониторинг оборудования. Наша система обеспечивает непрерывный контроль производственных линий.",
    icon: Factory,
    image: "/new-images/industry.png", 
    video: "/videos/industry.mp4",
  },
  {
    id: "construction",
    title: "Строительство",
    description: "Наблюдение за объектами, контроль доступа и учет рабочего времени. Видеоаналитика помогает контролировать строительные площадки и оптимизировать процессы.",
    icon: Building,
    image: "/new-images/construction.png",
    video: "/videos/construction.mp4",
  },
  {
    id: "retail",
    title: "Ритейл",
    description: "Анализ покупательского потока, контроль выкладки и предотвращение краж. Система анализирует поведение покупателей и реагирует на подозрительную активность.",
    icon: ShoppingBag,
    image: "/new-images/retail.png",
    video: "/videos/retail.mp4",
  },
  {
    id: "horeca",
    title: "HoReCa",
    description: "Оптимизация обслуживания гостей, контроль качества и учет посетителей. Платформа помогает контролировать качество обслуживания и анализировать поток посетителей.",
    icon: Coffee,
    image: "/new-images/HORECA.png",
    video: "/videos/horeca.mp4",
  },
  {
    id: "logistics",
    title: "Логистика",
    description: "Мониторинг складов, контроль погрузки-разгрузки и отслеживание транспорта. Система обеспечивает полный контроль логистических процессов и складских операций.",
    icon: Car,
    image: "/new-images/logistics.jpeg",
    video: "/videos/logistics.mp4",
  },
  {
    id: "gas-station",
    title: "АЗС",
    description: "Контроль заправок, безопасность и предотвращение нарушений. Видеоаналитика обеспечивает безопасность на АЗС и контролирует процесс заправки.",
    icon: Fuel,
    image: "/new-images/fuel.jpeg",
    video: "/videos/fuel.mp4",
  },
];

export function Industries() {
  const [activeId, setActiveId] = useState<string>(industries[0].id);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToCard = (id: string) => {
    const card = cardRefs.current[id];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="industries" className="py-24 bg-transparent relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="mb-12">
          <h2 className="text-primary font-tech uppercase tracking-widest text-xs mb-3">Отрасли применения</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white max-w-xl leading-tight uppercase">
            РЕШЕНИЯ <br /> 
            <span className="text-slate-500">ДЛЯ ЛЮБОГО БИЗНЕСА</span>
          </h3>
        </div>

        {/* ДЕСКТОП ВЕРСИЯ */}
        <div className="hidden md:grid md:grid-cols-12 gap-8">
          <div className="col-span-3">
            <div className="sticky top-28 space-y-3">
              {industries.map((industry) => {
                const isActive = activeId === industry.id;
                return (
                  <button
                    key={industry.id}
                    onClick={() => scrollToCard(industry.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-sm transition-all duration-300 border ${
                      isActive
                        ? "bg-white/5 border-primary/60 text-white shadow-[0_0_15px_rgba(249,115,22,0.05)]"
                        : "bg-transparent border-white/5 text-slate-500 hover:border-white/20 hover:text-slate-300"
                    }`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 border flex items-center justify-center rounded-sm ${
                      isActive ? "border-primary/50 bg-primary/10" : "border-white/10"
                    }`}>
                      <industry.icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-current"}`} />
                    </div>
                    <span className="font-tech font-bold uppercase tracking-wider text-[10px] text-left">{industry.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="col-span-9 space-y-10">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                ref={(el) => { cardRefs.current[industry.id] = el; }}
                onInView={() => setActiveId(industry.id)}
              />
            ))}
          </div>
        </div>

        {/* МОБИЛЬНАЯ ВЕРСИЯ: ГОРИЗОНТАЛЬНЫЙ СКРОЛЛ */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-6">
          {industries.map((industry) => (
            <div key={industry.id} className="min-w-[85vw] shrink-0 snap-center">
              <div className="relative border border-white/5 rounded-lg overflow-hidden bg-[#020617] transition-all hover:border-primary/40">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <video 
                    src={industry.video} 
                    autoPlay={true} 
                    muted={true} 
                    loop={true} 
                    playsInline={true} 
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent z-10" />
                  <div className="absolute top-3 left-3 w-8 h-8 border border-primary/40 bg-black/40 backdrop-blur-md flex items-center justify-center rounded-sm z-20">
                    <industry.icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-display font-bold text-white mb-2 tracking-tight">{industry.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{industry.description}</p>
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
    const videoRef = useRef<HTMLVideoElement>(null);

    const isInView = useInView(cardRef, { margin: "-45% 0px -45% 0px" });

    useEffect(() => { if (isInView) onInView(); }, [isInView]);

    useEffect(() => {
      if (typeof ref === "function") ref(cardRef.current);
      else if (ref) (ref as any).current = cardRef.current;
    }, [ref]);

    return (
      <div
        ref={cardRef}
        className="relative border border-white/5 rounded-lg overflow-hidden transition-all duration-500 hover:border-primary/40 group bg-[#020617]"
      >
        <div className="relative aspect-[16/6] w-full overflow-hidden">
          <video
            ref={videoRef}
            src={industry.video}
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent z-10" />
          <div className="absolute top-3 left-3 w-8 h-8 border border-primary/40 bg-black/40 backdrop-blur-md flex items-center justify-center rounded-sm z-20">
            <industry.icon className="w-4 h-4 text-primary" />
          </div>
        </div>
        <div className="relative z-20 p-5 md:p-6 mt-[-25px]">
          <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-2 tracking-tight">{industry.title}</h4>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-3xl">{industry.description}</p>
        </div>
      </div>
    );
  }
);

IndustryCard.displayName = "IndustryCard";
