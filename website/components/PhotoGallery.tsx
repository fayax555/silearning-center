import Image from 'next/image'
import Link from 'next/link'
import type { Gallery } from 'types'

export default function PhotoGallery({ gallery }: { gallery: Gallery[] }) {
  return (
    <section className='bg-zinc-100 py-20 pb-32'>
      <div className='mx-auto max-w-[1200px] px-6 pb-8'>
        <h2 className='text-center text-3xl font-bold text-slate-700 md:text-4xl'>
          PHOTO GALLERY
        </h2>
        <div className='mt-16 grid justify-center gap-10 md:grid-flow-col'>
          {gallery.map(({ id, title, thumbnail }) => (
            <Link href={`/gallery/${id}`} key={id} className='relative grid '>
              <div className='z-10 bg-white p-5 shadow-md'>
                <Image
                  height={300}
                  width={300}
                  src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${thumbnail}`}
                  alt=''
                  className='block h-[88%] object-cover'
                />
                <h3 className='mt-3 pb-5 text-center text-lg -translate-y-1 font-bold text-violet-500'>
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
