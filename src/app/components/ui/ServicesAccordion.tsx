"use client";
import { useState } from "react";
import Star from "./Star";

const items = [
  {
    id: 1,
    title: "DESIGN",
    services: ["IDENTIDADE VÍSUAL", "LOGOTIPO", "CRIATIVOS"],
  },
  {
    id: 2,
    title: "MARCA",
    services: ["BRANDING", "CONCEITOS", "NAMING E SLOGAN"],
  },
  {
    id: 3,
    title: "AUDIOVISUAL",
    services: [
      "PRODUÇÃO DE VIDEOS",
      "ANIMAÇÕES E MOTION",
      "FILMAGEM E CAPTURA*",
    ],
  },
  {
    id: 4,
    title: "MARKETING",
    services: ["WEBSITES", "SOCIAL MEDIA", "TRAFEGO DIGITAL"],
  },
];

export default function ServicesAccordion() {
  const [active, setActive] = useState(0);

  console.log(active);

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div
          onClick={() => setActive(active === item.id ? 0 : item.id)}
          onMouseEnter={() => setActive(active === item.id ? 0 : item.id)}
          onMouseLeave={() => setActive(0)}
          key={item.title}
          className="flex flex-col gap-3 items-end justify-center cursor-pointer overflow-hidden"
        >
          <div className="flex gap-1">
            <h1
              className={`text-4xl font-extrabold text-right text-main selection:text-background tracking-tighter cursor-pointer transition-all duration-300 hover:tracking-wide ${active === item.id ? "mr-0" : "-mr-9"}`}
            >
              {item.title}
            </h1>
            <span
                className={`inline-block transition-all duration-300 ease-out ${
                  active === item.id ? "scale-100 rotate-0" : "scale-0 rotate-180"
                }`}
              >
                <Star className="fill-white h-9 p-1" />
            </span>
          </div>

          <div
            className={`flex flex-col gap-1 items-start text-sm font-semibold transition-all duration-500 ${active === item.id ? "h-12" : "h-0"}`}
          >
            <div className="w-full h-px bg-foreground opacity-20"></div>
            <ul className="flex gap-2">
              {item.services.map((s) => (
                <li
                  key={s}
                  className="font-bold px-1 hover:bg-main cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
