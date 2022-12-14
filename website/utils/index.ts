import { Directus as DirectusSDK } from '@directus/sdk'

export function Directus() {
  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL
  if (!directusUrl) throw new Error('NEXT_PUBLIC_DIRECTUS_URL is not defined')
  return new DirectusSDK(directusUrl)
}
