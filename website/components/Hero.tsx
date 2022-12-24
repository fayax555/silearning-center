import Image from 'next/image'
import Link from 'next/link'

const green = 'hsl(72,64%,45%)'

export default function Hero({ heroImage }: { heroImage: string | null }) {
  return (
    <div
      className={
        'relative mx-auto grid min-h-[94.5vh] items-center bg-[hsl(187,65%,22%)] bg-cover bg-center bg-no-repeat '
      }
    >
      <div className='absolute inset-0 z-10 bg-slate-900 opacity-40' />
      <Image
        priority
        src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${heroImage}`}
        height={1980}
        width={1080}
        alt=''
        className='absolute inset-0 h-full w-full object-cover'
      />
      <div className='z-10 mx-auto grid  max-w-[1200px] gap-10 px-4 text-center md:w-full md:px-8'>
        <h1 className='text-5xl font-extrabold leading-[1.1] text-[hsl(93,39%,95%)] sm:text-7xl'>
          <div>WELCOME TO </div>
          <div className='text-[hsl(103,91%,66%)]'>SIYAMA IMAD</div>
          <div>LEARNING CENTER!</div>
        </h1>
        <div className='grid justify-center gap-6 font-bold sm:grid-cols-[auto_auto]'>
          <Link href='/admission' className='rounded-md bg-white px-5 py-3 '>
            ADMISSSION
          </Link>
          <Link
            href='/admission'
            className='rounded-md bg-[hsl(201,84%,43%)] px-5 py-3  text-white'
          >
            PROGRAM & PRICES
          </Link>
        </div>
      </div>
    </div>
  )
}
