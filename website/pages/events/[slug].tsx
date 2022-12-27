import Layout from 'components/Layout'
import dayjs from 'dayjs'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import React from 'react'
import { EventsSchema } from 'types'
import { Directus, slugify } from 'utils'

export default function EventItemPage(
  e: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout title={e.name}>
      <div className='mx-auto mt-4 grid justify-center gap-2 text-xs text-slate-700 min-[350px]:text-sm md:flex'>
        <p>{dayjs(e.start).format('MMMM D, YYYY @ h:mm a')}</p>
        <span className='hidden md:block'>-</span>
        <p>{dayjs(e.end).format('MMMM D, YYYY @ h:mm a')}</p>
      </div>

      <div className='mx-auto mb-40 mt-14 max-w-[700px] px-4'>
        {e.image && (
          <Image
            height={1000}
            width={1000}
            src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${e.image}`}
            alt={e.name}
            className='rounded-lg w-full object-cover'
          />
        )}

        <div
          dangerouslySetInnerHTML={{ __html: e.description ?? '' }}
          className='mt-10 text-lg text-slate-700'
        />

        <h2 className='mt-10 text-2xl font-bold text-slate-800'>Details</h2>
        <section className='mt-3 flex gap-5 max-md:flex-col md:gap-10'>
          <article className=''>
            <h3 className='text-slate-600'>Start</h3>
            <strong className='text-xl font-bold'>
              {dayjs(e.start).format('MMMM D, YYYY @ h:mm a')}
            </strong>
          </article>

          <article>
            <h3 className='text-slate-600'>End</h3>
            <strong className='text-xl font-bold'>
              {dayjs(e.end).format('MMMM D, YYYY @ h:mm a')}
            </strong>
          </article>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug
  if (typeof slug !== 'string') throw new Error('Invalid id')

  const directus = Directus()

  const eventsRes = await directus.items('upcoming_events').readByQuery({
    fields: ['name', 'start', 'end', 'description', 'image'],
  })

  const events = EventsSchema.parse(eventsRes.data)
  const event = events.find((e) => slugify(e.name) === slug)
  if (!event) throw new Error('Event not found')

  return { props: event }
}

export async function getStaticPaths() {
  const directus = Directus()

  const eventsRes = await directus.items('upcoming_events').readByQuery({
    fields: ['name', 'start', 'end', 'description', 'image'],
  })

  const events = EventsSchema.parse(eventsRes.data)
  if (!events) throw new Error('Event not found')

  const paths = events.map(({ name }) => ({ params: { slug: slugify(name) } }))
  return { paths, fallback: 'blocking' }
}
