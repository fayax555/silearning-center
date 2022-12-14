import Link from "next/link"

const green = 'hsl(72,64%,45%)'

export default function Hero() {
  return (
    <div
      className={
        "overlay relative mx-auto grid h-[710px] items-center bg-[url('/img/slide1-1.jpg')] bg-cover bg-center bg-no-repeat px-4"
      }
    >
      <div className='z-10 mx-auto  grid max-w-[1200px] gap-10 md:w-full md:px-8'>
        <h1 className='text-center text-4xl font-extrabold text-white sm:text-7xl'>
          <span>WELCOME TO </span>
          <div>
            <span className='text-[hsl(201,100%,60%)]'>SI LEARNING CENTER!</span>
          </div>
        </h1>
        <div className='grid justify-center font-bold gap-6 sm:grid-cols-[auto_auto]'>
          <Link
            href='/admission'
            className='rounded-md bg-white px-5 py-3 '
          >
            ADMISSSION
          </Link>
          <a
            href='#'
            className='rounded-md bg-[hsl(201,84%,43%)] px-5 py-3  text-white'
          >
            PROGRAM & PRICES
          </a>
        </div>
      </div>
    </div>
  )
}
