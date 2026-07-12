"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

type Slide = {
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
};

interface GalleryProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Gallery({
  slides,
  autoPlay = true,
  interval = 5000,
}: GalleryProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
<section className="w-full max-w-5xl mx-auto">

  <div className="relative overflow-hidden rounded-2xl border border-pink-100 bg-gradient-to-r from-pink-50 via-white to-blue-50 px-5 py-4 shadow-sm">

    {/* Previous */}
    <button
      onClick={previous}
      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-pink-50"
    >
      ←
    </button>

    {/* Content */}
    <div className="px-10">

      <h3 className="text-lg md:text-xl font-black text-gray-900 leading-tight">
        {slides[current].title}
      </h3>

      <p className="mt-1 text-[15px] leading-6 text-gray-700">
        {slides[current].description}
      </p>

    </div>

    {/* Next */}
    <button
      onClick={next}
      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition hover:bg-pink-50"
    >
      →
    </button>

  </div>

  {/* Dots */}
  {slides.length > 1 && (
    <div className="mt-2 flex justify-center gap-1.5">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`transition-all ${
            current === index
              ? "h-2 w-5 rounded-full bg-rose-500"
              : "h-2 w-2 rounded-full bg-rose-200 hover:bg-rose-300"
          }`}
        />
      ))}
    </div>
  )}

</section>
  );
}