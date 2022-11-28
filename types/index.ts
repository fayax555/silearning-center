import { z } from 'zod'

export const FeatureSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string()
})

export type Feature = z.infer<typeof FeatureSchema>
