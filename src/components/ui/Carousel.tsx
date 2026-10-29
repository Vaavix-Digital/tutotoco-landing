"use client";

import { useEffect, useState, type ReactNode } from "react";
import Icon from "./Icon";

interface Props { slides: ReactNode[]; interval?: number; label?: string }

export default function Carousel({ slides, interval = 5500, label = "Slideshow" }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [paused, count, interval]);

  const go = (d: number) => setIndex((i) => (i + d + count) % count);
  const arrow = "grid h-11 w-11 place-items-center rounded-full border-2 border-[#DDD6FB] bg-white";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-[28px]">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <div key={i} className="w-full shrink-0" aria-hidden={i !== index}>{slide}</div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-4">
        <button aria-label="Previous slide" onClick={() => go(-1)} className={arrow}><Icon name="left" size={20} /></button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-3 rounded-full transition-all ${i === index ? "w-8 bg-[#6C4DF6]" : "w-3 bg-[#DDD6FB]"}`}
            />
          ))}
        </div>
        <button aria-label="Next slide" onClick={() => go(1)} className={arrow}><Icon name="right" size={20} /></button>
      </div>
    </div>
  );
}
