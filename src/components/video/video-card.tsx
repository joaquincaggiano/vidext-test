import React from "react";
import { VideoSchema } from "@/db/schema";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Play } from "lucide-react";

const VideoCard = ({
  video,
  onPlay,
}: {
  video: VideoSchema;
  onPlay: () => void;
}) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          {/* <Image
            src={video.s3Url}
            alt={video.title}
            fill
            className="object-cover"
          /> */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full w-12 h-12"
              onClick={onPlay}
            >
              <Play className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
          <Button  className="w-full">
            Ver más
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
