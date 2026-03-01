// App.tsx - ВЕРСИЯ С lazy (как у всех остальных страниц)
import { useEffect, useState, Suspense, lazy } from "react";
import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";

// ✅ ВЕРНУЛИ lazy для CasesPage как у всех остальных
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const FeaturesPage = lazy(() => import("@/pages/features"));
const CoreBenefits = lazy(() => import("@/pages/CoreBenefits"));
const IndustrySolutions = lazy(() => import("@/pages/IndustrySolutions"));
const TermsPage = lazy(() => import("@/pages/terms"));
const PrivacyPage = lazy(() => import("@/pages/privacy"));
const HowItWorks = lazy(() => import("@/pages/how-it-works"));
const CasesPage = lazy(() => import("@/pages/cases")); // ✅ lazy как было

import { AnimatedBackground } from "./components/AnimatedBackground";
import { CustomCursor } from "./components/ui/custom-cursor";

function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#020617] overflow-hidden"
    >
      {/* ... прелоадер без изменений ... */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-[2px] bg-primary/40 shadow-[0_0_20px_#f97316] animate-[scan_2s_ease-in-out_infinite]" />
      </div>
      <div className="relative z-10 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <div className="w-2 h-2 bg-primary animate-pulse" />
          <h1 className="font-display text-4xl font-bold text-white uppercase tracking-[0.2em]">
            Подготовка <span className="text-primary text-glow">интерфейса</span>
          </h1>
        </div>
        <div className="font-tech text-[10px] text-primary/60 uppercase tracking-[0.4em] mb-8">
          Пожалуйста, подождите...
        </div>
        <div className="w-64 h-[2px] bg-white/5 relative mx-auto">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_#f97316]" 
          />
        </div>
      </div>
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/20" />
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-primary/20" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-primary/20" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-primary/20" />
    </motion.div>
  );
}

function AppRouter() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {loading && <Preloader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      <CustomCursor />
      <AnimatedBackground />

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <Suspense fallback={<div className="flex items-center justify-center h-screen text-white">Загрузка...</div>}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/features" component={FeaturesPage} />
            <Route path="/core-benefits" component={CoreBenefits} />
            <Route path="/industry-solutions" component={IndustrySolutions} />
            <Route path="/terms" component={TermsPage} />
            <Route path="/privacy" component={PrivacyPage} />
            <Route path="/how-it-works" component={HowItWorks} />
            <Route path="/cases" component={CasesPage} /> {/* ✅ точно как все остальные */}
          </Switch>
        </Suspense>
      </motion.main>
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router hook={useHashLocation}>
        <TooltipProvider>
          <AppRouter />
        </TooltipProvider>
      </Router>
    </QueryClientProvider>
  );
}
