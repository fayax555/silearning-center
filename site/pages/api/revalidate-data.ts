import type { NextApiRequest, NextApiResponse } from 'next'
import { EventsSchema, GallerySchema } from 'types'
import { Directus, slugify } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('REQ QUERY', req.query)

  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const directus = Directus()

    const galleryRes = await directus.items('gallery').readByQuery({
      fields: ['id', 'title'],
    })

    const eventsRes = await directus.items('upcoming_events').readByQuery({
      fields: ['name', 'start', 'end', 'description', 'image'],
    })

    const galleryList = GallerySchema.parse(galleryRes.data)
    const eventsList = EventsSchema.parse(eventsRes.data)

    await res.revalidate('/')
    await res.revalidate('/admission')
    await res.revalidate('/gallery')

    galleryList.forEach(async ({ title }) => {
      await res.revalidate(`/gallery/${slugify(title)}`)
    })

    eventsList.forEach(async ({ name }) => {
      await res.revalidate(`/events/${slugify(name)}`)
    })

    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
