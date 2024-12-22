"use client";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FieldValues, Form, useForm } from "react-hook-form";
import { Video, videoSchema } from "@/zod-schemas/video";
import { zodResolver } from "@hookform/resolvers/zod";
import { createVideo } from "@/actions/video-actions";
import { Button } from "../ui/button";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Label } from "../ui/label";
import { useState } from "react";

const UploadVideo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(videoSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("video", data.video);

    try {
      const response = await createVideo(formData);
      console.log(response);
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
          <Input
            id="title"
            {...register('title')}
            type="text"
            placeholder="Título del video"
          />
          {errors.title && <p>Debes ingresar un título</p>}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="description">Descripción</Label>
          <Textarea
            id="description"
            {...register('description')}
            placeholder="Descripción del video"
          />
          {errors.description && <p>Debes ingresar una descripción</p>}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Label htmlFor="video">Video</Label>
          <Input
            id="video"
            {...register('video')}
            type="file"
            placeholder="Selecciona un video"
          />
          {errors.video && <p>Debes seleccionar un video</p>}
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
