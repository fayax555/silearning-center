import { InferGetStaticPropsType } from 'next'
import dayjs from 'dayjs'
import { clsx } from 'clsx'

import Layout from 'components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { EventsSchema } from 'types'
import { Directus, slugify } from 'utils'

export default function EventsPage({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title='Upcoming Events'>
      <div className='mx-auto mt-20 mb-52 max-w-[900px] px-5 text-slate-800'>
        <div className='grid gap-10'>
          {events.map(({ name, start, end, image, description }) => (
            <Link
              href={`/events/${slugify(name)}`}
              key={name}
              className={clsx('grid items-center bg-slate-50', {
                'md:grid-cols-[500px_auto]': image,
              })}
            >
              <div className='order-2 rounded-lg p-6 md:order-1'>
                <p className='text-lg font-semibold'>
                  {dayjs(start).format('dddd DD')}
                </p>

                <div className='grid gap-3'>
                  <div className='gap-2 text-xs text-slate-600 min-[350px]:text-sm md:flex'>
                    <p>{dayjs(start).format('MMMM D, YYYY @ h:mm a')}</p>
                    <span className='hidden md:block'>-</span>
                    <p>{dayjs(end).format('MMMM D, YYYY @ h:mm a')}</p>
                  </div>
                  <h2 className='mt-2 text-3xl font-semibold md:text-4xl'>
                    {name}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: description ?? '' }}
                    className='text-slate-600 line-clamp-4'
                  />
                </div>
              </div>

              {image && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image}`}
                  alt=''
                  width={1000}
                  height={1000}
                  className='lg:h-[500px order-1 h-[300px] w-full rounded-xl object-cover'
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const directus = Directus()

  const eventsRes = await directus.items('upcoming_events').readByQuery({
    fields: ['name', 'start', 'end', 'description', 'image'],
  })

  const events = EventsSchema.parse(eventsRes.data).sort((a, b) =>
    dayjs(a.start).diff(dayjs(b.start))
  )

  return { props: { events } }
}
