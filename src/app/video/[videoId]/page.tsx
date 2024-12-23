import { serverClient } from "@/client/server-client";
import VideoDetail from "@/components/video/video-detail";

type Params = Promise<{ videoId: number }>;

const VideoDetailPage = async ({ params }: { params: Params }) => {
  const { videoId } = await params;
  const video = await serverClient.video.videoById.query(videoId);
  
  return <VideoDetail video={video[0]} />;
}

export default VideoDetailPage