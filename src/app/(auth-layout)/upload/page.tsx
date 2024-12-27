import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import UploadVideo from "@/components/video/upload-video";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const UploadVideoPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/auth/signIn");
  }

  const userId = session.user.id;

  return (
    <div className="flex flex-col gap-5">
      <UploadVideo userId={userId} />
    </div>
  );
};

export default UploadVideoPage;
