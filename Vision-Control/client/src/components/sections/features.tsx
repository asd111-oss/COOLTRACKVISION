import { motion } from "framer-motion";
import { BrainCircuit, Eye, ScanFace, ChevronRight } from "lucide-react";
import adapterImg from "@/assets/generated_images/abstract_neural_network_processing_video.png";
import monitorImg from "@/assets/generated_images/factory_floor_with_ar_monitoring_overlay.png";
import faceImg from "@/assets/generated_images/biometric_facial_recognition_interface.png";

const features = [
  { id: "adapter", title: "Транспорт и техника", description: "Номера, въезды/выезды под полным контролем", icon: BrainCircuit, image: adapterImg },
  { id: "monitoring", title: "Обнаружение инцидентов", description: "Система сама ловит нарушения и сразу шлет тревогу", icon: Eye, image: monitorImg },
  { id: "recognition", title: "Трекинг", description: "Face ID для учета времени и местоположения сотрудников", icon: ScanFace, image: faceImg },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative border-t border-border/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20">
          <h2 className="text-primary font-tech uppercase tracking-widest text-sm mb-4">Функциональные возможности</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white max-w-2xl leading-tight">
            ИНТЕЛЛЕКТУАЛЬНЫЙ <br />
            <span className="text-slate-500 uppercase">АНАЛИЗ ДАННЫХ</span>
          </h3>
        </div>

        {/* МОБИЛЬНЫЙ СКРОЛЛ: flex flex-row + overflow-x-auto */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="w-[85vw] min-w-[85vw] md:w-auto md:min-w-0 shrink-0 snap-center"
            >
              <div className="group relative bg-card border border-border/50 rounded-sm overflow-hidden h-full transition-all hover:border-primary/50">
                <div className="relative h-64 overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent z-20" />
                  <div className="absolute top-4 left-4 z-30 w-10 h-10 bg-background/90 border border-primary/30 flex items-center justify-center text-primary">
                    <feature.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 relative z-30 -mt-10">
                  <h4 className="text-xl font-display font-bold mb-3 text-white tracking-tight">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">{feature.description}</p>
                  <div className="flex items-center text-primary font-tech text-xs uppercase tracking-wider">
                    <span>Подробнее</span><ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
