"use client";

import { useState, type KeyboardEvent, type MouseEvent } from "react";
import { offering, services } from "@/content";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { cn } from "@/lib/cn";

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
] as const;

export function Services() {
  const [active, setActive] = useState<string | null>(null);
  const [spot, setSpot] = useState<Record<string, { x: number; y: number }>>(
    {},
  );

  function onMove(id: string, event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setSpot((current) => ({
      ...current,
      [id]: { x: event.clientX - rect.left, y: event.clientY - rect.top },
    }));
  }

  function toggle(id: string) {
    setActive((current) => (current === id ? null : id));
  }

  function onKey(id: string, event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(id);
    }
  }

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="site-shell">
        <SectionHeading
          index="01"
          kicker="Services"
          title="What we design, build, and leave in your hands."
          body="Four practices, one outcome: systems your team can own. Expand each card for the operating detail behind the work."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {services.map((service, index) => {
            const open = active === service.id;
            const point = spot[service.id];
            return (
              <Reveal key={service.id} delay={index * 0.06} className={spans[index]}>
                <article
                  role="button"
                  tabIndex={0}
                  aria-expanded={open}
                  onClick={() => toggle(service.id)}
                  onKeyDown={(event) => onKey(service.id, event)}
                  onMouseMove={(event) => onMove(service.id, event)}
                  className={cn(
                    "group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-panel/80 p-6 transition duration-300 sm:p-8",
                    "hover:border-cyan/45 hover:-translate-y-0.5 focus-visible:border-cyan",
                    open && "border-magenta/55",
                  )}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: point
                        ? `radial-gradient(420px circle at ${point.x}px ${point.y}px, rgba(62,224,255,0.16), transparent 55%)`
                        : undefined,
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-mono text-sm text-cyan">{service.index}</p>
                      <ServiceIcon id={service.id} />
                    </div>
                    <h3 className="mt-8 font-display text-2xl leading-snug text-stone sm:text-[1.7rem]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
                      {service.summary}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.capabilities.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/10 bg-ink/40 px-3 py-1 font-mono text-[0.65rem] tracking-wide text-stone/80"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className={cn("expand-grid mt-2", open && "open")}>
                      <div>
                        <p className="pt-5 text-sm leading-6 text-stone/85">
                          {service.detail}
                        </p>
                        <p className="mt-4 border-t border-white/8 pt-4 font-mono text-[0.68rem] tracking-[0.14em] text-lime uppercase">
                          What you keep — {service.keep}
                        </p>
                      </div>
                    </div>
                    <p className="mt-6 font-mono text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                      {open ? "Close detail" : "Open detail"}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={0.18} className="lg:col-span-12">
            <div className="overflow-hidden rounded-3xl border border-magenta/30 bg-gradient-to-br from-panel via-ink-2 to-panel-2 p-6 sm:p-10">
              <p className="eyebrow">The broader offering</p>
              <div className="mt-4 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
                <div>
                  <h3 className="font-display text-3xl leading-tight text-stone sm:text-4xl">
                    {offering.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                    {offering.body}
                  </p>
                </div>
                <ol className="space-y-5">
                  {offering.points.map((point, index) => (
                    <li key={point.title} className="flex gap-4">
                      <span className="font-mono text-xs text-cyan">0{index + 1}</span>
                      <div>
                        <p className="font-medium text-stone">{point.title}</p>
                        <p className="mt-1 text-sm leading-6 text-muted">
                          {point.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ id }: { id: string }) {
  const common = "size-10 text-magenta";
  if (id === "engineering") {
    return (
      <svg viewBox="0 0 40 40" className={common} fill="none" aria-hidden="true">
        <rect x="6" y="8" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 16h16M12 21h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="28" cy="26" r="2" fill="currentColor" />
      </svg>
    );
  }
  if (id === "solutions") {
    return (
      <svg viewBox="0 0 40 40" className={common} fill="none" aria-hidden="true">
        <path d="M8 26 20 8l12 18H8Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M14 26v6h12v-6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M20 14v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === "architecture") {
    return (
      <svg viewBox="0 0 40 40" className={common} fill="none" aria-hidden="true">
        <rect x="7" y="22" width="10" height="10" stroke="currentColor" strokeWidth="1.4" />
        <rect x="23" y="22" width="10" height="10" stroke="currentColor" strokeWidth="1.4" />
        <rect x="15" y="8" width="10" height="10" stroke="currentColor" strokeWidth="1.4" />
        <path d="M20 18v4M12 22v0M28 22v0M12 22l3-4M28 22l-3-4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className={common} fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 20h22M20 9c3.2 3.4 4.8 7.2 4.8 11S23.2 27.6 20 31c-3.2-3.4-4.8-7.2-4.8-11S16.8 12.4 20 9Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
