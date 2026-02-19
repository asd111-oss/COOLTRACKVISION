function Preloader() {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(false), 2200);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: "circOut" } 
            }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#020617]"
          >
            <div className="relative p-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Более мягкий надзаголовок */}
                <h2 className="font-tech text-primary text-[10px] uppercase tracking-[0.4em] mb-2 opacity-60">
                  Подготовка интерфейса
                </h2>
                {/* Основной заголовок */}
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                  ЗАГРУЗКА <span className="text-primary" style={{ textShadow: '0 0 15px rgba(255,165,0,0.5)' }}>AI</span>
                </h1>
              </motion.div>
  
              {/* Линия сканирования (оставляем, она выглядит как считывание данных) */}
              <motion.div 
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatDelay: 0.2
                }}
                className="absolute left-0 w-full h-[2px] bg-primary/60 shadow-[0_0_20px_rgba(255,165,0,0.8)] z-10"
              />
  
              {/* Уголки */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30" />
            </div>
  
            {/* Простая подпись внизу */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 font-tech text-[9px] text-slate-500 uppercase tracking-[0.3em]"
            >
              Пожалуйста, подождите...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }