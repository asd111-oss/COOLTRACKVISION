import { motion } from "framer-motion";
import { Link } from "wouter"; // ← ТОЛЬКО ЭТО ДОБАВИЛИ
import { BrainCircuit, Eye, ScanFace, ChevronRight } from "lucide-react";

const features = [
  {
    id: "adapter",
    title: "Транспорт и техника",
    description: "Номера, въезды/выезды под полным контролем",
    icon: BrainCircuit,
    image: "/assets/abstract_neural_network_processing_video-BUyYZTlK.png",
  },
  {
    id: "monitoring",
    title: "Обнаружение инцидентов",
    description: "Система сама ловит нарушения и сразу шлет тревогу",
    icon: Eye,
    image: "/assets/factory_floor_with_ar_monitoring_overlay-BupMrbS_.png",
  },
  {
    id: "recognition",
    title: "Трекинг",
    description: "Face ID для учета времени и местоположения сотрудников",
    icon: ScanFace,
    image: "/assets/biometric_facial_recognition_interface-DnGbMEFo.png",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20">
          <h2 className="text-primary font-tech uppercase tracking-widest text-sm mb-4">Функциональные возможности</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white max-w-2xl leading-tight">
            ИНТЕЛЛЕКТУАЛЬНЫЙ <br />
            <span className="text-slate-500 uppercase">АНАЛИЗ ДАННЫХ</span>
          </h3>
        </div>

        <div className="!flex !flex-row md:!grid md:grid-cols-3 gap-10 overflow-x-auto md:overflow-visible pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {features.map((feature) => (
            <div key={feature.id} className="w-[80vw] min-w-[80vw] md:w-auto md:min-w-0 shrink-0 snap-center md:px-2">
              <div className="group relative bg-[#020617] border border-white/10 rounded-sm overflow-hidden h-full transition-all hover:border-primary/50">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  {/* ЭФФЕКТ ОМБРЕ (Градиент) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent z-10" />
                  
                  {/* Иконка поверх картинки */}
                  <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-[#020617]/80 border border-primary/20 flex items-center justify-center text-primary backdrop-blur-sm">
                    <feature.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 relative z-20 -mt-16">
                  <h4 className="text-xl font-display font-bold mb-3 text-white tracking-tight">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">{feature.description}</p>
                  
                  {/* ← ТОЛЬКО ЗДЕСЬ ДОБАВИЛИ Link */}
                  <Link href="/features">
                    <div className="flex items-center text-primary font-tech text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-white transition-colors cursor-pointer">
                      <span>Подробнее</span><ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
