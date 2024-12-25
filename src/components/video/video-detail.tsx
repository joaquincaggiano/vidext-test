"use client";

import { updateVideo } from "@/actions/video-actions";
import { VideoInterface } from "@/interfaces/video";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LikeSvg from "../icons/like-svg";
import ViewSvg from "../icons/view-svg";
import { Button } from "../ui/button";
import ArrowLeftSvg from "../icons/arrow-left-svg";
import { formattedDate } from "@/utils/date-functions";

const VideoDetail = ({ video }: { video: VideoInterface }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (key: "views" | "likes", value: number) => {
    setIsLoading(true);
    await updateVideo(video.id, key, value);
    setIsLoading(false);
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => router.back()}
        className="rounded-full mb-5 hover:bg-vidextGreen hover:text-white"
      >
        <ArrowLeftSvg />
      </Button>

      <div className="flex flex-col lg:flex-row gap-4 mb-10">
        {/* Video e info */}
        <div className="flex flex-col gap-2">
          <div className="relative aspect-video">
            <video
              src={video.s3Url}
              controls
              onEnded={() => handleUpdate("views", video.views + 1)}
              autoPlay
              width={800}
              height={450}
              // className="w-full max-w-[800px] h-full rounded-md"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-black font-normal">
              {formattedDate(video.createdAt)}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleUpdate("likes", video.likes + 1)}
                  disabled={isLoading}
                >
                  <LikeSvg width={24} height={24} color="#0077d2" />
                </button>
                <p className="text-sm font-medium">{video.likes}</p>
              </div>

              <div className="flex items-center gap-1">
                <ViewSvg width={24} height={24} color="#000000" />
                <p className="text-sm font-medium">{video.views}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Title and description */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg sm:text-2xl font-semibold">{video.title}</h1>

          <p className="text-sm text-black">{video.description}</p>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
