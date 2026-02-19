import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/high_tech_control_room_with_data_overlays.png";

// Компонент для "Цели" (рамка захвата)
const DetectionTarget = ({ id, x, y }: { id: number; x: number; y: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
      transition={{ duration: 2.5, times: [0, 0.1, 0.9, 1] }}
      className="absolute w-24 h-24 pointer-events-none z-10 border border-primary/30"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-primary" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-primary" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute -top-5 left-0 text-[10px] font-mono text-primary bg-black/50 px-1"
      >
        ID: {4000 + id} <br/> CONF: 99%
      </motion.div>
    </motion.div>
  );
};

export function Hero() {
  const [targets, setTargets] = useState<{id: number, x: number, y: number}[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newId = Date.now();
      const newTarget = {
        id: newId,
        x: Math.random() * 80 + 10, 
        y: Math.random() * 60 + 10, 
      };
      
      setTargets(prev => [...prev, newTarget]);

      setTimeout(() => {
        setTargets(prev => prev.filter(t => t.id !== newId));
      }, 2500);
    }, 1200); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Пульт управления" 
          className="w-full h-full object-cover opacity-50 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
        
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)', 
               backgroundSize: '40px 40px',
               maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
             }} 
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence>
          {targets.map(target => (
            <DetectionTarget key={target.id} id={target.id} x={target.x} y={target.y} />
          ))}
        </AnimatePresence>
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center md:text-left">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50"
          >
            Цифровой управляющий
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-light leading-relaxed"
          >
            <span className="text-foreground font-semibold">Инновационная AI-платформа видеоаналитики</span>     
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* ИЗМЕНЕНИЕ ТУТ: Обернули кнопку в ссылку */}
            <a 
              href="https://app.cooltrackvision.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-tech uppercase tracking-wider text-lg h-14 px-8 rounded-none">
                Демо  
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block z-10">
        <div className="flex flex-col items-end gap-2 text-primary/50 font-mono text-xs">
          <div>СИСТ.СТАТУС: ОНЛАЙН</div>
          <div>НАРУШЕНИЯ: АНАЛИЗИРУЮТСЯ</div>
          <div>РЕЖИМ: РЕКОМЕНДАЦИИ ON</div>
        </div>
      </div>
    </section>
  );
}