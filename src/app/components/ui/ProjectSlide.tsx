import { projects } from "@/data/projects.json";
import Link from "next/link";

export default function ProjectSlide(props: {
  category: string;
  page: number;
}) {
  const filtered = props.category
    ? projects.filter((p) => p.category === props.category)
    : projects;

  const safeIndex =
    filtered.length > 0
      ? props.page % filtered.length
      : 0;

  const currentProject = filtered[safeIndex];

  if (!currentProject) return null;

  return (
    <Link href={`/design/project/${currentProject.slug}`} className="h-50 relative overflow-hidden rounded-lg p-5 flex flex-col justify-end text-xl font-bold my-2">
      <h1>{currentProject.title}</h1>
      <p>{currentProject.year}</p>

      <img className="absolute inset-0 -z-1 brightness-50" src="https://images.unsplash.com/photo-1782141632444-599fd376592c?q=80&w=885&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="123" />

    </Link>
  );
}