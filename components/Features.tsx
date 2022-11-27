import Image from 'next/image'

const items = [
  'HAPPY ENVIRONMENT',
  'ACTIVE LEARNING',
  'CREATIVE LESSONS',
  'AMAZING PLAYGROUND',
] as const

export default function Features() {
  return (
    <div className='mx-auto max-w-[1200px] py-16 px-4'>
      <ul className='flex justify-between gap-4 px-8'>
        {items.map((item, i) => (
          <li className='grid place-items-center gap-8' key={item}>
            <Image
              height={120}
              width={120}
              src={`/img/${i + 1}.png`}
              alt={item}
            />
            <h3 className='text-xl font-semibold'>{item}</h3>
          </li>
        ))}
      </ul>

      <section className='grid grid-cols-2 items-center gap-10 py-36'>
        <Image src='/img/8-2.jpg' alt='' width={1200} height={600} />
        <div className='grid gap-10'>
          <h2 className='font-neue text-6xl'>
            WELCOME TO <span className='block'>THE KINDERGARTEN!</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum
            dolor sit amet, consectetur adip iscing elit psum dolor sit amet.
            Aenean consectetur fringilla mi in mollis. Etiam eleifend
            sollicitudin dignissim.
          </p>
          <a
            href='#'
            className='font-neue justify-self-start rounded-md bg-orange-600 px-8 py-4 text-lg text-white'
          >
            WHY KINDERGARTEN
          </a>
        </div>
      </section>
    </div>
  )
}
