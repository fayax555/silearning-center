import Image from 'next/image'

const items = [
  'HAPPY ENVIRONMENT',
  'ACTIVE LEARNING',
  'CREATIVE LESSONS',
  'AMAZING PLAYGROUND',
] as const

export default function Features() {
  return (
    <div className='bg-slate-50 py-16 px-4'>
      <ul className='mx-auto flex max-w-[1200px] flex-col justify-between gap-8 px-8 md:flex-row md:gap-4'>
        {items.map((item, i) => (
          <li className='grid place-items-center gap-2 md:gap-8' key={item}>
            <Image
              height={120}
              width={120}
              src={`/img/features/${i + 1}.png`}
              alt={item}
            />
            <h2 className='text-2xl  text-slate-800'>{item}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
