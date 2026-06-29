import "@/app/globals.css";
import Image from "next/image";

export default function Logo() {
  return (
    <a href="" className="stroke-2 fixed top-5 right-7 -rotate-12 hover:scale-110 active:scale-105 transition-all duration-300">
      <div className="h-15 w-15 relative">
        <Image alt="logo" src={"/logo.svg"} fill/>
      </div>
    </a>
  );
}
