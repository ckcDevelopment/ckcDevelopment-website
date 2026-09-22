import { approach } from "@/content";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Approach() {
  return (
    <section id="approach" className="relative py-24 sm:py-32">
      <div className="site-shell">
        <SectionHeading
          index="02"
          kicker="Approach"
          title="Partnering for in-house ownership."
          body="We do not optimize for perpetual dependency. The work is structured so your people can take the wheel — with us beside them until they can."
        />

        <ol className="relative mt-16 grid gap-4 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-[2.35rem] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-magenta/50 to-transparent lg:block"
          />
          {approach.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <li className="relative h-full rounded-3xl border border-white/10 bg-panel/60 p-6 transition duration-300 hover:border-cyan/40">
                <span className="inline-flex size-11 items-center justify-center rounded-full border border-cyan/40 bg-ink font-mono text-sm text-cyan">
                  {step.index}
                </span>
                <h3 className="mt-6 font-display text-2xl text-stone">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
