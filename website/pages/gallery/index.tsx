import Layout from 'components/Layout'
import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GallerySchema } from 'types'
import { Directus } from 'utils'

export default function GalleryPage({
  gallery,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title='Gallery'>
      <div className='mt-16 grid justify-center gap-10 md:grid-flow-col'>
        {gallery.map(({ id, title, thumbnail }) => (
          <Link
            href={`/gallery/${id}`}
            key={id}
            className='relative grid h-[350px] w-[350px]'
          >
            <div className='z-10 bg-white p-5 shadow-md'>
              <Image
                height={300}
                width={300}
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${thumbnail}`}
                alt=''
                className='block h-[88%] object-cover'
              />
              <h3 className='mt-3 text-center text-lg font-bold text-violet-500'>
                {title}
              </h3>
            </div>
            <div className='rotate absolute inset-0 shadow-md' />
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const directus =  Directus()

  const galleryRes = await directus.items('gallery').readByQuery({
    fields: ['id', 'title', 'thumbnail'],
  })

  const gallery = GallerySchema.parse(galleryRes.data)

  return {
    props: { gallery },
  }
}
