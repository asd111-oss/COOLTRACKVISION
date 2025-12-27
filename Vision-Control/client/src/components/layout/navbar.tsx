import { useLocation } from "wouter";
import { Shield, Menu, X, Activity } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "features", label: "Функции" },
  { id: "benefits", label: "Преимущества" },
  { id: "industries", label: "Отрасли" },
  { id: "how-it-works", label: "Как это работает" },
  { id: "contact", label: "Контакты" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleNav = (id: string | null) => {
    setIsOpen(false);

    if (id === "about") {
      setLocation("/about");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (id === "features") {
      setLocation("/features");
      return;
    }

    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById(id || "");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      if (!id) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => handleNav(null)}
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 border border-primary/30 group-hover:border-primary/60 transition-colors">
            <Shield className="w-6 h-6 text-primary" />
            <Activity className="absolute w-3.5 h-3.5 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-foreground">
            COOL<span className="text-primary">TRACK</span>VISION
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => handleNav("about")}
            className="text-[10px] font-tech uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
          >
            О нас
          </button>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-[10px] font-tech uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="outline"
            className="text-[10px] font-tech uppercase border-primary/30 hover:border-primary hover:bg-primary/10 text-primary px-6"
          >
            Вход в систему
          </Button>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden p-2 z-[80]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-[70] md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-[300px] bg-black/95 p-6 flex flex-col">
            <div className="mb-10 flex flex-col gap-3">
              <span className="font-display font-bold text-lg text-white">
                COOL<span className="text-primary">TRACK</span>VISION
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <button
                onClick={() => handleNav("about")}
                className="text-left text-sm font-tech uppercase text-white border-b border-white/10 pb-2"
              >
                О нас
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="text-left text-sm font-tech uppercase text-white border-b border-white/10 pb-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
