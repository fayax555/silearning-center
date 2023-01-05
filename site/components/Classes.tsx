import Image from 'next/image'
import type { Class } from 'types'

const itemColors = [
  ['bg-purple-50', 'text-purple-600', 'border-purple-300'],
  ['bg-red-50', 'text-red-600', 'border-red-300'],
  ['bg-green-50', 'text-green-600', 'border-green-300'],
  ['bg-blue-50', 'text-blue-600', 'border-blue-300'],
  ['bg-yellow-50', 'text-yellow-600', 'border-yellow-300'],
] as const

export default function Classes({ classes }: { classes: Class[] }) {
  if (!classes.length) return null

  return (
    <section className='py-24 px-8 text-slate-700'>
      <div className='mx-auto max-w-[1200px]'>
        <h2 className='text-center text-3xl font-bold md:text-4xl'>CLASSES</h2>
        <ul className='mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3'>
          {classes
            .slice(0, 3)
            .map(({ id, name, age_group, class_size, image }, idx) => (
              <li
                key={id}
                className={`border-2 ${itemColors[idx][0]} ${itemColors[idx][1]}  ${itemColors[idx][2]} rounded-xl text-center`}
              >
                <Image
                  height={600}
                  width={600}
                  src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image}`}
                  alt={name ?? ''}
                  className='w-full rounded-t-xl object-cover'
                />
                <div
                  className={`self-stretch rounded-b-xl object-fill px-8 py-6 font-semibold`}
                >
                  <h3 className='mb-4 text-center text-xl font-bold'>{name}</h3>
                  <p>{`Age: ${age_group}`}</p>
                  <p>{`Class Size: ${class_size}`}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}
