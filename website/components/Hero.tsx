import Link from 'next/link'

const green = 'hsl(72,64%,45%)'

export default function Hero() {
  return (
    <div
      className={
        "overlay relative mx-auto grid min-h-[94.5vh] items-center bg-[url('/img/slide1-1.jpg')] bg-cover bg-center bg-no-repeat "
      }
    >
      <div className='z-10 mx-auto grid  max-w-[1200px] gap-10 text-center md:w-full md:px-8 px-4'>
        <h1 className='text-5xl leading-[1.1] font-extrabold text-white sm:text-7xl'>
          <span>WELCOME TO </span>
          <div className='text-[hsl(201,100%,60%)]'>SI LEARNING CENTER!</div>
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
