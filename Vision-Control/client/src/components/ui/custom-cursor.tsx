import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Плавность (spring) для основного ядра
  const springConfig = { damping: 20, stiffness: 250 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener("mousemove", moveMouse);
    document.querySelectorAll("button, a, .cursor-pointer").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block overflow-hidden">
      {/* 1. Внешнее пульсирующее кольцо */}
      <motion.div
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovered ? 60 : 40,
          height: isHovered ? 60 : 40,
          borderColor: isHovered ? "#f97316" : "rgba(255, 255, 255, 0.2)",
          rotate: 360
        }}
        transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" } }}
        className="absolute border border-dashed rounded-full"
      />

      {/* 2. Центральная точка-прицел */}
      <motion.div
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#f97316]"
      />

      {/* 3. Плавающие данные (HUD) */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="absolute ml-8 mt-2 flex flex-col gap-0.5 pointer-events-none"
      >
        <div className="flex gap-2 items-center">
          <span className="text-[8px] font-mono text-primary/60 uppercase">Coord:</span>
          <span className="text-[8px] font-mono text-white/80">
            {Math.round(mousePosition.x)},{Math.round(mousePosition.y)}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-[8px] font-mono text-primary/60 uppercase">Mode:</span>
          <motion.span 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[8px] font-mono text-white/80"
          >
            {isHovered ? "DETECTED_OBJECT" : "AI_SCANNING"}
          </motion.span>
        </div>
      </motion.div>
      
      {/* 4. Сверхтонкие линии-направляющие (опционально) */}
      <motion.div 
        style={{ x: cursorX }} 
        className="absolute top-0 bottom-0 w-px bg-primary/5" 
      />
      <motion.div 
        style={{ y: cursorY }} 
        className="absolute left-0 right-0 h-px bg-primary/5" 
      />
    </div>
  );
}
