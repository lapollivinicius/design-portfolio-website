import Link from "next/link"
import "@/app/globals.css"
import { FadeUp } from "../animations/FadeUp"

export default function Hero() {

  return (
    <FadeUp delay={0.4} >
    <div className="h-full flex flex-col justify-center items-end gap-5">
      <h1 className="text-5xl font-extrabold text-right">DESIGN PARA PESSOAS, <br /> AS QUE SE IMPORTAM</h1>
      <h2 className="text-xl font-bold text-right">ENCONTRAMOS SOLUÇÕES <br /> ESTILOSAS PARA O SEU NEGÓCIO</h2>
      <Link className="text-hover font-bold text-center" href={"/art"}>NOSSA ARTE ↗</Link>
    </div>
    </FadeUp>
  )

}