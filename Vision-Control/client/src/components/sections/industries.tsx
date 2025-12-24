import React, { useState, useRef, useEffect, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import { Factory, Building, ShoppingBag, Coffee, Car, Fuel } from "lucide-react";

const industries = [
  { id: "industry", title: "Промышленность", description: "Контроль производственных процессов и безопасность персонала.", icon: Factory, image: "/new-images/industry.png", video: "/videos/industry.mp4" },
  { id: "construction", title: "Строительство", description: "Наблюдение за объектами и контроль доступа.", icon: Building, image: "/new-images/construction.png", video: "/videos/construction.mp4" },
  { id: "retail", title: "Ритейл", description: "Анализ покупательского потока и контроль выкладки.", icon: ShoppingBag, image: "/new-images/retail.png", video: "/videos/retail.mp4" },
  { id: "horeca", title: "HoReCa", description: "Оптимизация обслуживания гостей и контроль качества.", icon: Coffee, image: "/new-images/HORECA.png", video: "/videos/horeca.mp4" },
  { id: "logistics", title: "Логистика", description: "Мониторинг складов и отслеживание транспорта.", icon: Car, image: "/new-images/logistics.jpeg", video: "/videos/logistics.mp4" },
  { id: "gas-station", title: "АЗС", description: "Контроль заправок и предотвращение нарушений.", icon: Fuel, image: "/new-images/fuel.jpeg", video: "/videos/fuel.mp4" },
];

export function Industries() {
  const [activeId, setActiveId] = useState<string>(industries[0].id);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  return (
    <section id="industries" className="py-24 bg-transparent relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-primary font-tech uppercase tracking-widest text-xs mb-3">Отрасли применения</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight uppercase">РЕШЕНИЯ <br /><span className="text-slate-500">ДЛЯ ЛЮБОГО БИЗНЕСА</span></h3>
        </div>

        {/* ДЕСКТОП: Оставляем как было (сетка 12 колонок) */}
        <div className="hidden md:grid md:grid-cols-12 gap-8">
           {/* ... тут твой код для десктопа (Menu + Card) ... */}
        </div>

        {/* МОБИЛКА: ГОРИЗОНТАЛЬНЫЙ СКРОЛЛ + АВТО-ВИДЕО */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-4">
          {industries.map((industry) => (
            <div key={industry.id} className="min-w-[85vw] snap-center">
              <div className="relative border border-white/5 rounded-lg overflow-hidden bg-[#020617]">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <video src={industry.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                  <div className="absolute top-3 left-3 w-8 h-8 border border-primary/40 bg-black/40 backdrop-blur-md flex items-center justify-center rounded-sm">
                    <industry.icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-display font-bold text-white mb-2">{industry.title}</h4>
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
