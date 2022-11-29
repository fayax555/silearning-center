import { z } from 'zod'

export const FeatureSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string(),
})

export const TeacherSchema = z.object({
  id: z.number(),
  name: z.string(),
  title: z.string(),
  image: z.string(),
})

export const GallerySchema = z.object({
  id: z.number(),
  image: z.string(),
})

export const ClassSchema = z.object({
  id: z.number(),
  image: z.string(),
  name: z.string(),
  age_group: z.string(),
  class_size: z.string(),
})

export type Feature = z.infer<typeof FeatureSchema>
export type Teacher = z.infer<typeof TeacherSchema>
export type Gallery = z.infer<typeof GallerySchema>
export type Class = z.infer<typeof ClassSchema>
