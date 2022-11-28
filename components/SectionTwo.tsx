import Image from 'next/image'

export default function SectionTwo() {
  return (
    <section className='mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-10 px-4 py-20 text-slate-700'>
      <Image src='/img/8-2.jpg' alt='' width={1200} height={600} />
      <div className='grid gap-10'>
        <h2 className='font-neue text-6xl'>
          WELCOME TO <span className='block'>THE KINDERGARTEN!</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum dolor
          sit amet, consectetur adip iscing elit psum dolor sit amet. Aenean
          consectetur fringilla mi in mollis. Etiam eleifend sollicitudin
          dignissim.
        </p>
        <a
          href='#'
          className='font-neue justify-self-start rounded-md bg-orange-600 px-8 py-4 text-lg text-white'
        >
          WHY KINDERGARTEN
        </a>
      </div>
    </section>
  )
}
