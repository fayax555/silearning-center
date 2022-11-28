import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
    await res.revalidate('/')
    return res.json({ revalidated: true })
  
}
