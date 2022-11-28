import Image from 'next/image'

const items = [
  ['ACTIVE LEARNING', '2-5 YEARS', '12', 'bg-purple-400'],
  ['MATHEMATICS', '3-5 YEARS', '5', 'bg-orange-400'],
  ['GEOGRAPHY', '4-6 YEARS', '5', 'bg-green-400'],
] as const

export default function ChooseClasses() {
  return (
    <section className='bg-slate-200 py-24 px-8'>
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
              <div className={`${color} rounded-b-md px-8 py-6`}>
                <h3 className='font-neue mb-4 text-2xl text-white'>{title}</h3>
                <p className='font-neue text-white'>{`AGE GROUP: ${ageGroup}`}</p>
                <p className='font-neue text-white'>{`CLASS SIZE: ${classSize}`}</p>
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
