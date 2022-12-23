import type { NextApiRequest, NextApiResponse } from 'next'
import { GallerySchema } from 'types'
import { Directus } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query.secret)
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const directus = Directus()

    const galleryRes = await directus.items('gallery').readByQuery({
      fields: ['id', 'title'],
    })

    const galleryList = GallerySchema.parse(galleryRes.data)

    await res.revalidate('/')
    await res.revalidate('/admission')
    await res.revalidate('/gallery')

    galleryList.forEach(async ({ id }) => {
      await res.revalidate(`/gallery/${id}`)
    })

    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
