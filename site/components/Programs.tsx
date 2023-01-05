import Image from 'next/image'
import { Program } from 'types'

type Props = { programs: Program[]; limit?: true }
export default function Programs({ programs, limit }: Props) {
  const programsToRender = limit ? programs.slice(0, 3) : programs

  return (
    <div className='mx-auto mt-12 max-w-[1200px] px-5 text-center'>
      <h2 className='mb-6 text-3xl font-extrabold text-violet-600 sm:text-4xl'>
        Our Programs
      </h2>

      <ul className='flex max-w-[1200px] grid-cols-1 flex-wrap justify-center gap-5'>
        {programsToRender.map((p) => (
          <li
            key={p.name}
            className='grid rounded-md border-2 border-violet-400 p-6 font-semibold text-violet-800 max-[450px]:w-full sm:w-[275px]'
          >
            <div className=''>
              {p.image && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${p.image}`}
                  height={500}
                  width={500}
                  alt=''
                  className='mx-auto w-full rounded-md object-cover sm:h-[150px]'
                />
              )}
            </div>

            <div>
              <h3 className='mt-4 mb-1 text-xl font-bold'>{p.name}</h3>
              {p.age && (
                <p className='text-sm text-violet-700'>
                  <span className='font-bold'>Age: </span>
                  <span>{p.age}</span>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
