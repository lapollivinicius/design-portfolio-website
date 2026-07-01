"use client";

import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";

export default function Slide(props: { category: string; page: number }) {
  const filtered = props.category
    ? projects.filter((p) => p.category === props.category)
    : projects;

  const safeIndex = filtered.length > 0 ? props.page % filtered.length : 0;

  const currentProject = filtered[safeIndex];

  if (!currentProject) {
    return (
      <div className="h-50 relative overflow-hidden bg-main rounded-lg p-5 flex flex-col justify-end text-xl font-bold my-2">
        {" "}
        <h1 className="text-background">SEM PROJETOS NO MOMENTO</h1>{" "}
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentProject.slug}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href={`/design/project/${currentProject.slug}`}
          className="group h-50 relative bg-main overflow-hidden rounded-lg p-5 flex flex-col justify-end text-2xl my-2"
        >
          <div className="relative z-10">
            <h1 className="font-extrabold tracking-tighter">
              {currentProject.title}
            </h1>

            <p className="-mt-2 font-light text-xl">{currentProject.year}</p>
          </div>

          <Image
            className="object-cover brightness-50"
            src={currentProject.image}
            alt={currentProject.title}
            fill
          />
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
