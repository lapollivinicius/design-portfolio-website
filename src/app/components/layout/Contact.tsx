import { FadeUp } from "../animations/FadeUp";

export default function Contact() {
  return (
    <FadeUp >
      <div className="h-full flex flex-col w-full justify-center items-end gap-5">
        <div className="text-right">
          <h1 className="text-5xl font-extrabold">FALE CONOSCO</h1>
          <p className="text-xl font-bold">PROPOSTAS E ORÇAMENTOS</p>
        </div>

        <div className="text-right">
          <a
            className="text-4xl font-extrabold text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300 mb-1"
            href=""
          >
            WHATSAPP ↗
          </a>
          <p className="text-xl font-bold opacity-70">ATENDIMENTO MAIS RÁPIDO</p>
          <p className="text-xl font-bold">+55 00 00000-0000</p>
        </div>

        <div className="text-right">
          <a
            className="text-4xl font-extrabold text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300 mb-1"
            href=""
          >
            E-MAIL ↗
          </a>
          <p className="text-xl font-bold opacity-70">
            ENVIAR PROPOSTA OU PROJETOS
          </p>
          <p className="text-xl font-bold lowercase">
            HELLO@CADEIRADAESTUDIO.COM
          </p>
        </div>

        <div className="text-right font-bold">
          <p>NOSSAS REDES</p>
          <div className="flex items-center gap-1">
            <a
              className="text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300"
              href=""
            >
              BEHANCE
            </a>
            <div className="bg-white h-4 w-0.5"></div>
            <a
              className="text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300"
              href=""
            >
              INSTAGRAM
            </a>
            <div className="bg-white h-4 w-0.5"></div>
            <a
              className="text-hover cursor-pointer tracking-tighter hover:tracking-tight transition-all duration-300"
              href=""
            >
              YOUTUBE
            </a>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
