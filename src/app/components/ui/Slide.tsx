import { projects } from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";

export default function Slide(props: {
  category: string;
  page: number;
}) {

  console.log(props.category)

  const filtered = props.category
    ? projects.filter((p) => p.category === props.category)
    : projects;

  const safeIndex =
    filtered.length > 0
      ? props.page % filtered.length
      : 0;

  const currentProject = filtered[safeIndex];

  if (!currentProject) return (
    <div className="h-50 relative overflow-hidden bg-amber-300 rounded-lg p-5 flex flex-col justify-end text-xl font-bold my-2">
      <h1 className="text-background">SEM PROJETOS NO MOMENTO</h1>
    </div>
  );

  return (
    <Link href={`/design/project/${currentProject.slug}`} className="group h-50 relative overflow-hidden rounded-lg p-5 flex flex-col justify-end text-2xl my-2 ">
      <div className="group:hover:text-black z-1">
        <h1 className="font-extrabold tracking-tighter">{currentProject.title}</h1>
        <p className="-mt-2 font-light text-xl">{currentProject.year}</p>
      </div>

      <Image className=" brightness-50 object-cover" src={currentProject.image} alt="123" fill/>

    </Link>
  );
}