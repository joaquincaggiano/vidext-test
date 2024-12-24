"use client"

import { Card, CardContent } from "../ui/card";
import LikeSvg from "../icons/like-svg";
import ViewSvg from "../icons/view-svg";
import { useState } from "react";
import { updateVideo } from "@/actions/video-actions";
import { useRouter } from "next/navigation";
import { VideoInterface } from "@/interfaces/video";

const VideoCard = ({
  video,
  isLoading,
  handleUpdate,
}: {
  video: VideoInterface;
  isLoading: boolean;
  handleUpdate: (videoId: number, key: "views" | "likes", value: number) => void;
}) => {
  const router = useRouter();

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <div className="aspect-video relative">
            <video
              src={video.s3Url}
              controls
              onEnded={() => handleUpdate(video.id, "views", video.views + 1)}
              // autoPlay
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <button onClick={() => handleUpdate(video.id, "likes", video.likes + 1)} disabled={isLoading}>
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

          <button className="w-full bg-vidextGreen py-2 rounded-[20px] border-2 border-vidextGreen hover:bg-[#FFFF] text-black text-sm font-medium transition-all duration-200" onClick={() => router.push(`/video/${video.id}`)}>Ver más</button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
