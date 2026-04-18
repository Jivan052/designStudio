import { Phone, MessageCircle, FileText } from "lucide-react";

const MobileBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-ink text-ink-foreground border-t border-ink-foreground/10">
      <div className="grid grid-cols-3">
        <a href="tel:+14155550144" className="flex flex-col items-center justify-center gap-1 py-3 text-[10px] uppercase tracking-[0.18em] hover:text-accent">
          <Phone className="h-4 w-4" />
          Call
        </a>
        <a href="https://wa.me/14155550144" className="flex flex-col items-center justify-center gap-1 py-3 text-[10px] uppercase tracking-[0.18em] border-x border-ink-foreground/10 hover:text-accent">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a href="#contact" className="flex flex-col items-center justify-center gap-1 py-3 text-[10px] uppercase tracking-[0.18em] bg-accent text-accent-foreground">
          <FileText className="h-4 w-4" />
          Get Quote
        </a>
      </div>
    </div>
  );
};

export default MobileBar;
