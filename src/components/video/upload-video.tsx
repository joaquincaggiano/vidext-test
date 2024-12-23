"use client";

import { FieldValues, useForm } from "react-hook-form";
import { videoSchema } from "@/zod-schemas/video";
import { zodResolver } from "@hookform/resolvers/zod";
import { createVideo } from "@/actions/video-actions";
import { Label } from "../ui/label";
import { useState } from "react";

const UploadVideo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<File | undefined>(
    undefined
  );
  const [videoError, setVideoError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(videoSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    if (!selectedVideo) {
      setVideoError("Selecciona un video");
      return;
    }

    if (selectedVideo.size > 100000000) {
      setVideoError("El video no puede ser mayor a 100MB");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);

    try {
      const response = await createVideo(formData, selectedVideo);
      console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center"
    >
      <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[450px] border-[1px] border-[#8c8c8c] p-5 rounded-[20px] shadow-lg">
        {/* Title */}
        <div className="flex flex-col gap-2 w-full ">
          <Label htmlFor="title">Título</Label>
          <div className="flex flex-col gap-[2px] w-full">
            <input
              id="title"
              {...register("title")}
              type="text"
              placeholder="Título del video"
              className="input-vidext"
            />

            <div className="text-red-500 text-xs font-medium">
              {errors.title?.message?.toString() || ""}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="description">Descripción</Label>
          <div className="flex flex-col gap-[2px] w-full">
            <textarea
              id="description"
              {...register("description")}
              placeholder="Descripción del video"
              className="input-vidext"
            />
            <div className="text-red-500 text-xs font-medium">
              {errors.description?.message?.toString() || ""}
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="video">Video</Label>
          <div className="flex flex-col gap-[2px] w-full">
            <input
              id="video"
              type="file"
              placeholder="Selecciona un video"
              accept="video/*"
              className="input-vidext"
              onChange={(e) => {
                setVideoError(null);
                setSelectedVideo(e.target.files?.[0])}}
            />
            <div className="text-red-500 text-xs font-medium">
              {videoError || ""}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-vidextGreen py-2 rounded-[20px] border-2 border-vidextGreen hover:bg-[#FFFF] text-black text-base font-medium transition-all duration-200"
          disabled={isLoading}
        >
          {isLoading ? "Subiendo..." : "Subir"}
        </button>
      </div>
    </form>
  );
};

export default UploadVideo;
