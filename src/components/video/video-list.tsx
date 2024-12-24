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
import Link from "next/link";

interface Props {
  videos: VideoInterface[];
  totalPages: number;
  page: number;
}

const VideoList = ({ videos, totalPages, page }: Props) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-5">VidextHub</h1>

      {videos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {videos.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[calc(100vh-300px)]">
          <p className="text-center text-base text-black font-medium">
            Aún no hay videos, sé el primero en <Link href="/upload" className="font-bold hover:underline decoration-vidextGreen decoration-2 underline-offset-2">subir uno!</Link>
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={page === 1 ? "#" : `/?page=${page - 1}`}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink href={`/?page=${index + 1}`}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                href={page === totalPages ? "#" : `/?page=${page + 1}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default VideoList;
