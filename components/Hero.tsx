export default function Hero() {
  return (
    <div className='hero mx-auto grid items-center px-4'>
      <div className=' mx-auto grid w-full max-w-[1200px] gap-10 px-8'>
        <h1 className=' text-left font-sans text-7xl '>
          <span>WELCOME TO</span>
          <span className='block'>THE KINDERGARTEN!</span>
        </h1>
        <div className='flex gap-6'>
          <a
            href='#'
            className='rounded-md bg-slate-200 px-4 py-3 text-lg font-bold'
          >
            SEE WAITING LISTS
          </a>
          <a
            href='#'
            className='rounded-md bg-slate-200 px-4 py-3 text-lg font-bold'
          >
            PROGRAM & PRICES
          </a>
        </div>
      </div>
    </div>
  )
}
