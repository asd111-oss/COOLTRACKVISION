import { useEffect } from "react";
import { Switch, Route, Router, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Импорты страниц
import Home from "@/pages/home";
import About from "@/pages/about"; 
import NotFound from "@/pages/not-found";

import { AnimatedBackground } from "./components/AnimatedBackground";
import { CustomCursor } from "./components/ui/custom-cursor";

// Компонент для автоматической прокрутки вверх при смене страницы
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function AppRouter() {
  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Сбрасываем прокрутку при переходах */}
      <ScrollToTop />
      
      {/* Наш технологичный курсор и фон */}
      <CustomCursor />
      <AnimatedBackground />

      <Switch>
        {/* Главная страница */}
        <Route path="/" component={Home} />
        
        {/* Страница О нас */}
        <Route path="/about" component={About} />
        
        {/* Страница 404 (всегда в конце) */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Оборачиваем всё приложение в Router с поддержкой хэшей (#) */}
      <Router hook={useHashLocation}>
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
