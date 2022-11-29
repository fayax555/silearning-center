import Image from 'next/image'
import type { Class } from 'types'

const itemColors = ['bg-purple-500', 'bg-orange-500', 'bg-lime-500'] as const

export default function ChooseClasses({ classes }: { classes: Class[] }) {
  return (
    <section className='py-24 px-8 text-slate-700'>
      <div className='mx-auto max-w-[1200px]'>
        <h2 className='text-center text-3xl md:text-4xl'>
          CHOOSE CLASSES FOR YOUR CHILD
        </h2>
        <ul className='mt-20 grid  gap-10 md:grid-cols-3'>
          {classes.map(({ id, name, age_group, class_size, image }, idx) => (
            <li key={id}>
              <Image
                height={480}
                width={480}
                src={`https://a4ida36s.directus.app/assets/${image}`}
                alt={name}
                className='rounded-t-md'
              />
              <div
                className={`${itemColors[idx]} rounded-b-md px-8 py-6 text-white`}
              >
                <h3 className='font-neue mb-4 text-2xl'>{name}</h3>
                <p className='font-neue'>{`AGE GROUP: ${age_group}`}</p>
                <p className='font-neue'>{`CLASS SIZE: ${class_size}`}</p>
              </div>
            </li>
          ))}
        </ul>
        {/* <div className='mt-6 bg-red-100'>
          <button type='button'>prev</button>
          <button type='button'>next</button>
        </div> */}
      </div>
    </section>
  )
}
