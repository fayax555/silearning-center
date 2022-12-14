import { Fragment } from 'react'
import Layout from 'components/Layout'
import Image from 'next/image'
import { Directus } from 'utils'
import { ProgramSchema } from 'types'
import { InferGetStaticPropsType } from 'next'

const formInputs = [
  ['Student Name', 'studentName', 'text'],
  ['Parent Name', 'parentName', 'text'],
  ['Mobile Number', 'mobile', 'number'],
] as const

export default function Admission({
  programs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title='Admission'>
      <form className='mx-4 mt-20 max-w-[600px]  rounded-md border-2 border-violet-400 px-4 py-8 sm:mx-auto sm:p-10 [&>*]:block'>
        {formInputs.map(([label, id, type]) => (
          <Fragment key={label}>
            <label htmlFor={id}>{label}</label>
            <input
              required
              className='mt-1 mb-6 w-full rounded-md bg-slate-200 px-4 py-2'
              type={type}
              name={id}
              id={id}
              placeholder={label}
            />
          </Fragment>
        ))}

        <label htmlFor='program'>Program</label>
        <select
          required
          name='program'
          id='program'
          className='mt-2 w-full cursor-pointer rounded-md border-r-8 border-slate-200 bg-slate-200 px-4 py-2'
        >
          <option className='hidden' value=''>
            Select Program
          </option>
          {programs.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>

        <button
          type='submit'
          className='mt-8 w-full rounded-md bg-violet-600 px-5 py-2 font-bold text-white'
        >
          Submit
        </button>
      </form>

      <div className='mx-auto mt-20 mb-80 max-w-[1200px] px-5 text-center'>
        <h2 className='mb-6 text-3xl font-extrabold text-violet-600 sm:text-4xl'>
          Our Programs
        </h2>

        <ul className='flex flex-col gap-5 sm:flex-row'>
          {programs.map((p) => (
            <li
              key={p.name}
              className='flex-1 rounded-md border-2 border-violet-500 p-7 font-semibold text-violet-800'
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${p.image}`}
                height={100}
                width={100}
                alt=''
                className='mx-auto w-full rounded-md object-cover'
              />
              <h2 className='mt-5 mb-2 text-xl font-bold'>{p.name}</h2>
              <p className='text-sm'>
                <span className='font-bold'>Age: </span>
                <span>{p.age}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const directus = Directus()

  const programRes = await directus.items('programs').readByQuery({
    fields: ['name', 'image', 'age'],
  })

  const programs = ProgramSchema.parse(programRes.data)

  return {
    props: { programs },
  }
}
