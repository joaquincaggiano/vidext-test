import { Resend } from 'resend';

const resend = new Resend(process.env.EMAIL_SERVER_PASSWORD);

export const sendMail = async (to: string, subject: string, html: string) => {
  return await resend.emails.send({
    from: process.env.EMAIL_SERVER_USER ?? "onboarding@resend.dev",
    to,
    subject,
    html
  });
}