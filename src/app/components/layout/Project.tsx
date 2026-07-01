import ProjectSection from "../ui/ProjectSection";

export default function Project() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-end gap-5">
      <h1 className="text-5xl font-extrabold text-right">
        ALGUNS <br /> PROJETOS
      </h1>

      <ProjectSection />

      <a
        href="http://behance.net/cadeiradaestudio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-hover tracking-tighter font-bold hover:tracking-tight transition-all duration-300"
      >
        VEJA MAIS NO NOSSO BEHANCE ↗
      </a>
    </div>
  );
}
