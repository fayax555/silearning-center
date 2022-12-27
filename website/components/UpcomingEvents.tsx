import { useState } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import { BiImage } from 'react-icons/bi'

import type { UpcomingEvent } from 'types'
import Link from 'next/link'

type Props = { events: UpcomingEvent[] }
type ActiveItem = { name: string; image: string | null }

export default function UpcomingEvents({ events }: Props) {
  const [activeItem, setActiveItem] = useState<ActiveItem>({
    name: events[0].name,
    image: events[0].image,
  })

  return (
    <section className='mx-auto max-w-[1200px] py-24 px-4 text-slate-800'>
      <Link
        href='/events'
        className='flex items-center justify-center gap-5 hover:text-violet-700'
      >
        <h2 className='text-center text-3xl font-bold md:text-4xl'>
          Upcoming Events
        </h2>
        <p className='underline underline-offset-2'>View More</p>
      </Link>

      <div className='mt-10 grid items-center gap-5 lg:h-[408px] lg:grid-cols-[605px_auto]'>
        <div className='order-2 lg:order-1'>
          {events.slice(0, 3).map(({ name, start, end, image }) => (
            <article
              key={name}
              onClick={() => setActiveItem({ name, image })}
              className={`my-4 grid cursor-pointer grid-cols-[50px_auto] items-center rounded-xl border-2 border-slate-300 p-4 sm:gap-2 ${
                activeItem.name === name
                  ? 'bg-violet-600 text-violet-50'
                  : 'bg-white'
              }`}
            >
              <div className='grid gap-1 '>
                <span>{dayjs(start).format('MMM')}</span>
                <span className='text-xl font-bold'>
                  {dayjs(start).format('D')}
                </span>
              </div>

              <div className='grid gap-1'>
                <div className='gap-2 text-xs min-[350px]:text-sm md:flex  '>
                  <p>{dayjs(start).format('MMMM D, YYYY @ h:mm a')}</p>
                  <span className='hidden md:block'>-</span>
                  <p>{dayjs(end).format('MMMM D, YYYY @ h:mm a')}</p>
                </div>
                <h3 className='text-xl font-semibold md:text-2xl'>{name}</h3>
              </div>
            </article>
          ))}
        </div>

        <Image
          src={
            activeItem.image
              ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${activeItem.image}`
              : '/placeholder.png'
          }
          alt=''
          width={1000}
          height={1000}
          className={`order-1 h-[300px] w-full rounded-xl lg:h-[500px] ${
            activeItem.image ? 'object-cover' : 'object-contain'
          }`}
        />
      </div>
    </section>
  )
}
