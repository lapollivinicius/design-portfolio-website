import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import ProjectDisplay from "@/app/components/ui/ProjectDisplay";
import { projects } from "@/data/projects.json"

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
        
        <ProjectDisplay data={project} />
      </main>
      <Footer className="flex w-full justify-center " />
    </div>
  );
}
