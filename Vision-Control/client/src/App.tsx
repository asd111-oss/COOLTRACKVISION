import { Switch, Route, Router } from "wouter"; // Добавили компонент Router
import { useHashLocation } from "wouter/use-hash-location"; // Подключили работу через #
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { AnimatedBackground } from "./components/AnimatedBackground";

// Переименовали твою функцию в AppRouter, чтобы она не конфликтовала с Router из библиотеки
function AppRouter() {
  return (
    <div className="relative min-h-screen bg-transparent">
      {/* Наш красивый фон */}
      <AnimatedBackground />

      {/* Контент сайта */}
      <Switch>
        <Route path="/" component={Home} />
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
