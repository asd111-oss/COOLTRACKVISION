import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-display font-bold mb-6">
          ГОТОВЫ ОПТИМИЗИРОВАТЬ <span className="text-primary text-glow">БИЗНЕС?</span>
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Оставьте заявку на демонстрацию возможностей CoolTrackVision. Наши специалисты свяжутся с вами для обсуждения задач.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs font-tech uppercase tracking-wider text-muted-foreground">Ваше имя</label>
            <Input className="bg-background border-white/10 h-12 font-sans" placeholder="Иван Иванов" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-tech uppercase tracking-wider text-muted-foreground">Email</label>
            <Input className="bg-background border-white/10 h-12 font-sans" placeholder="ivan@company.com" />
          </div>
          <div className="col-span-1 md:col-span-2 space-y-2">
            <label className="text-xs font-tech uppercase tracking-wider text-muted-foreground">Сообщение</label>
            <Textarea className="bg-background border-white/10 min-h-[120px] font-sans" placeholder="Опишите ваши задачи..." />
          </div>
          <div className="col-span-1 md:col-span-2">
            <Button size="lg" className="w-full h-14 bg-primary text-primary-foreground font-tech uppercase tracking-widest text-lg hover:bg-primary/90">
              Отправить заявку
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
