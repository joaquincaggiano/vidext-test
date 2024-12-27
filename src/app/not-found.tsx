"use client";

import VidextSvg from "@/components/svgs/vidext-svg";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center flex-grow py-5 px-8 sm:px-12">
      <main className="flex-grow flex flex-col justify-center items-center overflow-auto">
        <div className="flex flex-col items-center gap-5 w-full max-w-[400px] shadow-md !rounded-[20px] border-[1px] border-grey-500 p-5">
          <div className="text-black text-xl font-semibold text-center whitespace-pre-wrap">
            Ups! Página no encontrada
          </div>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="w-full bg-vidextGreen py-2 rounded-[20px] border-2 border-vidextGreen hover:bg-[#FFFF] text-black text-base font-medium transition-all duration-200"
          >
            Ir al inicio
          </button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
