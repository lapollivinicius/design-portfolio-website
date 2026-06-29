import Header from "./components/layout/Header";
import ButtonHud from "./components/ui/ButtonHud";
import Logo from "./components/ui/Logo";
import StickHud from "./components/ui/StickHub";
import "./globals.css"

export default function Home() {
  return (
    <div className="bg-dots w-screen h-screen">
        <Logo />
        <Header />

        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 hover:scale-105 active:scale-100 hover:-translate-y-0.5 transition-all duration-500 ease-out z-50">
          <ButtonHud />
          
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 hidden">
          <StickHud />
        </div>

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
