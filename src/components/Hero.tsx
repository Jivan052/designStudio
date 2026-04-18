import heroImg from "@/assets/hero-interior.jpg";
import chairImg from "@/assets/floating-chair.png";
import { ArrowDownRight, ArrowRight } from "lucide-react";

const avatars = [
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=68",
];

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden">
      <div className="container-editorial">

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left */}
          <div className="lg:col-span-6 animate-fade-up">
            <span className="label-eyebrow">Independent Interior Designer</span>

            <h1 className="heading-display mt-6">
              Transforming<br />Spaces.<br />
              <span className="italic font-serif normal-case tracking-normal text-accent">
                Inspiring
              </span>{" "}
              Lives.
            </h1>

            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              I'm Jyoti — an independent interior designer crafting calm,
              considered spaces for private clients and forward-thinking brands.
              Every project begins with a conversation.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ink-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Let's connect
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 border border-foreground/80 px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Explore Work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust */}
            <div className="mt-14 flex items-center gap-6 border-t border-border pt-8">
              <div className="flex -space-x-3">
                {avatars.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt={`Client ${i + 1}`}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="h-11 w-11 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="font-display text-2xl uppercase">10+</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Happy clients served
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-6 relative animate-fade-in">
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
              <img
                src={heroImg}
                alt="Modern interior dining space designed by Atelier Nova"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
              {/* Floating tag cards */}
              <div className="absolute right-6 top-8 hidden md:block bg-background px-4 py-2 shadow-soft">
                <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
                  Get this $0
                </span>
              </div>
              <div className="absolute right-6 bottom-24 hidden md:flex flex-col gap-2">
                <div className="bg-primary px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-soft">
                  See More Templates
                </div>
                <div className="bg-ink px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-foreground shadow-soft">
                  Unlock All Access
                </div>
              </div>
            </div>

            {/* Floating chair */}
            <img
              src={chairImg}
              alt=""
              aria-hidden="true"
              width={800}
              height={800}
              className="pointer-events-none absolute -left-6 sm:-left-12 lg:-left-20 bottom-0 w-[55%] max-w-[420px] animate-float drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="ruler-bg h-3 mt-16 opacity-60" />
      </div>
    </section>
  );
};

export default Hero;
