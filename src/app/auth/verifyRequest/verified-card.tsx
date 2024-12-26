"use client";

import VidextSvg from "@/components/svgs/vidext-svg";

const VerifiedCard = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-5 px-8 sm:px-12">
      <div className="flex justify-center items-center w-full">
        <VidextSvg width="96" height="28" />
      </div>

      <main className="flex-grow flex flex-col justify-center items-center overflow-auto">
        <div className="flex flex-col gap-2 shadow-md !rounded-[20px] border-[1px] border-grey-500 p-5">
          <h1 className="text-2xl text-center font-semibold text-black">
            Consulta tu correo
          </h1>

          <div className="w-full max-w-[332px] text-black text-sm font-normal text-center">
            Te hemos enviado un link a tu bandeja de correo para poder iniciar
            sesión
          </div>
        </div>
      </main>
    </div>
  );
};

export default VerifiedCard;
