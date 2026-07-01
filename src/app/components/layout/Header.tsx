"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const Path = usePathname();
  const [openTooltip, setOpenTooltip] = useState(true);

  return (
    <header
      id="header"
      className="h-15 w-full flex justify-center items-center z-50"
    >
      <div className="container">
        <div className="flex items-center justify-center max-md:justify-start">
          <div className="flex gap-2 items-center font-bold ">
            <Link
              className={
                "text-hover hover:tracking-wide transition-all duration-300" +
                (Path === "/" ? " active " : "")
              }
              href={"/"}
            >
              ESTÚDIO
            </Link>
            <div className="bg-white h-4 w-0.5"></div>

            <Link
              className={
                "text-hover hover:tracking-wide transition-all duration-300" +
                (Path.startsWith("/design") ? " active " : "")
              }
              href={"/design"}
            >
              DESIGN
            </Link>

            <div className="bg-white h-4 w-0.5"></div>

            <Link
              title="EM BREVE"
              onMouseEnter={() => setOpenTooltip(false)}
              onMouseLeave={() => setOpenTooltip(true)}
              onClick={() => setOpenTooltip(!openTooltip)}
              className={(Path.startsWith("/shop") ? " active " : "")
              }
              href={"/design"}
            >
              <div className="w-20 h-6 relative overflow-hidden">
                <p className={` w-20 transition-all duration-200 absolute ${openTooltip ? "top-0" : "-top-full"}`}>LOJA</p>
                <p className={` w-20 transition-all duration-200 absolute text-main ${openTooltip ? "top-full" : "top-0"}`}>EM BREVE</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
