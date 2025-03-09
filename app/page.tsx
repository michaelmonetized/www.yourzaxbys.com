import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh">
      <Image src="/chicken.svg" alt="Zaxby's" width={95} height={95} />
      <Image src="/logo.svg" alt="Zaxby's" width={210} height={51} />
      <h1 className={`text-4xl font-black capitalize`}>{"Southern Fried"}</h1>
      <h2 className={`text-8xl font-casual`}>{"Shrimp"}</h2>
    </div>
  );
}
