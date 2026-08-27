import Link from "next/link";

export default function Home() {
  return (
    <div
      className={`h-screen flex flex-col gap-2`}
    >
      <h1 className={`text-8xl`}>
        Oi - <span className="text-[#9f0A10]">BEM VINDO</span>
      </h1>
      <p className="text-4xl">Esse site armazena todos meus projetos</p>
      <p className="opacity-50 text-2xl">This site stores all of my projects</p>

      <Link
        href={"/dashboard"}
        className="w-4xl text-2xl mt-20 tracking-[2px] no-underline uppercase cursor-pointer shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px] relative select-none touch-manipulation px-[0.5em] py-[0.25em] border-[3px] border-solid active:shadow-[0px_0px_0px_0px] active:left-1.25 active:top-1.25 md:px-[0.75em] md:py-[0.25em]"
      >
        Começar / Start
      </Link>
    </div>
  );
}
