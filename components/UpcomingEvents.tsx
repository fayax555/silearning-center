import Image from 'next/image'

const items = [
  [
    'JUN',
    '6',
    'June 6, 2023 @ 10:00 am - September 3, 2024 @ 6:00 pm',
    'LITTLE COOK. COOKING WITH KIDS',
  ],
  [
    'SEP',
    '16',
    'September 6, 2023 @ 9:00 am - December 27, 2024 @ 5:00 pm',
    'CHILD PSYCHOLOGY: PRIVATE CHILD PSYCHOLOGIST',
  ],
  [
    'OCT',
    '15',
    'October 15, 2023 @ 10:00 am - January 12, 2025 @ 5:00 pm',
    'SPRING PICNIC FOR THE KIDS',
  ],
] as const

export default function UpcomingEvents() {
  return (
    <section className='mx-auto max-w-[1200px] px-6 pt-16 pb-12'>
      <h2 className='text-center text-3xl text-slate-700 md:text-4xl'>
        UPCOMING EVENTS
      </h2>
      <div className='grid justify-between md:grid-cols-2'>
        <div className='mt-10 md:mt-20'>
          <h3 className='text-lg'>UPCOMING EVENTS</h3>
          <ul className='mt-6 ml-6'>
            {items.map(([month, day, date, title]) => (
              <li
                key={title}
                className='mb-4 grid grid-cols-[30px_auto] items-center gap-x-4'
              >
                <p className='text-xs'>{month}</p>
                <p className='text-xs font-semibold'>{date}</p>
                <p className='text-xl font-bold'>{day}</p>
                <p>{title}</p>
              </li>
            ))}
          </ul>
          <a href='#' className='block pt-2 font-semibold text-slate-500'>
            View Calender
          </a>
        </div>
        <Image
          height={700}
          width={700}
          src='/img/upcoming-events.jpg'
          alt=''
          className='mt-16 justify-self-end'
        />
      </div>
    </section>
  )
}
