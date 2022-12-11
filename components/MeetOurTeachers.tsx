import Image from 'next/image'
import type { Teacher } from 'types'

export default function MeetOurTeachers({ teachers }: { teachers: Teacher[] }) {
  return (
    <section className='mx-auto max-w-[1200px] py-24 px-8 text-slate-700'>
      <h2 className='text-center text-3xl md:text-4xl'>MEET OUR TEACHERS</h2>
      <ul className='mt-16 grid justify-center gap-8 text-center sm:grid-cols-2 md:grid-cols-4'>
        {teachers.map(({ id, image, name, title }) => (
          <li key={id} className=''>
            <Image
              height={250}
              width={250}
              src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image}`}
              alt={name ?? ''}
              className='rounded-full'
            />
            <h3 className='font-neue mt-8 text-2xl'>{name}</h3>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
