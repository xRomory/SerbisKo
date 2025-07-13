import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <span className="text-xl font-bold tracking-tight font-figtree">
        SerbisKo
      </span>
      <span className="text-xs font-light tracking-tight font-figtree">
        Serbisyo ko. Para sa'yo
      </span>
    </div>
  );
}

export { Logo }