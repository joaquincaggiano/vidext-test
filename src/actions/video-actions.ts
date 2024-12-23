"use server";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { appRouter } from "@/server";
import { bucketUrl } from "@/constants/bucketUrl";

const s3 = new S3Client({
  region: process.env.AWS_REGION || "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});
const s3Bucket = process.env.AWS_S3_BUCKET_NAME || "";

export const createVideo = async (formData: FormData, videoFile: File) => {
  console.log("Se ejecuta la función createVideo");
  try {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    const fileExtension = videoFile.name.split('.').pop();
    const s3Key = `videos/${Date.now()}-${title.replace(/\s/g, '-')}.${fileExtension}`;

    const fileBuffer = await videoFile.arrayBuffer();
    const buffer = Buffer.from(fileBuffer);

    const params = {
      Bucket: s3Bucket,
      Key: s3Key,
      Body: buffer,
    };

    const command = new PutObjectCommand(params);
    const data = await s3.send(command);
    console.log("data", data);

    // const addVideo = await appRouter.video.createVideo.caller({
    //   title,
    //   description,
    //   s3Url: `${bucketUrl}${s3Key}`,
    // });

    // console.log("addVideo", addVideo);
  } catch (error) {
    console.log(error);
  }
};
