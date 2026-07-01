export default function About() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-end gap-5">
      <h1 className="text-5xl font-extrabold text-right">
        NÓS, COMO <br /> UM ESTÚDIO
      </h1>
      <p className="text-justify text-sm [text-align-last:right]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, labore
        impedit voluptates quos corrupti omnis reprehenderit sunt alias
        suscipit! Ipsum laboriosam obcaecati, iste qui soluta accusantium quae
        consectetur sequi veritatis.
      </p>
      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-black text-main">+10</p>
          <p className="text-center text-[11px] leading-3.5 font-bold">ANOS DE <br /> EXPERIÊNCIA</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-black text-main">+80</p>
          <p className="text-center text-[11px] leading-3.5 font-bold">PROJETOS <br/> ENTREGUES</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-black text-main">+10</p>
          <p className="text-center text-[11px] leading-3.5 font-bold">PROFISSIONAIS <br/> ESPECIALIZADOS</p>
        </div>
      </div>
    </div>
  );
}
