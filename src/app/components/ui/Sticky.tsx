"use client";

import { motion } from "motion/react";

type Props = {
  sticky: {
    id: number;
    title: string;
    x: number;
    y: number;
    scale: number,
    rotation: number;
    index: number,
    z: number;
  };
  
  parentRef: React.RefObject<HTMLDivElement | null>;
  onPointerDown: () => void;
};

export default function Sticky({
  sticky,
  parentRef,
  onPointerDown,
}: Props) {
  return (
    <motion.div
      drag
      dragConstraints={parentRef}
      dragMomentum={false}
      initial={{
        x: sticky.x,
        y: sticky.y,
        rotate: sticky.rotation,
      }}
      whileDrag={{
        rotate: 10,
        zIndex: 10,
        cursor: "grabbing",
      }}
      onPointerDown={onPointerDown}
      style={{
        position: "absolute",
        zIndex: sticky.z,
        scale: sticky.scale
      }}
      className="w-52 rounded-xl  cursor-grab select-none"
    >
      <img className="pointer-events-none drop-shadow-md drop-shadow-[#00000045]" src={`/sticky/sticky-${sticky.index}.webp`} alt="123" />

    </motion.div>
  );
}