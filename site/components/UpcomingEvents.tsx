import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import { clsx } from 'clsx'

import type { UpcomingEvent } from 'types'

type Props = { events: UpcomingEvent[] }
type ActiveItem = { name?: string; image?: string | null }

export default function UpcomingEvents({ events }: Props) {
  const [activeItem, setActiveItem] = useState<ActiveItem>({
    name: events[0]?.name,
    image: events[0]?.image,
  })

  if(!events.length) return null

  return (
    <section className='mx-auto max-w-[1200px] py-10 pt-14 px-4 text-slate-800 md:py-24 lg:pb-40'>
      <Link
        href='/events'
        className='items-center justify-center gap-5 text-center hover:text-violet-700 md:flex'
      >
        <h2 className='text-3xl font-bold md:text-4xl'>Upcoming Events</h2>
        <p className='text-sm underline underline-offset-2'>View More</p>
      </Link>

      <div className='mt-10 grid items-center gap-5 lg:h-[408px] lg:grid-cols-[605px_auto]'>
        <div className='order-2 lg:order-1'>
          {events.slice(0, 3).map(({ name, start, end, image }) => (
            <button
              type='button'
              key={name}
              onClick={() => setActiveItem({ name, image })}
              className={`my-4 grid w-full cursor-pointer grid-cols-[50px_auto] items-center rounded-xl border-2 border-slate-300 p-4 text-left sm:gap-2 ${
                activeItem.name === name
                  ? 'bg-violet-600 text-violet-50'
                  : 'bg-white'
              }`}
            >
              <div className='grid gap-1 pl-1'>
                <span>{dayjs(start).format('MMM')}</span>
                <span className='text-xl font-bold'>
                  {dayjs(start).format('D')}
                </span>
              </div>

              <div className='grid gap-1'>
                <div
                  className={clsx('gap-2 text-xs min-[350px]:text-sm md:flex', {
                    'text-slate-500': activeItem.name !== name,
                  })}
                >
                  <p>{dayjs(start).format('MMMM D, YYYY @ h:mm a')}</p>
                  <span className='hidden md:block'>-</span>
                  <p>{dayjs(end).format('MMMM D, YYYY @ h:mm a')}</p>
                </div>
                <h3 className='text-xl font-semibold md:text-2xl'>{name}</h3>
              </div>
            </button>
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
