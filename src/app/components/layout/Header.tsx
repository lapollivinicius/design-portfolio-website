"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const Path = usePathname()

  return (

    <header className="h-15 w-full flex justify-center items-center">

        <div className="container">

          <div className="flex items-center justify-center max-md:justify-start">

            <div className="flex gap-2 items-center font-bold ">
              <Link className={"text-hover hover:tracking-wide transition-all duration-300" + (Path === "/" ? " active " : "")} href={"/"}>ESTÚDIO</Link>
              <div className="bg-white h-4 w-0.5"></div>

              <Link  className={"text-hover hover:tracking-wide transition-all duration-300" + (Path.startsWith("/design") ? " active " : "")} href={"/design"}>DESIGN</Link>

              <div className="bg-white h-4 w-0.5"></div>

              <Link title="EM BREVE" className={"opacity-50" + (Path.startsWith("/shop") ? " active " : "")} href={"/design"}>SHOP</Link>
              
            </div>

          </div>

        </div>

    </header>

  )

}