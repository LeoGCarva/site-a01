import {
  FaRegWindowClose,
  FaRegWindowMinimize,
  FaRegWindowRestore,
} from "react-icons/fa";

export default function Page() {
  return (
    <div className="mt-10 flex gap-20">
      <div className="w-[70%]">
        <p className="border-b-2 border-white pb-4 text-2xl text-[#db050c]">
          {"</>"} - SOBRE / ABOUT
        </p>

        <h1 className="py-4 text-[1.25rem]">
          Essa é a página inicial, escolha qualquer projeto nos números acima...
        </h1>
        <h1 className="opacity-50">
          This is the home page, select any project from the numbers above....
        </h1>
      </div>
      <div className="border-2 w-2xl shadow-[10px_10px_#db050c] h-96 bg-[repeating-linear-gradient(135deg,#0C0C0C_0_14px,#141414_14px_28px)]">
        <p className="border p-3 flex justify-between bg-black">
          EXAMPLE.HTML
          <span className="flex gap-3 align-middle text-[#db050ccc]">
            <FaRegWindowMinimize />
            <FaRegWindowRestore />
            <FaRegWindowClose />
          </span>
        </p>
        <p className="opacity-70 w-full h-[80%] flex flex-col items-center justify-center">
          portrait photo <span>640 × 800</span>
        </p>
      </div>
    </div>
  );
}
