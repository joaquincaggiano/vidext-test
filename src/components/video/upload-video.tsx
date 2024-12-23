"use client";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
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
      <div className="flex flex-col items-center justify-center gap-5 w-[400px]">
        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="title">Título</Label>
          <div className="flex flex-col w-full">
            <Input
              id="title"
              {...register("title")}
              type="text"
              placeholder="Título del video"
            />

            <div className="text-red-500 text-sm font-medium">
              {errors.title?.message?.toString() || ""}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="description">Descripción</Label>
          <div className="flex flex-col w-full">
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Descripción del video"
            />
            <div className="text-red-500 text-sm font-medium">
              {errors.description?.message?.toString() || ""}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="video">Video</Label>
          <Input
            id="video"
            // {...register('video')}
            type="file"
            placeholder="Selecciona un video"
            accept="video/*"
            onChange={(e) => setSelectedVideo(e.target.files?.[0])}
          />
          {/* {errors.video && <p>Debes seleccionar un video</p>} */}
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
