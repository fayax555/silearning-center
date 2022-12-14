import Image from 'next/image'
import type { Teacher } from 'types'

export default function MeetOurTeachers({ teachers }: { teachers: Teacher[] }) {
  return (
    <section className='mx-auto max-w-[1200px] px-4 pb-36 pt-10 text-slate-700 sm:px-8'>
      <h2 className='text-center text-3xl font-bold md:text-4xl'>
        MEET OUR TEACHERS
      </h2>
      <ul className='mt-12 grid justify-center justify-items-center gap-16 text-center md:grid-flow-col'>
        {teachers.map(({ id, image, name, title }) => (
          <li key={id} className=''>
            <Image
              height={250}
              width={250}
              src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image}`}
              alt={name ?? ''}
              className='rounded-full'
            />
            <h3 className='mt-8 text-2xl font-bold'>{name}</h3>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
