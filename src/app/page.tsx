import { serverClient } from "@/client/server-client";
import VideoList from "@/components/video/video-list";

type SearchParams = Promise<{ page: string }>;

const HydrationSuppressor = ({ children }: { children: React.ReactNode }) => {
  return <div suppressHydrationWarning>{children}</div>;
};

const HomePage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { page } = await searchParams;
  const pageNumber = parseInt(page ?? "1", 10);
  const { videos, totalPages } = await serverClient.video.videoList.query({page: pageNumber});

  return (
    <HydrationSuppressor>
      <VideoList videos={videos} totalPages={totalPages} page={pageNumber} />
    </HydrationSuppressor>
  );
};

export default HomePage;
