import ErrorAuthCard from "@/app/auth/error/error-auth-card";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

const ErrorPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return <ErrorAuthCard />;
};

export default ErrorPage;
