import { z } from 'zod'

export const HeroSchema = z.object({
  image: z.string().nullish(),
}).nullish()

export const FeatureSchema = z
  .object({
    id: z.number(),
    title: z.string().nullish(),
    image: z.string().nullish(),
  })
  .array()

export const TeacherSchema = z
  .object({
    id: z.number(),
    name: z.string().nullish(),
    title: z.string().nullish(),
    image: z.string().nullish(),
  })
  .array()

export const GallerySchema = z
  .object({
    id: z.number(),
    title: z.string(),
    thumbnail: z.string().nullish(),
  })
  .array()

export const ClassSchema = z
  .object({
    id: z.number(),
    image: z.string().nullish(),
    name: z.string().nullish(),
    age_group: z.string().nullish(),
    class_size: z.string().nullish(),
  })
  .array()

export const AboutUsSchema = z.object({
  text: z.string().nullish(),
  image: z.string().nullish(),
}).nullish()

export const ProgramSchema = z
  .object({
    name: z.string(),
    image: z.string().nullish(),
    age: z.string().nullish(),
  })
  .array()

export const TestimonialsSchema = z
  .object({
    id: z.number(),
    name: z.string().nullish(),
    title: z.string().nullish(),
    testimonial: z.string().nullish(),
  })
  .array()

export const EventsSchema = z
  .object({
    name: z.string(),
    start: z.string().nullish(),
    end: z.string().nullish(),
    description: z.string().nullish(),
    image: z.string().nullish(),
  })
  .array()

export type Feature = z.infer<typeof FeatureSchema>[number]
export type Teacher = z.infer<typeof TeacherSchema>[number]
export type Gallery = z.infer<typeof GallerySchema>[number]
export type Class = z.infer<typeof ClassSchema>[number]
export type AboutUs = z.infer<typeof AboutUsSchema>
export type Program = z.infer<typeof ProgramSchema>[number]
export type Testimonial = z.infer<typeof TestimonialsSchema>[number]
export type UpcomingEvent = z.infer<typeof EventsSchema>[number]
