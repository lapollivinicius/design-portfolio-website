import Link from "next/link";
import Header from "./components/layout/Header";
import Logo from "./components/ui/Logo";
import "./globals.css"
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-dots w-screen h-screen">
        <Logo />

        <Header />

        <main className="h-screen -mt-15 flex justify-center cursor-pointer text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-bold">oii, amigos!</p>
            <h1 className="font-black text-7xl max-lg:text-4xl tracking-tighter hover:tracking-tight transition-all duration-300">SEJAM BEM VINDOS</h1>
            <p>teremos novidades em breve por aqui, você pode acessar a aba <Link className="text-hover font-bold" href={"/design"} >DESIGN ↗</Link></p>
            <p className="font-light opacity-40">com carinho, equipe cadeirada :)</p>

            <iframe src="https://trex-runner.com/" width="600" height="400" frameBorder="0" allowFullScreen></iframe>


          </div>
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
