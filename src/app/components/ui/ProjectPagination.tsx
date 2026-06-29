"use client";

type PaginationAction = "prev" | "next";

export default function Pagination({
  page,
  onChange,
}: {
  page: number;
  onChange: (value: number) => void;
}) {

  const handleChange = (action: PaginationAction) => {
    if (action === "next") {
      onChange(page + 1);
    }

    if (action === "prev") {
      onChange(Math.max(page - 1, 0));
    }
  };

  return (
    <div className="w-full flex justify-between font-bold text-[12px]">
      <button className="text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300" onClick={() => handleChange("prev")}>
        ANTERIOR
      </button>

      <button className="text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300" onClick={() => handleChange("next")}>
        PRÓXIMO
      </button>
    </div>
  );
}