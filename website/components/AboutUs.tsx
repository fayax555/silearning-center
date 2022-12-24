import Image from 'next/image'
import type { AboutUs } from 'types'

export default function AboutUs({ aboutUs }: { aboutUs: AboutUs }) {
  return (
    <section className='mx-auto grid max-w-[1200px] items-center gap-10 px-4 pb-12 pt-10 text-slate-700 md:grid-cols-2'>
      <div className='grid gap-10'>
        <h2 className='font-nunito text-center text-4xl font-bold sm:text-left md:text-6xl'>
          About Us
        </h2>
        <p>{aboutUs.text}</p>
      </div>

      <Image
        src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${aboutUs.image}`}
        alt=''
        width={1200}
        height={600}
        className='rounded-lg object-cover'
      />
    </section>
  )
}
