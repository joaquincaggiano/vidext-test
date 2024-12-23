"use client"

import { VideoSchema } from "@/db/schema";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const VideoCard = ({
  video,
}: {
  video: VideoSchema;
}) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <div className="aspect-video relative">
            <video
              src={video.s3Url}
              controls
              // autoPlay
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
          <Button className="w-full">Ver más</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
