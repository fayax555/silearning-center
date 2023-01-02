import Image from 'next/image'
import type { Feature } from 'types'

export default function Features({ features }: { features: Feature[] }) {
  return (
    <div className='py-16 pb-20 px-4'>
      <ul className='mx-auto grid max-w-[1200px] justify-center gap-8 px-8 sm:flex md:gap-4'>
        {features.map(({ id, title, image }) => (
          <li className='grid place-items-center gap-2 md:gap-8 px-4' key={id}>
            <Image
              height={600}
              width={600}
              src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image}`}
              alt={title ?? ''}
              className='h-[150px] w-[150px] rounded-full object-cover'
            />
            <h2 className='font-extrabold text-slate-800'>{title}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
