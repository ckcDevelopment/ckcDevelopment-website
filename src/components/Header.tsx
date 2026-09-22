"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { MagneticLink } from "@/components/MagneticLink";
import { nav, site } from "@/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-white/5 bg-ink/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="site-shell flex h-[4.25rem] items-center justify-between">
        <Link href="/" className="rounded-sm" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link pb-0.5 font-mono text-[0.7rem] tracking-[0.18em] text-muted uppercase"
            >
              {item.label}
            </Link>
          ))}
          <MagneticLink href="/#contact" className="!px-5 !py-2.5 text-xs">
            Talk with us
          </MagneticLink>
        </nav>

        <button
          type="button"
          className="relative z-50 flex size-11 items-center justify-center rounded-full border border-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={cn(
                "h-px w-full bg-stone transition-transform duration-300",
                open && "translate-y-[4px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-stone transition-transform duration-300",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-end bg-ink/95 px-6 pb-10 pt-24 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="border-b border-white/8 py-4 font-serif text-4xl text-stone"
                >
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brass px-6 py-3 text-sm font-medium text-ink"
            >
              Talk with us
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
