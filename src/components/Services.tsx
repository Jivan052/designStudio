import residential from "@/assets/service-residential.jpg";
import commercial from "@/assets/service-commercial.jpg";
import architecture from "@/assets/service-architecture.jpg";
import office from "@/assets/service-office.jpg";

const services = [
  {
    n: "01",
    title: "Residential Design",
    desc: "Full-service interiors for private homes — from concept and layout to bespoke furniture and final styling.",
    img: residential,
  },
  {
    n: "02",
    title: "Commercial Spaces",
    desc: "Boutiques, hospitality and brand environments where material and light shape the customer experience.",
    img: commercial,
  },
  {
    n: "03",
    title: "Design Consultation",
    desc: "One-to-one advisory sessions for clients refining a single room, a renovation brief or a material palette.",
    img: architecture,
  },
  {
    n: "04",
    title: "Workspace Design",
    desc: "Considered offices and studios built around how your team actually works, gathers and focuses.",
    img: office,
  },
];

const Services = () => {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-secondary/60">
      <div className="container-editorial">
        <div className="text-center mb-16">
          <span className="label-eyebrow">What I Offer</span>
          <h2 className="heading-section mt-5">Services for Clients</h2>
          <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
            Tailored engagements for homeowners, developers and brands —
            scoped to suit your timeline, budget and ambition.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.n}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={s.img}
                alt={s.title}
                width={1024}
                height={896}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-overlay" />
              <div className="absolute inset-0 bg-ink/30 transition-opacity duration-500 group-hover:bg-ink/10" />

              <span
                aria-hidden="true"
                className="absolute right-6 top-6 font-display text-6xl md:text-8xl text-ink-foreground/30"
              >
                {s.n}
              </span>

              <div className="absolute left-7 right-7 top-7 max-w-xs">
                <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-ink-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/85">
                  {s.desc}
                </p>
              </div>

              <div className="absolute bottom-6 left-7 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-ink-foreground opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="h-px w-8 bg-accent" />
                View Service
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
