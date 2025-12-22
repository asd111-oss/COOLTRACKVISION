import { motion } from "framer-motion";
import { BrainCircuit, Eye, ScanFace, ChevronRight } from "lucide-react";
import adapterImg from "@assets/generated_images/abstract_neural_network_processing_video.png";
import monitorImg from "@assets/generated_images/factory_floor_with_ar_monitoring_overlay.png";
import faceImg from "@assets/generated_images/biometric_facial_recognition_interface.png";

const features = [
  {
    id: "adapter",
    title: "Транспорт и техника",
    description: "Номера, въезды/выезды под полным контролем",
    icon: BrainCircuit,
    image: adapterImg,
  },
  {
    id: "monitoring",
    title: "Обнаружение инцидентов",
    description: "Система сама ловит нарушения и сразу шлет тревогу",
    icon: Eye,
    image: monitorImg,
  },
  {
    id: "recognition",
    title: "Трекинг",
    description: "Face ID для учета времени и местоположения сотрудников",
    icon: ScanFace,
    image: faceImg,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <h2 className="text-primary font-tech uppercase tracking-widest text-sm mb-4">Функциональные возможности</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground max-w-2xl">
            ИНТЕЛЛЕКТУАЛЬНЫЙ <br />
            <span className="text-muted-foreground">АНАЛИЗ ДАННЫХ</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group relative bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-20" />
                
                <div className="absolute top-4 left-4 z-30 w-12 h-12 bg-background/90 backdrop-blur border border-primary/30 flex items-center justify-center text-primary">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-30 -mt-12">
                <h4 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="flex items-center text-primary font-tech text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                  <span>Подробнее</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-16 md:mt-24"
        >
          {/* ИЗМЕНЕНИЕ ЗДЕСЬ: text-center и justify-center */}
          <div className="inline-flex items-center justify-center text-center px-8 py-4 border border-primary/30 bg-primary/5 text-primary text-sm md:text-base font-tech uppercase tracking-widest rounded-sm hover:bg-primary/10 hover:border-primary/60 transition-colors cursor-default max-w-2xl leading-relaxed">
            Все события и процессы становятся основой для аналитики
          </div>
        </motion.div>
      </div>
    </section>
  );
}
