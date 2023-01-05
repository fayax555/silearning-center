import Image from 'next/image'
import Link from 'next/link'
import type { Gallery } from 'types'
import { slugify } from 'utils'

export default function PhotoGallery({ gallery }: { gallery: Gallery[] }) {
  if(!gallery.length) return null
  
  return (
    <section className='bg-slate-50 py-20 pb-32'>
      <div className='mx-auto max-w-[1200px] px-6 pb-8'>
        <h2 className='text-center text-3xl font-bold text-slate-700 md:text-4xl'>
          GALLERY
        </h2>
        <div className='mt-16 grid justify-center gap-10 md:grid-flow-col'>
          {gallery.map(({ title, thumbnail }) => (
            <Link
              href={`/gallery/${slugify(title)}`}
              key={title}
              className='relative grid '
            >
              <div className='z-10 bg-white p-5 shadow-md'>
                <Image
                  height={300}
                  width={300}
                  src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${thumbnail}`}
                  alt=''
                  className='block h-[250px] object-cover'
                />
                <h3 className='mt-3 text-center text-lg font-bold text-violet-500'>
                  {title}
                </h3>
              </div>
              <div className='rotate absolute inset-0 shadow-md' />
            </Link>
          ))}
        </div>
      </div>
      <Link
        className='mx-auto mt-5 block w-[140px] rounded-md bg-violet-600 px-4 py-2 text-center font-bold text-violet-100 transition hover:bg-violet-800'
        href='/gallery'
      >
        View More
      </Link>
    </section>
  )
}
