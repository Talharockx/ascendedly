import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionBackdropVariant = "grid" | "mesh" | "orbs" | "dots" | "beams";

const variantClass: Record<SectionBackdropVariant, string> = {
  grid: "section-backdrop-grid",
  mesh: "section-backdrop-mesh",
  orbs: "section-backdrop-orbs",
  dots: "section-backdrop-dots",
  beams: "section-backdrop-beams",
};

export function SectionBackdrop({
  variant = "grid",
  className,
  children,
  id,
}: {
  variant?: SectionBackdropVariant;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative overflow-hidden", className)}>
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0 -z-0", variantClass[variant])}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
