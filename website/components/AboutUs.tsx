import Image from 'next/image'
import type { AboutUs } from 'types'

export default function AboutUs({ aboutUs }: { aboutUs: AboutUs }) {
  return (
    <section className='mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-20 text-slate-700 md:grid-cols-2'>
      <Image
        src={`${process.env.NEXT_PUBLIC_URL}/cms/assets/${aboutUs.image}`}
        alt=''
        width={1200}
        height={600}
      />
      <div className='grid gap-10'>
        <h2 className='font-nunito text-4xl font-bold md:text-6xl'>About Us</h2>
        <p>{aboutUs.text}</p>
        {/* <a
          href='#'
          className='font-neue justify-self-start rounded-md bg-orange-600 px-8 py-4 text-xl text-white'
        >
          WHY KINDERGARTEN
        </a> */}
      </div>
    </section>
  )
}
