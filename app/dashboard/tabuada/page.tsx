import {
  FaRegWindowClose,
  FaRegWindowMinimize,
  FaRegWindowRestore,
} from "react-icons/fa";

const teste = {
  name: "teste",
  dois: "teste",
};

export default function Page() {
  return (
    <div className="mt-10">
      <div>
        <p className="text-2xl text-[#db050c]">{"001"} - Tabuada</p>
        <h1 className="border-b-2 border-white py-5 pb-10 text-4xl">
          Esse projeto é feito para treinar contas básicas
        </h1>
      </div>

      <div className="w-[75%] h-202.5 mt-10 border-2 shadow-[10px_10px_#db050c] bg-[repeating-linear-gradient(135deg,#0C0C0C_0_14px,#141414_14px_28px)]">
        <p className="border p-3 flex justify-between bg-black">
          TABUADA.HTML
          <span className="flex gap-3 align-middle text-[#db050ccc]">
            <FaRegWindowMinimize />
            <FaRegWindowRestore />
            <FaRegWindowClose />
          </span>
        </p>
        <iframe
          src="https://www.portaleducar.com.br/"
          width="100%"
          height="90.5%"
        ></iframe>
        <p>{JSON.stringify(teste)}</p>
      </div>
    </div>
  );
}
