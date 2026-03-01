import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Плавность (spring) для основного ядра
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Движение мыши
    const moveMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Глобальная проверка наведения (делегирование событий)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Если под мышкой ссылка, кнопка или элемент с классом cursor-pointer
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block overflow-hidden">
      {/* 1. Внешнее пульсирующее кольцо */}
      <motion.div
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovered ? 80 : 40,
          height: isHovered ? 80 : 40,
          borderColor: isHovered ? "#f97316" : "rgba(255, 255, 255, 0.2)",
          borderStyle: isHovered ? "solid" : "dashed",
          rotate: isHovered ? 90 : 0
        }}
        transition={{ 
          rotate: { duration: 0.5 },
          width: { type: "spring", stiffness: 300, damping: 20 },
          height: { type: "spring", stiffness: 300, damping: 20 }
        }}
        className="absolute border rounded-full transition-colors duration-300"
      />

      {/* 2. Центральная точка-прицел */}
      <motion.div
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? "#ffffff" : "#f97316"
        }}
        className="absolute w-1.5 h-1.5 rounded-full shadow-[0_0_10px_#f97316]"
      />

      {/* 3. Плавающие данные (HUD) */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        animate={{
          x: isHovered ? 45 : 32, // Чуть отодвигаем HUD, когда кольцо расширяется
          y: 0
        }}
        className="absolute ml-0 mt-2 flex flex-col gap-0.5 pointer-events-none"
      >
        <div className="flex gap-2 items-center">
          <span className="text-[8px] font-mono text-primary/60 uppercase">Coord:</span>
          <span className="text-[8px] font-mono text-white/80">
            {Math.round(mousePosition.x)},{Math.round(mousePosition.y)}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-[8px] font-mono text-primary/60 uppercase">Status:</span>
          <motion.span 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[8px] font-mono text-white/80"
          >
            {isHovered ? "INTERACTION_READY" : "SYSTEM_IDLE"}
          </motion.span>
        </div>
      </motion.div>
      
      {/* 4. Направляющие линии */}
      <motion.div 
        style={{ x: cursorX }} 
        animate={{ opacity: isHovered ? 0.2 : 0.05 }}
        className="absolute top-0 bottom-0 w-px bg-primary" 
      />
      <motion.div 
        style={{ y: cursorY }} 
        animate={{ opacity: isHovered ? 0.2 : 0.05 }}
        className="absolute left-0 right-0 h-px bg-primary" 
      />
    </div>
  );
}