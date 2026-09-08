"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";

import { services } from "@/data/servicesData";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { label: "Homepage", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const servicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav
        className="container flex h-[4.25rem] items-center justify-between gap-4"
        aria-label="Primary"
      >
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          <NavLink href="/" active={pathname === "/"}>
            Homepage
          </NavLink>
          <NavLink href="/about-us" active={pathname === "/about-us"}>
            About Us
          </NavLink>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  servicesActive && "text-foreground"
                )}
              >
                Services
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-80">
              <DropdownMenuLabel>Capability suite</DropdownMenuLabel>
              {services.map((service) => (
                <DropdownMenuItem key={service.slug} asChild>
                  <Link href={`/services/${service.slug}`} className="flex flex-col items-start gap-0.5">
                    <span className="font-medium text-foreground">{service.shortName}</span>
                    <span className="text-xs text-muted-foreground">{service.eyebrow}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink href="/blogs" active={pathname.startsWith("/blogs")}>
            Blogs
          </NavLink>
          <NavLink href="/contact-us" active={pathname === "/contact-us"}>
            Contact Us
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex lg:h-10 lg:px-4">
            <Link href="/contact-us">Book Discovery Call</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="sr-only">Site menu</SheetTitle>
                <Logo />
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-1">
                {primaryLinks.slice(0, 2).map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-lg px-2 py-3 text-base font-medium text-foreground hover:bg-slate-100"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}

                <Accordion type="single" collapsible className="px-2">
                  <AccordionItem value="services" className="border-b-0">
                    <AccordionTrigger className="py-3 text-base font-medium text-foreground">
                      Services
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-1 pb-2">
                        {services.map((service) => (
                          <SheetClose asChild key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-slate-100 hover:text-foreground"
                            >
                              {service.shortName}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                {primaryLinks.slice(2).map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-lg px-2 py-3 text-base font-medium text-foreground hover:bg-slate-100"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <SheetClose asChild>
                <Button asChild className="mt-6 w-full" size="lg">
                  <Link href="/contact-us">Book Discovery Call</Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        active && "text-foreground"
      )}
    >
      {children}
    </Link>
  );
}
