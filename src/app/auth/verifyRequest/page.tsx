import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import VerifiedCard from "@/app/auth/verifyRequest/verified-card";

const VerifiedEmail = async () => {
  const session = await getServerSession(authOptions);
  
  if (session) {
    redirect("/");
  }
  return <VerifiedCard />;
};

export default VerifiedEmail;
