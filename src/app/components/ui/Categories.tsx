"use client";

import { useState } from "react";

const categories = [
  {title: "TODOS", slug: ""},
  {title: "MARCA", slug: "branding"},
  {title: "AUDIOVISUAL", slug: "audiovisual"},
  {title: "MARKETING", slug: "marketing"},
  {title: "DESIGN", slug: "design"}
]

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

      <div className={ `overflow-hidden transition-all duration-300 ${open ? "h-7" : "h-0"}`}>

        <div className={`flex gap-1 font-bold text-md`}>

          {categories.map(item => (

            <button key={item.slug}
            className={`text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300 ${category === item.slug ? "active" : ""}`}
            onClick={() => onChange(item.slug)}
          >
            {item.title}
          </button>

          ))}

        </div>
      </div>  
    </div>
  );
}
