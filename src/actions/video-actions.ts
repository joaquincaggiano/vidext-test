"use server"

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { appRouter } from '@/server';

export const createVideo = async (formData: FormData) => {
    try {
        const s3 = new S3Client({
            region: process.env.AWS_REGION || "",
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
            },
        });
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const file = formData.get("video") as File;

        const s3Bucket = process.env.AWS_S3_BUCKET_NAME || "";
        const s3Key = `videos/${Date.now()}-${title}`;

        const params = {
            Bucket: s3Bucket,
            Key: s3Key,
            Body: file,
        }

        const command = new PutObjectCommand(params);
        const data = await s3.send(command);
        console.log("data", data);

        const addVideo = await appRouter.video.createVideo.caller({
            title,
            description,
            video: s3Key,
        });

        console.log("addVideo", addVideo);

    } catch (error) {
        console.log(error);
    }
};
