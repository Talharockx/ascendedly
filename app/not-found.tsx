import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="container max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">404</p>
        <h1 className="mt-3 text-4xl font-semibold">This route is not on the map.</h1>
        <p className="mt-4 text-muted-foreground">
          The page may have moved, or the service slug is not one of our five practices. Head home or
          brief the team directly.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
