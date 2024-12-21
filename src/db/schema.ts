import { pgTable, serial, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const videos = pgTable("videos", {
  id: serial("id").primaryKey(), // ID autoincremental
  title: varchar("title", { length: 255 }).notNull(), // Título del video
  description: text("description"), // Descripción opcional
  s3Url: varchar("s3_url", { length: 512 }).notNull(), // URL del video en S3
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(), // Fecha de creación
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(), // Última actualización
});
