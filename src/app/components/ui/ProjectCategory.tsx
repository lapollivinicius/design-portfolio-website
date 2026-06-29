"use client";

import { useState } from "react";

export default function Categories({
  category,
  onChange,
}: {
  category: string,
  onChange: (value: string) => void;
}) {

  const [open, setOpen] = useState(false)

  return (

    <div className="text-right flex flex-col gap-1 items-end">
      <button onClick={()=> setOpen(!open)} className="text-hover text-md font-extrabold cursor-pointer">CATEGORIAS ↙</button>

      <div className={ `overflow-hidden transition-all duration-300 ${open ? "h-6" : "h-0"}`}>
        <div className={`flex gap-1 font-bold text-[12px]`}>
          <button
            className={`text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300 ${category === "" ? "active" : ""}`}
            onClick={() => onChange("")}
          >
            TODOS
          </button>
          <button
            className={`text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300 ${category === "branding" ? "active" : ""}`}
            onClick={() => onChange("branding")}
          >
            BRANDING
          </button>
          <button
            className={`text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300 ${category === "visual-identity" ? "active" : ""}`}
            onClick={() => onChange("visual-identity")}
          >
            IDENTIDADE VISUAL
          </button>
          <button
            className={`text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300 ${category === "logo" ? "active" : ""}`}
            onClick={() => onChange("logo")}
          >
            LOGO
          </button>
          <button
            className={`text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300 ${category === "motion" ? "active" : ""}`}
            onClick={() => onChange("motion")}
          >
            MOTION
          </button>
          <button
            className={`text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300 ${category === "audiovisual" ? "active" : ""}`}
            onClick={() => onChange("audiovisual")}
          >
            AUDIOVISUAL
          </button>
          <button
            className={`text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300 ${category === "editorial" ? "active" : ""}`}
            onClick={() => onChange("editorial")}
          >
            EDITORIAL
          </button>
        </div>
      </div>
    </div>
  );
}
