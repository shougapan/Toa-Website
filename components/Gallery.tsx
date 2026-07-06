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
    <section className="w-full max-w-5xl mx-auto space-y-0">

      {/* IMAGE */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-md">

        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover transition-opacity duration-700 ${
              current === index
                ? "opacity-100"
                : "opacity-0 absolute inset-0"
            }`}
            priority={index === 0}
          />
        ))}

        {/* Previous */}
        <button
          onClick={previous}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white shadow transition"
        >
          ←
        </button>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/80 hover:bg-white shadow transition"
        >
          →
        </button>
      </div>

      {/* NEWS BOX (tighter, visually attached) */}
      <div className="rounded-b-3xl border-x border-b border-pink-100 bg-gradient-to-br from-pink-50 via-white to-blue-50 px-6 py-6 shadow-sm -mt-2">

        <h3 className="text-xl font-black text-gray-900 transition-all duration-500">
          {slides[current].title}
        </h3>

        <p className="mt-2 leading-7 text-gray-700 text-base transition-all duration-500">
          {slides[current].description}
        </p>

      </div>

    </section>
  );
}