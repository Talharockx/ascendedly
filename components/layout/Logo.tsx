import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center", className)}
      aria-label="Ascendedly homepage"
    >
      {compact ? (
        <Image
          src="/brand/mark.png"
          alt="Ascendedly"
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
          priority
        />
      ) : (
        <Image
          src="/brand/logo.png"
          alt="Ascendedly"
          width={180}
          height={50}
          className="h-9 w-auto object-contain sm:h-10"
          priority
        />
      )}
    </Link>
  );
}
