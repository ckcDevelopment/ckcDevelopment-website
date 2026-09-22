"use client";

import { useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticLink } from "@/components/MagneticLink";
import { site } from "@/content";
import { cn } from "@/lib/cn";

const layers = [
  { label: "Application", caption: "Custom software" },
  { label: "Platform", caption: "Interfaces & data" },
  { label: "Infrastructure", caption: "Cloud or on-prem" },
  { label: "Ownership", caption: "Your team, in-house" },
] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  }

  function onLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 sm:justify-center sm:pb-24 sm:pt-36"
    >
      <div className="site-shell grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            {site.club}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-[12ch] font-display text-[3rem] leading-[0.98] tracking-tight text-stone sm:text-6xl lg:text-[5.15rem]"
          >
            Software you own.
            <br />
            Infrastructure you{" "}
            <em className="italic text-magenta">keep</em>.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg"
          >
            CKC Development creates custom software, and we design and manage IT
            infrastructure for in-house management and ownership. We build with
            you — then leave you able to run it.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <MagneticLink href="/#contact">Start a conversation</MagneticLink>
            <MagneticLink href="/#services" variant="ghost">
              Explore services
            </MagneticLink>
          </motion.div>
        </div>

        <motion.div
          ref={stageRef}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.22 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          aria-hidden="true"
        >
          <div className="absolute -inset-8 rounded-full bg-magenta/10 blur-3xl" />
          <div className="relative flex flex-col gap-3">
            {layers.map((layer, index) => {
              const depth = index - 1.5;
              const translateX = tilt.x * (18 + index * 10);
              const translateY = tilt.y * (10 + index * 6) + depth * -2;
              return (
                <div
                  key={layer.label}
                  style={{
                    transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                    transition: reduce
                      ? undefined
                      : "transform 180ms ease-out",
                    zIndex: layers.length - index,
                  }}
                  className={cn(
                    "flex items-center justify-between rounded-2xl border px-5 py-4 backdrop-blur-md",
                    index === layers.length - 1
                      ? "border-lime/45 bg-lime/10"
                      : "border-white/10 bg-panel/70",
                  )}
                >
                  <div>
                    <p className="font-mono text-[0.65rem] tracking-[0.2em] text-cyan uppercase">
                      Layer 0{index + 1}
                    </p>
                    <p className="mt-1 font-display text-2xl text-stone">
                      {layer.label}
                    </p>
                  </div>
                  <p className="max-w-[9rem] text-right text-sm text-muted">
                    {layer.caption}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-center font-mono text-[0.65rem] tracking-[0.18em] text-muted uppercase">
            Built as a stack you can staff
          </p>
        </motion.div>
      </div>

      <Link
        href="/#services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[0.65rem] tracking-[0.22em] text-muted uppercase sm:flex"
      >
        <span className="relative flex h-9 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 h-1/2 animate-pulse bg-lime" />
        </span>
        Scroll
      </Link>
    </section>
  );
}
