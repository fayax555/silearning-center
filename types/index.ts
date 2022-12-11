import { z } from 'zod'

export const FeatureSchema = z
  .object({
    id: z.number(),
    title: z.string().nullable(),
    image: z.string().nullable(),
  })
  .array()

export const TeacherSchema = z
  .object({
    id: z.number(),
    name: z.string().nullable(),
    title: z.string().nullable(),
    image: z.string().nullable(),
  })
  .array()

export const GallerySchema = z
  .object({
    id: z.number(),
    title: z.string().nullable(),
    thumbnail: z.string().nullish(),
  })
  .array()

export const ClassSchema = z
  .object({
    id: z.number(),
    image: z.string().nullable(),
    name: z.string().nullable(),
    age_group: z.string().nullable(),
    class_size: z.string().nullable(),
  })
  .array()

export const AboutUsSchema = z.object({
  text: z.string().nullable(),
  image: z.string().nullable(),
})

export type Feature = z.infer<typeof FeatureSchema>[number]
export type Teacher = z.infer<typeof TeacherSchema>[number]
export type Gallery = z.infer<typeof GallerySchema>[number]
export type Class = z.infer<typeof ClassSchema>[number]
export type AboutUs = z.infer<typeof AboutUsSchema>
