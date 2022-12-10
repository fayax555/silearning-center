import { Directus } from '@directus/sdk'
import Navbar from 'components/Navbar'
import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import React from 'react'
import { Gallery, GallerySchema } from 'types'

type GalleryPageProps = { gallery: Gallery & { images: string[] } }

export default function GalleryPage({ gallery }: GalleryPageProps) {
  console.log(gallery)
  return (
    <div className='mb-20'>
      <Navbar />
      <h1 className='mt-20 text-center text-4xl font-semibold'>
        {gallery.title}
      </h1>

      <div className='mx-auto mt-20 grid max-w-[1200px] gap-10 px-4'>
        {gallery.images?.map((image) => (
          <Image
            key={image}
            src={`https://a4ida36s.directus.app/assets/${image}`}
            alt=''
            height={500}
            width={500}
            className='h-auto w-full'
          />
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const directus = new Directus('https://a4ida36s.directus.app')

  const galleryRes = await directus.items('gallery').readByQuery({
    fields: ['id', 'title'],
  })

  const galleryFilesRes = await directus.items('gallery_files').readByQuery({
    fields: ['id', 'gallery_id', 'directus_files_id'],
  })

  const images = galleryFilesRes.data
    ?.map((file) => {
      const fileId = file.directus_files_id
      if (typeof fileId === 'string' && file.gallery_id !== Number(query.id))
        return fileId
    })
    .filter((file) => file !== undefined)

  const galleryList = GallerySchema.parse(galleryRes.data)
  const gallery = galleryList.find((g) => g.id === Number(query.id))

  return {
    props: { gallery: { ...gallery, images } },
  }
}
