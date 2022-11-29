import Image from 'next/image'
import type { Gallery } from 'types'

export default function PhotoGallery({ gallery }: { gallery: Gallery[] }) {
  return (
    <section className='bg-red-400 py-20 text-white'>
      <div className='mx-auto max-w-[1200px] px-6 pb-8'>
        <h2 className='text-center text-4xl'>PHOTO GALLERY</h2>
        <div className='mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3'>
          {gallery.map(({  image }) => (
            <div key={image}>
              <Image
                height={550}
                width={550}
                src={`https://a4ida36s.directus.app/assets/${image}`}
                alt=''
                className='rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
