"use client"
import Link from "next/link";
import StickyBook from "./components/ui/StickyBook";
import Header from "./components/layout/Header";
import Logo from "./components/ui/Logo";
import { AnimatePresence, motion } from "motion/react";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-dots w-screen h-screen pb-20">
      <Logo />

      <Header />

      {/* <main className="h-screen -mt-15 flex justify-center cursor-pointer text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold">oii, amigos!</p>
            <h1 className="font-black text-7xl max-lg:text-4xl tracking-tighter hover:tracking-tight transition-all duration-300">SEJAM BEM VINDOS</h1>
            <p>teremos novidades em breve por aqui, você pode acessar a aba <Link className="text-hover font-bold" href={"/design"} >DESIGN ↗</Link></p>
            <p className="font-light opacity-40">com carinho, equipe cadeirada :)</p>
          </div>
        </main> */}

      <main className="h-full relative">
        <StickyBook />
        <div className="absolute left-1/2 top-70 -translate-1/2 w-full text-center">
          <p className="tracking-[10px] font-bold">BEM VINDO</p>
          <h1 className="text-8xl max-lg:text-6xl max-md:text-4xl font-extrabold tracking-tighter bg-transparent">
            CADEIRADA ESTÚDIO
          </h1>
          <p className="text-lg max-lg:text-sm">
            obrigado por limpar essa bangunça hehe
          </p>
          <p className="mt-5 font-black">
            Acesse{" "}
            <Link className="text-hover" href="/design">
              DESIGN ↗
            </Link>{" "}
            para saber mais{" "}
          </p>
        </div>

        <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              
              transition={{ duration: 0.5, delay: 1}}
              className="fixed bottom-10 right-10 font-extrabold"
            >
              <p className="max-md:hidden">CLIQUE E ARRASTE AS CADEIRAS</p>
              <p className="md:hidden">ARRASTE AS CADEIRAS</p>
            </motion.div>
        </AnimatePresence>

      </main>

      <svg width="0" height="0" className="absolute">
        <filter id="distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.03"
            numOctaves="2"
            seed="2"
            result="noise"
          />

          <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
        </filter>
      </svg>
    </div>
  );
}
