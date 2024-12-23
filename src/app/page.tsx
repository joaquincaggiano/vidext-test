import { getVideos } from "@/actions/video-actions";
import VideoList from "@/components/video/video-list";

type SearchParams = Promise<{ page: string }>

const HomePage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { page } = await searchParams;
  const pageNumber = parseInt(page ?? "1", 10);
  const videos = await getVideos(pageNumber);
  console.log(videos);
  return (
    <div>
      <VideoList videos={videos.result.data} />
    </div>
  )
};

export default HomePage;
