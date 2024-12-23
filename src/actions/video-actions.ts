"use server";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { bucketUrl } from "@/constants/bucketUrl";
import { redirect } from "next/navigation";
import { serverClient } from "@/client/server-client";

const s3 = new S3Client({
  region: process.env.AWS_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});
const s3Bucket = process.env.AWS_S3_BUCKET_NAME || "";

export const createVideo = async (formData: FormData, videoFile: File) => {
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const fileExtension = videoFile.name.split(".").pop();
    const s3Key = `videos/${Date.now()}-${title.replace(
      /\s/g,
      "-"
    )}.${fileExtension}`;

    const fileBuffer = await videoFile.arrayBuffer();
    const buffer = Buffer.from(fileBuffer);

    const params = {
      Bucket: s3Bucket,
      Key: s3Key,
      Body: buffer,
    };

    // Subimos el video a S3
    const command = new PutObjectCommand(params);
    await s3.send(command);

    // Creamos el video en la base de datos
    await serverClient.video.uploadVideo.mutate({
      title,
      description,
      s3Url: `${bucketUrl}${s3Key}`,
    });
    // const res = await fetch(
    //   "http://localhost:3000/api/trpc/video.uploadVideo",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       title,
    //       description,
    //       s3Url: `${bucketUrl}${s3Key}`,
    //     }),
    //   }
    // );

    // if (!res.ok) {
    //   throw new Error("Error al subir el video");
    // }
  } catch (error) {
    console.log(error);
  }
  redirect("/");
};

export const getVideos = async (page: number) => {
  try {
    const res = await fetch(`http://localhost:3000/api/trpc/video.videoList`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page }),
    });

    if (!res.ok) {
      throw new Error("Error al obtener los videos");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
