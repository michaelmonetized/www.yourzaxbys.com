import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh gap-4">
      <Image src="/logo.svg" alt="Zaxby's" width={210} height={51} />
      <Image src="/chicken.svg" alt="Zaxby's" width={95} height={95} />
      <h1 className={`text-4xl font-black uppercase`}>{"Southern Fried"}</h1>
      <h2 className={`text-8xl font-casual text-cyan-400`}>{"Shrimp"}</h2>
      <h3 className={`text-4xl font-black uppercase p-4 bg-cyan-400`}>
        {"Featuring ZaxSeas Surf & Turf Meal"}
      </h3>
    </div>
  );
}
