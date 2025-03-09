import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh">
      <div className="flex flex-row items-center justify-center gap-4 p-4">
        <div className="flex flex-col items-center justify-center gap-4 min-w-1/2">
          <Image src="/logo.svg" alt="Zaxby's" width={210} height={51} />
          <Image src="/chicken.svg" alt="Zaxby's" width={95} height={95} />
          <h1 className={`text-4xl font-black uppercase`}>
            {"Southern Fried"}
          </h1>
          <h2 className={`text-8xl font-casual text-cyan-400`}>{"Shrimp"}</h2>
          <h3
            className={`text-2xl font-black uppercase p-4 bg-cyan-400 text-blue-950`}
          >
            {"Featuring ZaxSeas Surf & Turf Meal"}
          </h3>
        </div>
        <div>
          <Image
            src="/shrimp.png"
            alt="Zaxby's"
            width={6000}
            height={3375}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
