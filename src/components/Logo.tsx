import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  markClassName?: string;
  withWordmark?: boolean;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("size-9", className)}
    >
      <rect
        x="1.25"
        y="1.25"
        width="45.5"
        height="45.5"
        rx="13"
        stroke="currentColor"
        className="text-brass"
        strokeWidth="1.25"
      />
      <path
        d="M32.4 14.2c-2.25-2.15-5.35-3.45-8.7-3.45-7.15 0-12.95 5.55-12.95 13.25S16.55 37.25 23.7 37.25c3.35 0 6.45-1.3 8.7-3.45"
        stroke="currentColor"
        className="text-stone"
        strokeWidth="2.35"
        strokeLinecap="round"
      />
      <path
        d="M30.1 19.1c-1.35-1.25-3.15-2-5.15-2-4.15 0-7.5 3.2-7.5 7.15s3.35 7.15 7.5 7.15c2 0 3.8-.75 5.15-2"
        stroke="currentColor"
        className="text-brass"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <circle cx="34.6" cy="24" r="2.05" className="fill-brass" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  withWordmark = true,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className={markClassName} />
      {withWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-[1.35rem] tracking-tight text-stone">
            CKC
          </span>
          <span className="mt-1 font-mono text-[0.62rem] tracking-[0.28em] text-muted">
            DEVELOPMENT
          </span>
        </span>
      ) : null}
    </span>
  );
}
