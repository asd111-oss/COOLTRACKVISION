import React, { useState, useRef, useEffect, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import { Factory, Building, ShoppingBag, Coffee, Car, Fuel } from "lucide-react";

const industries = [
  {
    id: "industry",
    title: "Промышленность",
    description: "Контроль производственных процессов, безопасность персонала и мониторинг оборудования. Наша система обеспечивает непрерывный контроль производственных линий, отслеживание соблюдения техники безопасности и автоматический учет рабочего времени.",
    icon: Factory,
    image: "/new-images/industry.png", 
    video: "/videos/industry.mp4",
  },
  {
    id: "construction",
    title: "Строительство",
    description: "Наблюдение за объектами, контроль доступа и учет рабочего времени. Видеоаналитика помогает контролировать строительные площадки, предотвращать несанкционированный доступ и оптимизировать рабочие процессы.",
    icon: Building,
    image: "/new-images/construction.png",
    video: "/videos/construction.mp4",
  },
  {
    id: "retail",
    title: "Ритейл",
    description: "Анализ покупательского потока, контроль выкладки и предотвращение краж. Система анализирует поведение покупателей, контролирует правильность выкладки товаров и мгновенно реагирует на подозрительную активность.",
    icon: ShoppingBag,
    image: "/new-images/retail.png",
    video: "/videos/retail.mp4",
  },
  {
    id: "horeca",
    title: "HoReCa",
    description: "Оптимизация обслуживания гостей, контроль качества и учет посетителей. Платформа помогает оптимизировать работу ресторанов и отелей, контролировать качество обслуживания и анализировать поток посетителей.",
    icon: Coffee,
    image: "/new-images/HORECA.png",
    video: "/videos/horeca.mp4",
  },
  {
    id: "logistics",
    title: "Логистика",
    description: "Мониторинг складов, контроль погрузки-разгрузки и отслеживание транспорта. Система обеспечивает полный контроль логистических процессов, отслеживание транспорта и оптимизацию складских операций.",
    icon: Car,
    image: "/new-images/logistics.jpeg",
    video: "/videos/logistics.mp4",
  },
  {
    id: "gas-station",
    title: "АЗС",
    description: "Контроль заправок, безопасность и предотвращение нарушений. Видеоаналитика обеспечивает безопасность на АЗС, контролирует процесс заправки и предотвращает нарушения правил эксплуатации.",
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
    <section id="industries" className="py-24 bg-background relative border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="text-primary font-tech uppercase tracking-widest text-sm mb-4">Отрасли применения</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground max-w-2xl">
            РЕШЕНИЯ ДЛЯ <br />
            <span className="text-muted-foreground">ЛЮБОГО БИЗНЕСА</span>
          </h3>
        </div>

        <div className="hidden md:grid md:grid-cols-12 gap-8">
          <div className="col-span-3">
            <div className="sticky top-20 space-y-6">
              {industries.map((industry) => {
                const isActive = activeId === industry.id;
                return (
                  <motion.button
                    key={industry.id}
                    onClick={() => scrollToCard(industry.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-sm transition-all duration-300 ${
                      isActive
                        ? "bg-card border border-primary/50 text-primary"
                        : "bg-card/50 border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 bg-background/90 backdrop-blur border flex items-center justify-center rounded-sm transition-colors ${
                      isActive ? "border-primary/50" : "border-primary/20"
                    }`}>
                      <industry.icon className={`w-6 h-6 transition-colors ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <span className="font-display font-semibold text-sm text-left">{industry.title}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="col-span-9 space-y-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={index}
                ref={(el: HTMLDivElement | null) => {
                  cardRefs.current[industry.id] = el;
                }}
                onInView={() => setActiveId(industry.id)}
              />
            ))}
          </div>
        </div>

        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
            {industries.map((industry, index) => (
              <div key={industry.id} className="snap-center shrink-0 w-[85%] last:mr-4">
                <IndustryCard
                  industry={industry}
                  index={index}
                  onInView={() => setActiveId(industry.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface IndustryCardProps {
  industry: typeof industries[0];
  index: number;
  onInView: () => void;
}

const IndustryCard = forwardRef<HTMLDivElement, IndustryCardProps>(
  ({ industry, index, onInView }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const isInView = useInView(cardRef, {
      margin: "-40% 0px -40% 0px",
      once: false,
    });

    useEffect(() => {
      if (isInView) {
        onInView();
      }
    }, [isInView, onInView]);

    useEffect(() => {
      if (typeof ref === "function") {
        ref(cardRef.current);
      } else if (ref && 'current' in ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = cardRef.current;
      }
    }, [ref]);

    return (
      <div
        ref={cardRef}
        className="bg-card border border-border/50 rounded-sm overflow-hidden group"
        onMouseEnter={() => {
          setIsHovered(true);
          videoRef.current?.play().catch(() => {});
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          videoRef.current?.pause();
        }}
      >
        <div className="grid md:grid-cols-2">
          <div className="p-8 flex flex-col justify-center">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm mb-6">
              <industry.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-2xl font-display font-bold mb-4">{industry.title}</h4>
            <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
          </div>
          <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted">
            <img
              src={industry.image}
              alt={industry.title}
              className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            />
            <video
              ref={videoRef}
              src={industry.video}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </div>
      </div>
    );
  }
);

IndustryCard.displayName = "IndustryCard";
