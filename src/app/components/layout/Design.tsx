"use client";
import About from "./About";
import Hero from "./Hero";
import { useState } from "react";
import Project from "./Project";
import Service from "./Service";
import Contact from "./Contact";

const items = [
  {id: "home", label: "Home"},
  { id: "about", label: "Sobre" },
  { id: "project", label: "Projetos" },
  { id: "service", label: "Serviços" },
  { id: "contact", label: "Contato" },
];

export default function Design() {
  const [active, setActive] = useState<string>("home");

  return (
    <section className="w-full h-screen -mt-15 max-lg:h-auto max-lg:mt-20 flex justify-center items-center">
      <div className="container">
        <div>
          <div className="flex justify-between flex-wrap max-lg:gap-15">
            <nav className="flex flex-col gap-1 items-baseline justify-center">

              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`flex text-6xl uppercase font-extrabold tracking-tighter cursor-pointer transition-all duration-300 hover:tracking-wide ${
                    active === item.id ? "opacity-80" : ""
                  }`}
                >
                  <span
                    className={`inline-block transition-all duration-200 ease-out ${
                      active === item.id
                        ? "scale-100 rotate-0"
                        : "scale-0 rotate-180"
                    }`}
                  >
                    ✦
                  </span>

                  <span
                    className={`-ml-11 transition-all duration-300 ${
                      active === item.id ? "ml-3" : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}

            </nav>

            <aside className="w-140 max-lg:w-full mb-10">
              {active === "home" && <Hero />}
              {active === "about" && <About />}
              {active === "project" && <Project />}
              {active === "service" && <Service />}
              {active === "contact" && <Contact />}
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
