import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "wouter";
import { 
  Store, Utensils, Factory, Shield, Pizza, Layout, ArrowRight 
} from "lucide-react";

const cases = [
  { 
    id: "01", 
    title: "Сеть ресторанов", 
    description: "AI-контроль гигиены (СанПиН), биометрический учет рабочего времени и мониторинг стандартов обслуживания персонала.", 
    icon: Utensils, 
    image: "/assets/kitchen.png",
    position: "object-center" 
  },
  { 
    id: "02", 
    title: "Продуктовый ритейл", 
    description: "Оптимизация пополнения полок, контроль персонала, снижение хищений и контроль зоны дебаркадера.", 
    icon: Store, 
    image: "/assets/goods.png",
    position: "object-center"
  },
  { 
    id: "03", 
    title: "Производство", 
    description: "Автоматический контроль СИЗ (каски, жилеты), детекция огня/дыма и управление доступом транспорта.", 
    icon: Factory, 
    image: "/assets/production.png",
    position: "object-center"
  },
  { 
    id: "04", 
    title: "Сеть пиццерий", 
    description: "Контроль дисциплины персонала, оптимизация смен на основе очереди и единая аналитика всей сети.", 
    icon: Pizza, 
    image: "/assets/pizzeria.png",
    position: "object-center"
  },
  { 
    id: "05", 
    title: "Строительный и мебельный ритейл", 
    description: "Анализ клиентского пути, мониторинг очередей и повышение доступности товара на больших торговых площадях.", 
    icon: Layout, 
    image: "/assets/retail.png",
    position: "object-center"
  },
  { 
    id: "06", 
    title: "Проект в ОАЭ", 
    description: "Борьба с хищениями в премиальном ритейле, контроль активности сотрудников и адаптация под стандарты безопасности Дубая.", 
    icon: Shield, 
    image: "/assets/Dubai.png",
    position: "object-center"
  }
];

export default function CaseStudiesPinned() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, windowWidth: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (scrollRef.current) {
        setDimensions({
          width: scrollRef.current.scrollWidth,
          windowWidth: window.innerWidth
        });
      }
    };

    const timer = setTimeout(updateDimensions, 200);
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0px", `-${dimensions.width - dimensions.windowWidth + 48}px`]
  );
  
  const springX = useSpring(x, { stiffness: 50, damping: 20, mass: 0.5 });

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-24">
        
        {/* ЗАГОЛОВОК С КНОПКОЙ */}
        <div className="container mx-auto px-6 mb-8 md:mb-12 shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-6">
            <div>
              <h2 className="text-primary font-tech uppercase tracking-[0.3em] text-xs mb-3 font-bold">
                БИБЛИОТЕКА РЕШЕНИЙ
              </h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                Наши <span className="text-slate-500">кейсы</span>
              </h3>
            </div>

            {/* КНОПКА В СТИЛЕ СТРАНИЦЫ КЕЙСОВ */}
            <Link href="/cases">
              <button className="group flex items-center transition-all mb-2">
                <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors">
                  Смотреть детали
                </span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-primary" />
              </button>
            </Link>
          </div>
        </div>

        {/* ГОРИЗОНТАЛЬНАЯ ЛЕНТА */}
        <div className="relative">
          <motion.div 
            ref={scrollRef}
            style={{ x: springX }} 
            className="flex gap-10 md:gap-16 px-6 w-max"
          >
            {cases.map((c) => (
              <div key={c.id} className="relative shrink-0 w-[85vw] md:w-[45vw] lg:w-[38vw]">
                <div className="group relative flex flex-col">
                  
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-tech text-primary text-[10px] font-bold tracking-[0.4em]">
                      {c.id}
                    </span>
                    <div className="h-[1px] w-8 bg-white/10" />
                    <h4 className="text-lg font-display font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                      {c.title}
                    </h4>
                  </div>

                  <div className="relative aspect-[21/7.2] overflow-hidden border border-white/5 bg-slate-900/40 rounded-sm shadow-xl">
                    <motion.img 
                      src={c.image} 
                      alt={c.title}
                      className={`w-full h-full object-cover ${c.position} grayscale group-hover:grayscale-0 transition-all duration-[1.5s] group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-4 left-4 z-20 w-8 h-8 border border-primary/20 bg-[#020617]/80 backdrop-blur-md flex items-center justify-center text-primary">
                      <c.icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-3">
                      {c.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}