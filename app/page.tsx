import Image from "next/image";
import bgImg from "../public/background_img.jpg";
import { Hero } from "./components/hero";
import { GetStartedModal } from "./components/get-started-modal";

export default function Home() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <GetStartedModal />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <Hero />
      </div>
    </div>
  );
}
