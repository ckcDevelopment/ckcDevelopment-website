"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const surface: HTMLCanvasElement = canvas;
    const gfx: CanvasRenderingContext2D = ctx;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let nodes: Node[] = [];
    let frame = 0;
    let running = true;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      const { innerWidth: w, innerHeight: h } = window;
      surface.width = Math.floor(w * dpr);
      surface.height = Math.floor(h * dpr);
      surface.style.width = `${w}px`;
      surface.style.height = `${h}px`;
      gfx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(48, Math.floor((w * h) / 28000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.3 + 0.5,
      }));
      if (reduce) draw(false);
    }

    function draw(step: boolean) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      gfx.clearRect(0, 0, w, h);

      const limit = Math.min(w, h) * 0.16 + 70;

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        if (step && !reduce) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > w) a.vx *= -1;
          if (a.y < 0 || a.y > h) a.vy *= -1;
        }

        gfx.beginPath();
        gfx.fillStyle = "rgba(201,165,106,0.55)";
        gfx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        gfx.fill();

        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < limit) {
            const alpha = (1 - dist / limit) * 0.22;
            gfx.strokeStyle = `rgba(201,165,106,${alpha})`;
            gfx.lineWidth = 0.7;
            gfx.beginPath();
            gfx.moveTo(a.x, a.y);
            gfx.lineTo(b.x, b.y);
            gfx.stroke();
          }
        }
      }
    }

    function loop() {
      if (!running) return;
      if (!document.hidden) draw(true);
      frame = window.requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener("resize", resize);
    if (!reduce) frame = window.requestAnimationFrame(loop);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink"
    >
      <div className="mesh" />
      <div className="grid-overlay" />
      <canvas ref={canvasRef} className="absolute inset-0 size-full opacity-70" />
      <div className="grain" />
      <div className="vignette" />
    </div>
  );
}
