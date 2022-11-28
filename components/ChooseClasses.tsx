import Image from 'next/image'

const items = [
  ['ACTIVE LEARNING', '2-5 YEARS', '12', 'bg-purple-500'],
  ['MATHEMATICS', '3-5 YEARS', '5', 'bg-orange-500'],
  ['GEOGRAPHY', '4-6 YEARS', '5', 'bg-lime-500'],
] as const

export default function ChooseClasses() {
  return (
    <section className='py-24 px-8 text-slate-700'>
      <div className='mx-auto max-w-[1200px]'>
        <h2 className=' text-center text-4xl'>CHOOSE CLASSES FOR YOUR CHILD</h2>
        <ul className='mt-20 grid grid-cols-3 gap-10'>
          {items.map(([title, ageGroup, classSize, color], idx) => (
            <li key={title}>
              <Image
                height={480}
                width={480}
                src={`/img/classes/${idx + 1}.jpg`}
                alt={title}
                className='rounded-t-md'
              />
              <div className={`${color} rounded-b-md px-8 py-6 text-white`}>
                <h3 className='font-neue mb-4 text-2xl'>{title}</h3>
                <p className='font-neue'>{`AGE GROUP: ${ageGroup}`}</p>
                <p className='font-neue'>{`CLASS SIZE: ${classSize}`}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className='mt-6 bg-red-100'>
          <button type='button'>prev</button>
          <button type='button'>next</button>
        </div>
      </div>
    </section>
  )
}
