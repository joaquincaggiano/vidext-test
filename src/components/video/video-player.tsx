"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { VideoSchema } from "@/db/schema";

interface VideoPlayerProps {
  isOpen: boolean;
  video: VideoSchema | null;
  onClose: () => void;
}

export function VideoPlayer({ isOpen, video, onClose }: VideoPlayerProps) {
  if (!video) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>{video.title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video relative">
          <video
            src={video.s3Url}
            controls
            autoPlay
            className="w-full h-full rounded-md"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}