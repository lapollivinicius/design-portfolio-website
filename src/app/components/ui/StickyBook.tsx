"use client";

import { useEffect, useRef, useState } from "react";
import Sticky from "./Sticky";

type StickyData = {
  id: number;
  title: string;
  x: number;
  y: number;
  scale: number,
  rotation: number;
  index:number,
  z: number;
};

export default function StickyBook() {
  const parentRef = useRef<HTMLDivElement>(null);
  const [stickies, setStickies] = useState<StickyData[]>([]);

  useEffect(() => {
    if (!parentRef.current) return;

    const { width, height } = parentRef.current.getBoundingClientRect();

    const area = width * height;
    const length = Math.floor(area / 40_000)

    const data = Array.from({ length }, (_, i) => ({
      id: i,
      title: `Sticky ${i + 1}`,
      x: Math.random() * (width - 216),
      y: Math.random() * (height - 268),
      rotation: Math.random() * 8 - 4,
      z: Math.floor(Math.random() * 5) + 1,
      scale: 0.6,
      index: Math.floor(Math.random() * 3),
      inverted: Math.random() < 0.5 ? -1 : 1
    }));

    setStickies(data);
  }, []);

  const bringToFront = (id: number) => {
    setStickies((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, z: 6 } : s
      )
    );
  };

  return (
    <div
      ref={parentRef}
      className="relative w-full h-full overflow-hidden"
    >
      {stickies.map((sticky) => (
        <Sticky
          key={sticky.id}
          sticky={sticky}
          parentRef={parentRef}
          onPointerDown={() => bringToFront(sticky.id)}
        />
      ))}
    </div>
  );
}