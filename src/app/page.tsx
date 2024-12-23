import { getVideos } from "@/actions/video-actions";
import { serverClient } from "@/client/server-client";
import VideoList from "@/components/video/video-list";

type SearchParams = Promise<{ page: string }>;

const HomePage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { page } = await searchParams;
  // const pageNumber = parseInt(page ?? "1", 10);
  const videos = await serverClient.video.videoList.query();
  const videosData = videos.map((video) => ({
    ...video,
    createdAt: new Date(video.createdAt),
    updatedAt: new Date(video.updatedAt),
  }));

  return <VideoList videos={videosData} />
};

export default HomePage;
