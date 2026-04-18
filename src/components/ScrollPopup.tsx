import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";

const ScrollPopup = () => {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (ratio > 0.45) setOpen(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!open || dismissed) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 max-w-sm bg-background border border-border shadow-soft animate-fade-up">
      <div className="p-6">
        <button
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="absolute right-3 top-3 p-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="text-[10px] uppercase tracking-[0.22em] text-accent mb-2">
          Personal Invitation
        </div>
        <div className="font-display text-xl uppercase leading-tight">
          Let's design your<br />dream space.
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Let's discuss your vision and how we can bring it to life.
        </p>
        <a
          href="#contact"
          onClick={() => setDismissed(true)}
          className="mt-4 group inline-flex items-center gap-2 bg-ink px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-ink-foreground hover:bg-accent hover:text-accent-foreground"
        >
          Let's connect
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ScrollPopup;
