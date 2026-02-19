import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 bg-[#02040a] overflow-hidden">
      
      {/* 1. СЕТКА */}
      <div 
        className="absolute inset-0" 
        style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 80%)'
        }}
      />

      {/* 2. Сканирующий луч (Яркий, но четкий) */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        // Убрал blur. Сделал луч тоньше (h-[150px] вместо 300px), но ярче в центре
        className="absolute left-0 w-full h-[150px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent pointer-events-none"
      />

      {/* 3. Виньетка */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#02040a_100%)]" />
    </div>
  );
};
