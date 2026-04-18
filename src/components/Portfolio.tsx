import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { img: p1, title: "Linen Suite", category: "Residence", year: "2025" },
  { img: p2, title: "Travertine Bath", category: "Spa", year: "2024" },
  { img: p3, title: "Brass & Walnut Kitchen", category: "Residence", year: "2024" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="label-eyebrow">Selected Work</span>
            <h2 className="heading-section mt-5 max-w-xl">
              Visual Stories of{" "}
              <span className="italic font-serif normal-case text-accent">
                Considered
              </span>{" "}
               Spaces.
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] hover:text-accent transition-colors"
          >
            All projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`group ${i === 1 ? "md:translate-y-12" : ""}`}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={it.img}
                  alt={it.title}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
                <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center bg-background/0 text-ink-foreground opacity-0 translate-x-2 transition-all duration-500 group-hover:bg-accent group-hover:opacity-100 group-hover:translate-x-0">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-display text-xl uppercase tracking-tight">
                  {it.title}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {it.year}
                </span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {it.category}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
