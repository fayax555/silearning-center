import { Directus as DirectusSDK } from '@directus/sdk'

export function Directus() {
  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL
  if (!directusUrl) throw new Error('NEXT_PUBLIC_DIRECTUS_URL is not defined')
  return new DirectusSDK(directusUrl)
}

export const directusItems = (name: string) => {
  const directus = Directus()

  return {
    async read({ fields }: { fields: string[] }) {
      const res = await directus
        .items(name)
        .readByQuery({ fields, filter: { status: { _eq: 'published' } } })

      return res.data
    },
  }
}

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
