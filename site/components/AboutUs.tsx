import Image from 'next/image'
import type { AboutUs } from 'types'
import {} from 'react'

export default function AboutUs({ aboutUs }: { aboutUs: AboutUs }) {
  if (!aboutUs || !aboutUs.text) return null

  return (
    <section className='mx-auto grid max-w-[1200px] items-center gap-10 px-4 pb-12 pt-10 text-slate-700 md:grid-cols-2'>
      <div className='grid gap-10'>
        <h2 className='font-nunito text-center text-4xl font-bold sm:text-left md:text-6xl'>
          About Us
        </h2>

        <div
          className='[&_p]:py-1'
          dangerouslySetInnerHTML={{ __html: aboutUs?.text ?? '' }}
        />
      </div>

      {aboutUs.image && (
        <Image
          src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${aboutUs.image}`}
          alt=''
          width={1200}
          height={700}
          className='w-full rounded-lg object-cover'
        />
      )}
    </section>
  )
}
