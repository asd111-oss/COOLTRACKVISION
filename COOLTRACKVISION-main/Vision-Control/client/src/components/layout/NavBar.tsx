import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "features", label: "Функции" },
  { id: "benefits", label: "Преимущества" },
  { id: "solutions", label: "Отрасли" },
  { id: "cases", label: "Кейсы" }, // ID должен совпадать с условием в handleNav
  { id: "contact", label: "Контакты" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleNav = (id: string | null) => {
    setIsOpen(false);

    // --- ПРАВИЛЬНЫЕ ПЕРЕХОДЫ НА ОТДЕЛЬНЫЕ СТРАНИЦЫ ---
    if (id === "about") {
      setLocation("/about");
      return;
    }

    if (id === "features") {
      setLocation("/features");
      return;
    }

    if (id === "benefits") {
      setLocation("/core-benefits"); 
      return;
    }

    if (id === "solutions" || id === "industries") {
      setLocation("/industry-solutions"); 
      return;
    }

    // НОВОЕ: Переход на страницу Кейсов
    if (id === "cases") {
      setLocation("/cases"); 
      return;
    }

    // --- ЛОГИКА ДЛЯ ЯКОРЕЙ (ПЛАВНЫЙ СКРОЛЛ) ---
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
        <div className="flex items-center group cursor-pointer" onClick={() => handleNav(null)}>
          <span className="font-display font-bold text-xl tracking-wider text-foreground">
            COOL<span className="text-primary">TRACK</span>VISION
          </span>
        </div>

        {/* Десктопное меню */}
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
          
          <a 
            href="https://app.cooltrackvision.ru/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="text-[10px] font-tech uppercase border-primary/30 hover:border-primary hover:bg-primary/10 text-primary px-6">
              Личный кабинет
            </Button>
          </a>
        </div>

        {/* Мобильная кнопка */}
        <button className="md:hidden p-2 z-[80]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Мобильное меню (опционально, если нужно) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-4">
            <button onClick={() => handleNav("about")} className="text-left text-xs font-tech uppercase tracking-widest">О нас</button>
            {navItems.map((item) => (
                <button key={item.id} onClick={() => handleNav(item.id)} className="text-left text-xs font-tech uppercase tracking-widest">
                    {item.label}
                </button>
            ))}
        </div>
      )}
    </nav>
  );
}