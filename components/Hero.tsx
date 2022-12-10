const green = 'hsl(72,64%,45%)'

export default function Hero() {
  return (
    <div
      className={
        "overlay relative mx-auto grid h-[710px] items-center bg-[url('/img/slide1-1.jpg')] bg-cover bg-center bg-no-repeat px-4"
      }
    >
      <div className='mx-auto z-10  grid max-w-[1200px] gap-10 md:w-full md:px-8'>
        <h1 className='text-center font-sans text-4xl text-white sm:text-7xl '>
          <span>WELCOME TO </span>
          <div>
            <span>THE </span>
            <span className='text-[hsl(72,64%,45%)]'>SI LEARNING CENTER!</span>
          </div>
        </h1>
        <div className='grid justify-center gap-6 sm:grid-cols-[auto_auto]'>
          <a
            href='#'
            className='font-neue rounded-md bg-white px-4 py-3 text-lg '
          >
            ADMISSSION
          </a>
          <a
            href='#'
            className='font-neue rounded-md bg-[hsl(201,84%,43%)] px-4 py-3 text-lg  text-white'
          >
            PROGRAM & PRICES
          </a>
        </div>
      </div>
    </div>
  )
}
