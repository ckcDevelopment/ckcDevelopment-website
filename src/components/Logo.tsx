import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  variant?: "nav" | "footer";
};

const variants = {
  nav: {
    className: "h-[3.4rem] w-auto sm:h-[3.85rem]",
    sizes: "80px",
  },
  footer: {
    className: "h-28 w-auto sm:h-36",
    sizes: "220px",
  },
} as const;

export function Logo({ className, variant = "nav" }: LogoProps) {
  const config = variants[variant];

  return (
    <Image
      src="/brand/ckc-mark.webp"
      alt="CKC Development — Cool Kids Club"
      width={757}
      height={512}
      priority={variant === "nav"}
      sizes={config.sizes}
      className={cn(
        "brand-mark bg-transparent object-contain object-left",
        config.className,
        className,
      )}
      style={{ width: "auto" }}
    />
  );
}
