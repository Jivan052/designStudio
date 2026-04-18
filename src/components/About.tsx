import aboutImg from "@/assets/about-interior.jpg";
import { PenTool, Layers, Star, BookMarked } from "lucide-react";

const stats = [
  {
    label: "Experience",
    value: "1.5+",
    sub: "Years designing interiors",
    icon: PenTool,
    dark: false,
  },
  {
    label: "Delivered",
    value: "12+",
    sub: "Projects across multiple cities",
    icon: Layers,
    dark: true,
  },
  {
    label: "Client Rating",
    value: "4.9",
    sub: "Average from 20+ reviews",
    icon: Star,
    dark: false,
  },
  {
    label: "Qualification",
    value: "B.Tech in Civil Engineering",
    sub: "Diploma and B.Tech in Civil Engineering & Interior Design",
    icon: BookMarked,
    dark: true,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={aboutImg}
                alt="Architectural interior with floating staircase"
                width={1280}
                height={896}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
            </div>

            <div className="mt-10">
              <span className="label-eyebrow">About Me</span>
              <h2 className="heading-section mt-5 max-w-xl">
                Designing With{" "}
                <span className="italic font-serif normal-case text-accent">
                  Intention
                </span>{" "}
                & Restraint.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                I'm an independent interior designer with over a decade of
                practice across residential and commercial work. I partner
                closely with each client — from first sketch to final styling —
                to shape spaces that feel quietly confident and unmistakably yours.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end gap-6">
            {stats.map((s) => (
              <div key={s.label} className="animate-fade-up">
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-3">
                  {s.label}
                </div>
                <div
                  className={`flex items-center justify-between p-7 ${
                    s.dark
                      ? "bg-ink text-ink-foreground"
                      : "bg-card text-card-foreground border border-border"
                  }`}
                >
                  <div>
                    <div className="font-display text-5xl">{s.value}</div>
                    <div className="mt-2 text-sm opacity-80">{s.sub}</div>
                  </div>
                  <div
                    className={`grid h-14 w-14 place-items-center border ${
                      s.dark ? "border-ink-foreground/30 text-accent" : "border-border text-accent"
                    }`}
                  >
                    <s.icon className="h-6 w-6" strokeWidth={1.4} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
