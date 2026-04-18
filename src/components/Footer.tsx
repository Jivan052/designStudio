import { Instagram, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-background border-t border-border">
        <div className="container-editorial py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="font-display text-2xl uppercase tracking-[0.2em]">
                Jyoti <span className="text-accent">Jamdar</span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
                Independent interior designer crafting calm, confident, considered spaces for private clients and brands.
              </p>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Practice</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-accent">About</a></li>
                <li><a href="#expertise" className="hover:text-accent">Services</a></li>
                <li><a href="#portfolio" className="hover:text-accent">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">Contact</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@jyotijamdar.studio</li>
                <li>+91 10101010101</li>
                <li>Katraj, Pune, Maharashtra</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border flex flex-wrap justify-between gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>© {new Date().getFullYear()} Jyoti Jamdar</span>
            <span>Designed & built personally with ❤️</span>
          </div>
        </div>

      </footer>

      <div className="fixed right-4 bottom-24 md:bottom-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/14155550144"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="rounded-full border border-border bg-background/90 p-3 text-muted-foreground shadow-lg backdrop-blur transition-colors hover:text-accent hover:border-accent"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href="tel:+14155550144"
          aria-label="Call"
          className="rounded-full border border-border bg-background/90 p-3 text-muted-foreground shadow-lg backdrop-blur transition-colors hover:text-accent hover:border-accent"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="rounded-full border border-border bg-background/90 p-3 text-muted-foreground shadow-lg backdrop-blur transition-colors hover:text-accent hover:border-accent"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </>
  );
};

export default Footer;
