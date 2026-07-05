"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

type GalleryImage = {
  src: StaticImageData | string;
  alt: string;
};

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-10">

        <div className="text-center mb-8">
          <p className="text-pink-500 font-black tracking-widest uppercase text-sm">
            Gallery
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            フォトギャラリー
          </h2>

          <p className="mt-3 text-gray-600">
            大阪梅田ドクターズ結婚相談所の雰囲気をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelected(image)}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
            </button>
          ))}

        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 text-white text-4xl"
            >
              ×
            </button>

            <Image
              src={selected.src}
              alt={selected.alt}
              className="rounded-3xl object-contain max-h-[85vh] w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}