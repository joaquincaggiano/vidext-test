"use client";

import { useRouter } from "next/navigation";
import VidextSvg from "../svgs/vidext-svg";

interface Props {
  message: string;
  showBackButton?: boolean;
}

const ErrorComponent = (props: Props) => {
  const { message, showBackButton = true } = props;
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-5 px-8 sm:px-12">
      <div className="flex justify-center items-center w-full">
        <VidextSvg width="96" height="28" />
      </div>

      <main className="flex-grow flex flex-col justify-center items-center overflow-auto">
        <div className="flex flex-col items-center gap-5 w-full max-w-[400px] shadow-md !rounded-[20px] border-[1px] border-grey-500 p-5">
          <div className="text-black text-xl font-semibold text-center whitespace-pre-wrap">
            {message}
          </div>

          {showBackButton && (
            <button
              type="button"
              onClick={() => router.back()}
              className="w-full bg-vidextGreen py-2 rounded-[20px] border-2 border-vidextGreen hover:bg-[#FFFF] text-black text-base font-medium transition-all duration-200"
            >
              Volver
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default ErrorComponent;