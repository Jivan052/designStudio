import { ArrowRight } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-20 md:py-28 bg-ink text-ink-foreground">
      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <span className="label-eyebrow text-ink-foreground/70">
              Start a Project
            </span>
            <h2 className="heading-section mt-5 text-ink-foreground">
              Let's Design Your{" "}
              <span className="italic font-serif normal-case text-accent">
                Dream
              </span>{" "}
              Space.
            </h2>
            <p className="mt-6 max-w-md text-ink-foreground/70 leading-relaxed">
              Share a few details about your space and timeline. I personally
              reply within 24 hours with next steps and a tailored proposal.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="grid gap-4"
          >
            {submitted ? (
              <div className="border border-accent/40 bg-accent/10 p-8 text-center">
                <div className="font-display text-2xl uppercase text-accent">
                  Thank you
                </div>
                <p className="mt-3 text-sm text-ink-foreground/70">
                  I'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-ink-foreground/30 py-4 text-sm placeholder:text-ink-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent border-b border-ink-foreground/30 py-4 text-sm placeholder:text-ink-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
                <textarea
                  rows={3}
                  placeholder="Tell us about your project"
                  className="w-full bg-transparent border-b border-ink-foreground/30 py-4 text-sm placeholder:text-ink-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="mt-4 group inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-accent-foreground transition-all hover:bg-ink-foreground hover:text-ink"
                >
                  Send Inquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
