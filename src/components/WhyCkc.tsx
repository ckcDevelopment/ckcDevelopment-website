import { differentiators, site } from "@/content";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function WhyCkc() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="site-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <SectionHeading
            index="03"
            kicker="Why CKC"
            title="Most firms rent you a stack. We leave you with one."
          />
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-7 text-muted lg:text-lg">
              The differentiator is not a clever methodology name. It is the
              intent: custom software and IT infrastructure designed so
              management and ownership live in-house. We will run beside you.
              We will not stand between you and your own systems.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-stone/80">
              {site.clubLine}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-3xl border border-white/10 bg-panel/70 p-7 transition duration-300 hover:border-lime/40">
                <p className="font-mono text-xs text-lime">0{index + 1}</p>
                <h3 className="mt-4 font-display text-2xl text-stone">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <div className="grid gap-4 rounded-3xl border border-white/10 bg-ink-2/80 p-6 sm:grid-cols-3 sm:p-8">
            {[
              { k: "You hold", v: "Source, keys, architecture" },
              { k: "You staff", v: "Operations designed for your team" },
              { k: "You decide", v: "When management transfers in-house" },
            ].map((stat) => (
              <div key={stat.k} className="border-white/8 py-2 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0">
                <p className="font-mono text-[0.68rem] tracking-[0.18em] text-cyan uppercase">
                  {stat.k}
                </p>
                <p className="mt-2 font-display text-2xl text-stone">{stat.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
