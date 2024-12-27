"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import VidextSvg from "@/components/svgs/vidext-svg";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/zod-schemas/user";
import { createUser } from "@/actions/user-actions";
import { Label } from "@/components/ui/label";
import Loading from "@/app/loading";
import ModalError from "@/components/modal/modal-error";

const SignInCard = () => {
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [openModalError, setOpenModalError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", data.email);

    try {
      const response = await createUser(formData);
      if (!response.success) {
        setOpenModalError(true);
        setErrorMessage(response.message);
        return;
      }

      signIn("email", {
        email: data.email,
        callbackUrl: searchParams.get("callbackUrl") || "/",
      }); 
    } catch (error: unknown) {
      setOpenModalError(true);
      setErrorMessage(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-5 px-8 sm:px-12">
      <div className="flex justify-center items-center w-full">
        <VidextSvg width="96" height="28" />
      </div>

      <main className="flex-grow flex flex-col justify-center items-center overflow-auto">
        <div
          className="text-center text-4xl font-semibold mb-10"
          style={{ color: "black" }}
        >
          Bienvenido
        </div>
        <div className="text-black text-center text-base font-normal mb-10 w-full sm:max-w-[500px]">
          Para iniciar sesión, introduce tu correo electrónico y te llegará un
          mail que te llevará directamente a la plataforma
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-5 w-full max-w-[400px] shadow-md !rounded-[20px] border-[1px] border-grey-500 p-5"
        >
          {/* Email */}
          <div className="flex flex-col gap-2 w-full">
            <Label htmlFor="email">Correo electrónico</Label>
            <div className="flex flex-col gap-[2px] w-full">
              <input
                id="email"
                {...register("email")}
                type="text"
                placeholder="Correo electrónico"
                className="input-vidext"
              />

              <div className="text-red-500 text-xs font-medium">
                {errors.email?.message?.toString() || ""}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-vidextGreen py-2 rounded-[20px] border-2 border-vidextGreen hover:bg-[#FFFF] text-black text-base font-medium transition-all duration-200"
            disabled={isLoading}
          >
            Iniciar sesión
          </button>
        </form>
      </main>

      <ModalError
        message={errorMessage}
        open={openModalError}
        setOpen={setOpenModalError}
      />
    </div>
  );
};

export default SignInCard;
