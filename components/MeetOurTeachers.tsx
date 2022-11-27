import Image from 'next/image'

const items = [
  ['Lily Carter', 'Literacy Teacher'],
  ['Jennifer lawrence', 'Active Learning Teacher'],
  ['Regina Spektor', 'Preshool Teacher'],
  ['Richard Hill', 'Art and Music Teacher'],
] as const

export default function MeetOurTeachers() {
  return (
    <section className='mx-auto max-w-[1200px] bg-slate-100 py-24 px-8'>
      <h2 className='text-center text-4xl'>MEET OUR TEACHERS</h2>
      <ul className='mt-16  grid grid-cols-4 gap-8 text-center'>
        {items.map(([name, title], idx) => (
          <li key={name} className=''>
            <Image
              height={250}
              width={250}
              src={`/img/teachers/${idx + 1}.jpg`}
              alt={name}
              className='rounded-full'
            />
            <h3 className='font-neue mt-8 text-2xl font-semibold'>{name}</h3>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
