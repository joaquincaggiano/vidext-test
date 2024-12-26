import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import SignInCard from "@/app/auth/signIn/sign-in-card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await getServerSession(authOptions);
  console.log("session signin:", session);

  if (session) {
    redirect("/");
  }

  return <SignInCard />;
};

export default SignIn;
