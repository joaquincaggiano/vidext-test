"use client";

import { VideoInterface } from "@/interfaces/video";
import VideoCard from "./video-card";

interface Props {
  videos: VideoInterface[];
}

const VideoList = ({ videos }: Props) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-5">
        VidextHub
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => {

          return <VideoCard key={video.id} video={video} />;
        })}
      </div>
    </div>
  );
};

export default VideoList;
