import Image from 'next/image'

const items = [
  'HAPPY ENVIRONMENT',
  'ACTIVE LEARNING',
  'CREATIVE LESSONS',
  'AMAZING PLAYGROUND',
] as const

export default function Features() {
  return (
    <div className=' bg-slate-400 py-16 px-4'>
      <ul className='mx-auto flex max-w-[1200px] justify-between gap-4  px-8'>
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
    </div>
  )
}
