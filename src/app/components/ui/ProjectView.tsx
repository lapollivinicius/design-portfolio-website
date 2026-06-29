"use client";
import { useState } from "react";
import ProjectSlide from "./ProjectSlide";
import Categories from "./ProjectCategory";
import Pagination from "./ProjectPagination";

export default function ProjectView() {
  const [category, setCategory] = useState<string>("");
  const [page, setPage] = useState<number>(0)

  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-2">

        <Categories onChange={setCategory} category={category} />

        <ProjectSlide category={category} page={page} />

        <Pagination page={page} onChange={setPage} />

      </div>
    </div>
  );
}
