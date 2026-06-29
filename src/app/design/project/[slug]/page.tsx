import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import { projects } from "@/data/projects.json"
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {

  const {slug} = await params

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return <h1 className="text-white">Projeto não encontrado.</h1>;
  }

  return (
    <div>
      <Header />
      <main className="text-white">
        <Link href={"/design?path=project"}> ← VOLTAR</Link>
        <h1>{project.title}</h1>
        <p>{project.copy}</p>
        <p>{project.year}</p>
      </main>
      <Footer />
    </div>
  );
}
