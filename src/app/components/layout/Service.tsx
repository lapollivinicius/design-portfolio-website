import "@/app/globals.css"
import ServicesAccordion from "../ui/ServicesAccordion";

export default function Service() {
  return (
    <div className="h-full w-full flex flex-col gap-5">

      <div>
        <h1 className="text-5xl font-extrabold text-right">O QUE CRIAMOS?</h1>
        <p className="text-xl font-bold text-right">
          SOLUÇÕES ESTILOSAS, VEJA A BAIXO ↙
        </p>
      </div>

      <ServicesAccordion />

      <p className="text-xl font-bold text-right">
        NÃO TEM GRAÇA, SE NÃO FOR ASSIM!
      </p>
    </div>
  );
}
