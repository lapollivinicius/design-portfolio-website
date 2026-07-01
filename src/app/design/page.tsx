import Header from "../components/layout/Header";
import Design from "../components/layout/Design";
import Logo from "../components/ui/Logo";
import { Suspense } from "react";



export default function Page() {

  return (
    <div>
      <Logo />
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Design />
        </Suspense>
      </main>
    </div>
  )

}