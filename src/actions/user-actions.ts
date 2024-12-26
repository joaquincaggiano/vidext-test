"use server";

import { serverClient } from "@/client/server-client";

export const createUser = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;

    await serverClient.user.createUser.mutate({
      email,
    });

    return { success: true, message: "User creado correctamente" };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Error al crear el user",
    };
  }
};
