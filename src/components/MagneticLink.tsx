"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type MagneticLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function MagneticLink({
  href,
  children,
  variant = "primary",
  className,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  }

  function onMove(event: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate3d(${x * 0.22}px, ${y * 0.28}px, 0)`;
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onBlur={reset}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-[background-color,color,border-color,box-shadow] duration-300 will-change-transform",
        variant === "primary" &&
          "bg-brass text-ink shadow-[0_0_0_1px_color-mix(in_srgb,var(--brass-2)_35%,transparent)] hover:bg-brass-2",
        variant === "ghost" &&
          "border border-brass/30 bg-transparent text-stone hover:border-brass hover:text-brass-2",
        className,
      )}
    >
      {children}
    </Link>
  );
}
