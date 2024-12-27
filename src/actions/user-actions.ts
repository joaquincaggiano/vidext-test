"use server";

import { serverClient } from "@/client/server-client";

export const createUser = async (formData: FormData) => {
  try {
    const email = formData.get("email") as string;

    await serverClient.user.createUser.mutate({
      email,
    });

    return { success: true, message: "User creado correctamente" };
  } catch (error: unknown) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error desconocido",
    };
  }
};
