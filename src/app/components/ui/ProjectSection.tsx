"use client";
import { useState } from "react";
import Slide from "./Slide";
import Categories from "./Categories";
import Pagination from "./Pagination";

export default function ProjectSection() {
  const [category, setCategory] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-2">
        <Categories onChange={setCategory} category={category} />

        <Slide category={category} page={page} />

        <Pagination page={page} onChange={setPage} />
      </div>
    </div>
  );
}
