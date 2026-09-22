import { principles } from "@/content";

export function CapabilityStrip() {
  const items = [...principles, ...principles];

  return (
    <section
      aria-label="Operating principles"
      className="relative border-y border-white/8 bg-ink-2/70 py-4"
    >
      <div className="overflow-hidden">
        <div className="marquee-track">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              aria-hidden={index >= principles.length}
              className="flex items-center px-6 font-mono text-[0.72rem] tracking-[0.22em] text-muted uppercase"
            >
              <span className="mr-6 inline-block size-1.5 rounded-full bg-lime" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
