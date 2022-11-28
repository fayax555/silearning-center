export default function Hero() {
  return (
    <div
      className={
        "mx-auto grid h-[710px] items-center bg-[url('/img/slide1-1.jpg')] bg-cover bg-center bg-no-repeat px-4"
      }
    >
      <div className='mx-auto grid w-full max-w-[1200px] gap-10 px-8'>
        <h1 className='text-left font-sans text-7xl text-white '>
          <span>WELCOME TO </span>
          <div>
            <span>THE </span>
            <span className='text-yellow-300'>KINDERGARTEN!</span>
          </div>
        </h1>
        <div className='flex gap-6'>
          <a
            href='#'
            className='font-neue rounded-md bg-white px-4 py-3 text-lg '
          >
            SEE WAITING LISTS
          </a>
          <a
            href='#'
            className='font-neue rounded-md bg-lime-500 px-4 py-3 text-lg  text-white'
          >
            PROGRAM & PRICES
          </a>
        </div>
      </div>
    </div>
  )
}
