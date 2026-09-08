"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const DEFAULT_WORDS = [
  "search",
  "software",
  "growth",
  "AI",
  "pipeline",
  "retention",
];

export function TypewriterWord({
  words = DEFAULT_WORDS,
  className,
  typingSpeed = 75,
  deletingSpeed = 45,
  holdMs = 1600,
}: {
  words?: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  holdMs?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [minWidth, setMinWidth] = useState<number | undefined>(undefined);

  const measureRef = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const measureEl = measureRef.current;
      const caretEl = caretRef.current;
      if (!measureEl) return;

      let widest = 0;
      for (const word of words) {
        measureEl.textContent = word;
        widest = Math.max(widest, measureEl.getBoundingClientRect().width);
      }
      measureEl.textContent = "";

      const caretWidth = caretEl?.getBoundingClientRect().width ?? 3;
      // ml-0.5 (2px) + caret
      setMinWidth(Math.ceil(widest + caretWidth + 2));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [words]);

  useEffect(() => {
    const current = words[wordIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      }, 280);
    } else {
      timeout = setTimeout(
        () => {
          const next = deleting
            ? current.slice(0, Math.max(0, text.length - 1))
            : current.slice(0, text.length + 1);
          setText(next);
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, holdMs]);

  return (
    <span
      className={cn(
        "relative inline-flex h-[1.15em] items-baseline whitespace-nowrap align-baseline",
        className
      )}
      style={minWidth ? { width: minWidth, minWidth } : undefined}
    >
      {/* Hidden measurer shares the same typography as the visible word */}
      <span
        ref={measureRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 -z-10 whitespace-nowrap opacity-0"
      />
      <span className="inline-flex items-baseline whitespace-nowrap">
        <span className="gradient-text">{text}</span>
        <span
          ref={caretRef}
          aria-hidden
          className="ml-0.5 inline-block h-[0.9em] w-[3px] shrink-0 translate-y-[0.08em] animate-pulse rounded-sm bg-gradient-to-b from-cyan-400 via-indigo-500 to-fuchsia-500"
        />
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
