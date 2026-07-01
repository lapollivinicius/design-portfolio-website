"use client";
import About from "./About";
import Hero from "./Hero";
import { useState } from "react";
import Project from "./Project";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect } from "react";
import {  useSearchParams } from "next/navigation";
import Star from "../ui/Star";



const items = [
  { id: "home", label: "Home"},
  { id: "about", label: "Sobre" },
  { id: "project", label: "Projetos" },
  { id: "service", label: "Serviços" },
  { id: "contact", label: "Contato" },
];

export default function Design() {

  const path = useSearchParams().get("path")

  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    setActive(path ?? "home")
  }, [path]);

  return (
    <section className="w-full h-screen -mt-15 max-[1086px]:h-auto max-[1086px]:mt-20 flex justify-center items-center">
      <div className="container">
        <div className="relative">
          <div className="flex justify-between flex-wrap max-[1086px]:gap-15">
            <nav className="flex flex-col gap-1 items-baseline justify-center">

              <p className="text-sm font-bold -mb-1">MENU</p>
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`flex text-6xl uppercase font-extrabold tracking-tighter cursor-pointer transition-all duration-300 hover:tracking-wide ${
                    active === item.id ? "opacity-80" : ""
                  }`}
                >
                  <div
                    className={`inline-block transition-all duration-200 ease-out  ${
                      active === item.id
                        ? "scale-100 rotate-0"
                        : "scale-0 rotate-180"
                    }`}
                  >
                    <Star className="fill-main h-15 p-1 opacity-100" />
                  </div>
                  <p
                    className={`-translate-x-15 transition-all duration-300 ${
                      active === item.id ? "translate-x-0" : ""
                    }`}
                  >
                    {item.label}
                  </p>
                </button>
              ))}

            </nav>

            <aside className="w-140 max-[1086px]:w-full mb-10">
              {active === "home" && <Hero />}
              {active === "about" && <About />}
              {active === "project" && <Project />}
              {active === "service" && <Service />}
              {active === "contact" && <Contact />}
            </aside>

          </div>

          <Footer className="lg:fixed lg:bottom-10 w-full" />
        </div>
      </div>
    </section>
  );
}
