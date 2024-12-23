import { pgTable, serial, varchar, text, timestamp, integer } from "drizzle-orm/pg-core";

export const videos = pgTable("videos", {
  id: serial("id").primaryKey(), // ID autoincremental
  title: varchar("title", { length: 255 }).notNull(), // Título del video
  description: text("description").notNull(), // Descripción opcional
  s3Url: varchar("s3_url", { length: 512 }).notNull(), // URL del video en S3
  views: integer("views").default(0).notNull(), // Cantidad de vistas,
  likes: integer("likes").default(0).notNull(), // Cantidad de likes
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(), // Fecha de creación
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(), // Última actualización
});

export type VideoSchema = typeof videos.$inferInsert;
