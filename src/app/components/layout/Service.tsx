import "@/app/globals.css"

export default function Service() {
  return (
    <div className="h-full w-full flex flex-col gap-5">

      <div>
        <h1 className="text-5xl font-extrabold text-right">O QUE FAZEMOS?</h1>
        <p className="text-xl font-bold text-right">
          SIMPLISMENTE, FAZEMOS ARTE
        </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-right text-(--color-main)">DESIGN</h1>
          <ul className="flex flex-col items-end text-sm font-semibold">
            <li>IDENTIDADE VÍSUAL</li>
            <li>LOGOTIPO</li>
            <li>CRIATIVOS</li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-right text-(--color-main)">MARCA</h1>
          <ul className="flex flex-col items-end text-sm font-semibold">
            <li>BRANDING</li>
            <li>CONCEITOS</li>
            <li>NAMING E SLOGAN</li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-right text-(--color-main)">AVS</h1>
          <ul className="flex flex-col items-end text-sm font-semibold">
            <li>PRODUÇÃO DE VIDOS</li>
            <li>ANIMAÇÕES E MOTION</li>
            <li>FILMAGEM E CAPTURA*</li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-right text-(--color-main)">DIGITAL</h1>
          <ul className="flex flex-col items-end text-sm font-semibold">
            <li>WEBSITES</li>
            <li>SOCIAL MEDIA</li>
            <li>TRAFEGO DIGITAL</li>
          </ul>
        </div>
      </div>
      <p className="text-xl font-bold text-right">
        SÓ QUE DE UM JEITO ESTILOSO!
      </p>
    </div>
  );
}
