import { Link } from "wouter";
import { Shield, Menu, X, Activity } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#about", label: "О нас" },
  { href: "#features", label: "Функции" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#industries", label: "Отрасли применения" },
  { href: "#how-it-works", label: "Как это работает" },
  { href: "#contact", label: "Контакты" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* DESKTOP LOGO */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 border border-primary/30 group-hover:border-primary/60 transition-colors">
              <Shield className="w-6 h-6 text-primary" />
              <Activity className="absolute w-3.5 h-3.5 text-primary" />
              <div className="absolute right-0 bottom-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-foreground">
              COOL<span className="text-primary">TRACK</span>VISION
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] font-tech uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button variant="outline" className="text-[10px] font-tech uppercase border-primary/30 hover:border-primary hover:bg-primary/10 text-primary px-6">
            Вход в систему
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-foreground p-2 hover:text-primary transition-colors relative z-[80]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* === MOBILE MENU DRAWER === */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 right-0 bottom-0 h-screen w-[300px] bg-white/10 backdrop-blur-xl border-l border-white/20 z-[70] shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300 md:hidden overflow-y-auto">
            
            {/* Логотип */}
            <div className="mb-10 pt-4 flex flex-col items-start gap-3">
               <div className="relative flex items-center justify-center w-12 h-12 rounded-sm bg-primary/20 border border-primary/50">
                  <Shield className="w-6 h-6 text-primary" />
                  <Activity className="absolute w-3.5 h-3.5 text-primary" />
               </div>
               <span className="font-display font-bold text-lg tracking-wider text-white">
                  COOL<span className="text-orange-500">TRACK</span>VISION
               </span>
            </div>

            {/* Список ссылок */}
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-tech uppercase tracking-wider text-white hover:text-orange-500 active:text-orange-500 transition-colors border-b border-white/10 pb-3"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* ИЗМЕНЕНИЕ ЗДЕСЬ: Кнопка Outline (как на десктопе) */}
            <div className="mt-auto pb-6">
              <Button 
                variant="outline" 
                className="w-full h-12 text-sm font-tech uppercase bg-transparent border-primary/30 text-primary hover:bg-primary/10 hover:border-primary hover:text-primary transition-all"
              >
                Вход в систему
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
