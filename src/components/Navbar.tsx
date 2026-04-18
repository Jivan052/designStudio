import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#expertise" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container-editorial flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center bg-ink text-ink-foreground font-display text-lg">
            J
          </span>
          <span className="font-display text-xl uppercase tracking-[0.2em]">
            JYOTI <span className="text-accent">Jamdar</span>
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Work With Me
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="container-editorial flex flex-col py-6 gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block text-sm font-medium uppercase tracking-[0.18em]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="mt-2 inline-flex w-fit items-center bg-ink px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-foreground"
            >
              Work With Me
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
