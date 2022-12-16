import { Fragment, type FormEvent, useState } from 'react'
import { type InferGetStaticPropsType } from 'next'
import Image from 'next/image'

import Layout from 'components/Layout'
import { Directus } from 'utils'
import { ProgramSchema } from 'types'
import { z } from 'zod'

export default function Admission({
  programs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [studentName, setStudentName] = useState('')
  const [parentName, setParentName] = useState('')
  const [mobile, setMobile] = useState('')
  const [program, setProgram] = useState('')

  const formInputs = [
    ['Student Name', 'studentName', 'text', setStudentName],
    ['Parent Name', 'parentName', 'text', setParentName],
    ['Mobile Number', 'mobile', 'number', setMobile],
  ] as const

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/admission', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentName, parentName, mobile, program }),
    })

    if (res.ok) {
      alert('Form submitted successfully')
    } else {
      alert('Failed to submit form')
    }
  }

  return (
    <Layout title='Admission'>
      <form
        onSubmit={handleSubmit}
        className='mx-4 mt-14 max-w-[600px]  rounded-md border-2 border-violet-400 px-4 py-8 sm:mx-auto sm:p-10 [&>*]:block'
      >
        {formInputs.map(([label, id, type, setter]) => (
          <Fragment key={label}>
            <label htmlFor={id}>{label}</label>
            <input
              required
              className='mt-1 mb-6 w-full rounded-md bg-slate-200 px-4 py-2'
              type={type}
              name={id}
              id={id}
              placeholder={label}
              onChange={(e) => setter(e.target.value)}
            />
          </Fragment>
        ))}

        <label htmlFor='program'>Program</label>
        <select
          required
          id='program'
          className='mt-2 w-full cursor-pointer rounded-md border-r-8 border-slate-200 bg-slate-200 px-4 py-2'
          onChange={(e) => setProgram(e.target.value)}
          value={program}
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
