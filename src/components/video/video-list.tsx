"use client";

import { VideoSchema } from "@/db/schema";
import VideoCard from "./video-card";
import { VideoPlayer } from "./video-player";
import { useState } from "react";

interface Props {
  videos: VideoSchema[];
}

const VideoList = ({ videos }: Props) => {
    const [selectedVideo, setSelectedVideo] = useState<VideoSchema | null>(null);
  return (
    <div>
      <h1>VideoList</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onPlay={() => setSelectedVideo(video)}
          />
        ))}
      </div>

      <VideoPlayer
        isOpen={!!selectedVideo}
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};

export default VideoList;
