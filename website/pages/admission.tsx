import { Fragment } from 'react'
import Layout from 'components/Layout'
import Image from 'next/image'
import { Directus } from 'utils'
import { ProgramSchema } from 'types'

const programs = ['Baby Nursery', 'Nursery', 'LKG', 'UKG'] as const

const formInputs = [
  ['Student Name', 'studentName', 'text'],
  ['Parent Name', 'parentName', 'text'],
  ['Mobile Number', 'mobile', 'number'],
] as const

export default function Admission() {
  return (
    <Layout title='Admission'>
      <form className='mx-auto mt-20  max-w-[600px] rounded-md border-2 border-violet-400 p-10 [&>*]:block'>
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
            <option key={p} value={p}>
              {p}
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

      <div className='mx-auto mt-20 mb-80 max-w-[1000px] px-5 text-center'>
        <h2 className='mb-6 text-4xl font-extrabold text-violet-600'>
          Our Programs
        </h2>

        <ul className='flex gap-5'>
          {programs.map((p) => (
            <li
              key={p}
              className='flex-1 rounded-md border-2 border-violet-500 p-7 font-semibold text-violet-800'
            >
              <Image
                src={`/img/teachers/1.jpg`}
                height={100}
                width={100}
                alt=''
                className='mx-auto rounded-full'
              />
              <h2 className='mt-5 mb-2 text-xl font-bold'>{p}</h2>
              <p className='text-sm'>
                <span className='font-bold'>Age: </span>
                <span>2-3 years</span>
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

  const program = ProgramSchema.parse(programRes.data)

  console.log(program)

  return {
    props: {},
  }
}
