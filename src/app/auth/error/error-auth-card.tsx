"use client";

import { useRouter } from "next/navigation";
import VidextSvg from "@/components/svgs/vidext-svg";
import { Button } from "@/components/ui/button";

const ErrorAuthCard = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-5 px-8 sm:px-12">
      <div className="flex justify-center items-center w-full">
        <VidextSvg width="96" height="28" />
      </div>

      <main className="flex-grow flex flex-col justify-center items-center overflow-auto">
        <div className="flex flex-col justify-center items-center gap-3 shadow-md !rounded-[20px] border-[1px] border-grey-500 p-5">
          <h1 className="text-2xl text-center font-semibold text-black">Error</h1>

          <div className="w-full max-w-[332px] text-black text-sm font-normal text-center">
            Algo salió mal, por favor intenta nuevamente
          </div>

          <button
            onClick={() => router.push("/auth/signIn")}
            className="bg-red-500 text-white px-4 py-2 rounded-[8px] hover:bg-white hover:text-red-500 hover:border-red-500 border-[1px] transition-all duration-300"
          >
            Volver a intentarlo
          </button>
        </div>
      </main>
    </div>
  );
};

export default ErrorAuthCard;
