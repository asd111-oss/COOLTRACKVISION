import { useEffect } from "react";
import { Switch, Route, Router, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/home";
import About from "@/pages/about";
import FeaturesPage from "@/pages/features";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";
import NotFound from "@/pages/not-found";

import { AnimatedBackground } from "./components/AnimatedBackground";
import { CustomCursor } from "./components/ui/custom-cursor";
import { CookieBanner } from "./components/CookieBanner";

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
      <ScrollToTop />
      <CustomCursor />
      <AnimatedBackground />

      <CookieBanner />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
