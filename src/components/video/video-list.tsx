"use client";

import { VideoSchema } from "@/db/schema";
import VideoCard from "./video-card";
import { trpc } from "@/client";

interface Props {
  videos: VideoSchema[];
}

const VideoList = ({ videos }: Props) => {
  //   const { data, isLoading, error } = trpc.video.videoList.useQuery();

  //   if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>Error: {error.message}</div>;
  //   if (!data) return <div>No data</div>;
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-5">
        Nuestros videos
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
