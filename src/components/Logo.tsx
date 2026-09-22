import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  variant?: "nav" | "footer" | "hero";
};

const sizes = {
  nav: { box: 64, className: "h-16 w-16" },
  footer: { box: 168, className: "h-[9.5rem] w-[9.5rem] sm:h-44 sm:w-44" },
  hero: { box: 280, className: "h-52 w-52 sm:h-64 sm:w-64" },
} as const;

export function Logo({ className, variant = "nav" }: LogoProps) {
  const size = sizes[variant];

  return (
    <Image
      src="/brand/ckc-logo.webp"
      alt="CKC Development — Cool Kids Club"
      width={size.box}
      height={size.box}
      priority={variant === "nav" || variant === "hero"}
      className={cn("object-contain", size.className, className)}
    />
  );
}
