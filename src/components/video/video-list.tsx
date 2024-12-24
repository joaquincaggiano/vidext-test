"use client";

import { VideoInterface } from "@/interfaces/video";
import VideoCard from "./video-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface Props {
  videos: VideoInterface[];
  totalPages: number;
  page: number;
}

const VideoList = ({ videos, totalPages, page }: Props) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-5">VidextHub</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {videos.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={page === 1 ? "#" : `/?page=${page - 1}`}  />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink href={`/?page=${index + 1}`}>{index + 1}</PaginationLink>
            </PaginationItem>
          ))}

          {totalPages > 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext href={page === totalPages ? "#" : `/?page=${page + 1}`}  />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default VideoList;
