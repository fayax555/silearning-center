import type { NextApiRequest, NextApiResponse } from 'next'
import { EventsSchema, GallerySchema } from 'types'
import { directusItems, slugify } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('REQ QUERY', req.query)

  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const galleryRes = await directusItems('gallery').read({
      fields: ['id', 'title'],
    })

    const eventsRes = await directusItems('upcoming_events').read({
      fields: ['name', 'start', 'end', 'description', 'image'],
    })

    const galleryList = GallerySchema.parse(galleryRes)
    const eventsList = EventsSchema.parse(eventsRes)

    await res.revalidate('/')
    await res.revalidate('/admission')
    await res.revalidate('/gallery')

    for (const g of galleryList)
      await res.revalidate(`/gallery/${slugify(g.title)}`)

    for (const e of eventsList)
      await res.revalidate(`/events/${slugify(e.name)}`)

    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
