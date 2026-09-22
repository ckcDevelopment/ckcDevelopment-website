import Link from "next/link";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/content";

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 pb-10 pt-16">
      <div className="site-shell">
        <p className="max-w-3xl font-display text-4xl leading-[1.08] text-stone sm:text-5xl">
          Let&apos;s build something{" "}
          <em className="italic text-magenta">you keep</em>.
        </p>

        <div className="mt-12 grid gap-10 border-t border-white/8 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo variant="footer" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              Custom software, plus the design and management of IT
              infrastructure for in-house ownership.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-stone/80">
              {site.clubLine}
            </p>
          </div>
          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-cyan uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted hover:text-stone">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-cyan uppercase">
              Direct
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block text-sm text-muted hover:text-cyan"
            >
              {site.email}
            </a>
            <p className="mt-2 text-sm text-muted">{site.domain}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>{site.club}</p>
        </div>
      </div>
    </footer>
  );
}
