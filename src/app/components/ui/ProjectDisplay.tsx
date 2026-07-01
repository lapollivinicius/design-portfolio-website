import { project } from "@/types/projects";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDisplay(props: any) {
  const data: project = props.data;

  const images = Array.from({ length: 9 }, (_, i) => i);

  return (
    <section id="header" className="flex justify-center items-center py-5 scroll-smooth">
      <div className="container">

        <div className="flex gap-5 flex-wrap max-lg:flex-col">
          
          <div className="w-[30%] max-lg:w-full flex flex-col">
            
            <Link className="font-extrabold text-hover w-21" href={"/design?path=project"}> ← VOLTAR</Link>
            <div>
              <h2 className="text-6xl tracking-tighter font-extrabold">
                {data.title}
              </h2>
              <p className="text-3xl ">{data.year}</p>
            </div>

            <div className="lg:h-850 flex flex-col gap-8 justify-between">

              <div className="h-full">
                <div className="sticky top-20 flex flex-col max-lg:mt-8 mt-10">
                  
                  <div>
                    <h3 className="font-extrabold text-4xl">SOBRE O PROJETO</h3>
                    <p>{data.copy}</p>
                  </div>

                </div>
              </div>

              

              <div className="h-full">
                <div className="sticky top-20 flex flex-col gap-2">
                  <h3 className="font-extrabold text-4xl">NOSSOS SERVIÇOS</h3>
                  <div className="flex gap-3 flex-wrap">

                    {data.services.map(item => (
                      <p key={item} className="bg-main px-1 text-2xl font-extrabold uppercase cursor-pointer text-hover">{item}</p>
                    ))}

                  </div>
                </div>
              </div>

              <div className="h-full max-lg:hidden">
                <div className="sticky top-20 flex flex-col gap-8">
                  
                  <div>
                    <h3 className="font-extrabold text-4xl">O QUE RESOLVEMOS?</h3>
                    <p>{data.solution}</p>
                  </div>
                  
                </div>
              </div>

              <div className="h-full max-lg:hidden">
                <div className="sticky top-20 flex flex-col gap-8">
                  <div>
                    <h3 className="font-extrabold text-4xl">MAIS DETALHES</h3>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="w-[65%] max-lg:w-full ">
            <div className="flex flex-col items-center gap-3 relative">
              {images.map((i) => (
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <Image
                    src={`/images/${data.slug}/${i}.webp`}
                    alt={`image ${i}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    quality={100}
                    className="w-full h-auto rounded-2xl object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="h-full lg:hidden">
                <div className="sticky top-20 flex flex-col gap-8">
                  
                  <div>
                    <h3 className="font-extrabold text-4xl">O QUE RESOLVEMOS?</h3>
                    <p>{data.solution}</p>
                  </div>
                  
                </div>
              </div>

              <div className="h-full lg:hidden">
                <div className="sticky top-20 flex flex-col gap-8">
                  <div>
                    <h3 className="font-extrabold text-4xl">MAIS DETALHES</h3>
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>

              <Link className="text-hover font-extrabold w-47" href={"#header"}>VOLTAR PARA O TOPO ↑</Link>

        </div>
      </div>
    </section>
  );
}
