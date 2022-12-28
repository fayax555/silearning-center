import { ImQuotesLeft } from 'react-icons/im'
import { Testimonial } from 'types'

export default function Testimonials(p: { testimonials: Testimonial[] }) {
  return (
    <section className='grid py-32 text-center text-slate-800'>
      <div className='mx-auto max-w-[1200px] px-6'>
        <h2 className='text-3xl font-bold md:text-4xl'>WHAT THE PARENTS SAY</h2>

        <div className='mt-10 flex max-w-[88vw] gap-5 overflow-x-auto sm:flex-wrap'>
          {p.testimonials.map(({ id, name, title, testimonial }) => (
            <article
              key={id}
              className='grid min-w-[300px] flex-1 grid-rows-[80%_1fr] rounded-lg bg-slate-100 p-6 sm:pb-10 md:pb-9'
            >
              <div>
                <ImQuotesLeft className='-translate-y-2 text-3xl text-slate-600' />
                <p className='block text-left text-slate-700'>{testimonial}</p>
              </div>
              <div className='mt-5'>
                <h2 className='mb-1 text-lg font-bold'>{name}</h2>
                <p className='text-sm text-slate-600'>{title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
