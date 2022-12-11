import Image from 'next/image'
import type { Class } from 'types'

const itemColors = [
  ['bg-purple-50', 'text-purple-600', 'border-purple-300'],
  ['bg-red-50', 'text-red-600', 'border-red-300'],
  ['bg-green-50', 'text-green-600', 'border-green-300'],
] as const

export default function ChooseClasses({ classes }: { classes: Class[] }) {
  return (
    <section className='py-24 px-8 text-slate-700'>
      <div className='mx-auto max-w-[1200px]'>
        <h2 className='text-center text-3xl font-bold md:text-4xl'>
          CLASSES
        </h2>
        <ul className='mt-20 grid gap-10 md:grid-cols-3'>
          {classes.map(({ id, name, age_group, class_size, image }, idx) => (
            <li
              key={id}
              className={`border-2 ${itemColors[idx][2]} rounded-xl text-center`}
            >
              <Image
                height={480}
                width={480}
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image}`}
                alt={name ?? ''}
                className='rounded-t-xl'
              />
              <div
                className={`${itemColors[idx][0]} ${itemColors[idx][1]} rounded-b-xl   px-8 py-6 font-semibold`}
              >
                <h3 className='mb-4 text-center text-xl font-bold'>
                  {name}
                </h3>
                <p>{`Age: ${age_group}`}</p>
                <p>{`Class Size: ${class_size}`}</p>
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
