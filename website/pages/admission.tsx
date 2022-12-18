import { Fragment, type FormEvent, useState } from 'react'
import { type InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import { toast } from 'react-hot-toast'

import Layout from 'components/Layout'
import { Directus } from 'utils'
import { ProgramSchema } from 'types'

export default function Admission({
  programs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [studentName, setStudentName] = useState('')
  const [parentName, setParentName] = useState('')
  const [mobile, setMobile] = useState('')
  const [program, setProgram] = useState('')
  const [error, setError] = useState({ id: '', text: '' })
  const [submitting, setSubmitting] = useState(false)

  const formInputs = [
    ['Student Name', 'studentName', 'text', studentName, setStudentName],
    ['Parent Name', 'parentName', 'text', parentName, setParentName],
    ['Mobile Number', 'mobile', 'number', mobile, setMobile],
  ] as const

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      setSubmitting(true)

      if (mobile.length !== 7) {
        setError({
          id: 'mobile',
          text: 'Mobile number must be 7 digits',
        })

        return setTimeout(() => {
          setError({ id: '', text: '' })
        }, 3000)
      }

      const res = await fetch('/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentName, parentName, mobile, program }),
      })

      if (res.ok) {
        toast.success('Form submitted successfully')
        setStudentName('')
        setParentName('')
        setMobile('')
        setProgram('')
      } else {
        toast.error('Failed to submit form')
      }
    } catch (error) {
      toast.error('Failed to submit form')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Layout title='Admission'>
      <form
        onSubmit={handleSubmit}
        className='mx-4 mt-14 max-w-[600px]  rounded-md border-2 border-violet-400 px-4 py-8 sm:mx-auto sm:p-10'
      >
        {formInputs.map(([label, id, type, val, setVal]) => (
          <Fragment key={label}>
            <div className='flex items-center gap-5'>
              <label htmlFor={id} className='min-w-[120px]'>
                {label}
              </label>
              {id === error.id && (
                <p className='text-xs text-red-700'>{error.text}</p>
              )}
            </div>
            <input
              required
              className='mt-1 mb-6 w-full rounded-md bg-slate-200 px-4 py-2 outline-violet-600'
              type={type}
              name={id}
              id={id}
              placeholder={label}
              value={val}
              onChange={(e) => {
                if (id !== 'mobile') return setVal(e.target.value)

                if (e.target.value.length > 7) {
                  setError({
                    id: 'mobile',
                    text: 'Mobile number cannot be more than 7 digits',
                  })

                  return setTimeout(() => {
                    setError({ id: '', text: '' })
                  }, 3000)
                }
              }}
            />
          </Fragment>
        ))}

        <label htmlFor='program'>Program</label>
        <select
          required
          id='program'
          className='mt-2 w-full cursor-pointer rounded-md border-r-8 border-slate-200 bg-slate-200 px-4 py-2 outline-violet-600'
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
          disabled={submitting}
          type='submit'
          className={`mt-6 w-full rounded-md ${
            submitting ? 'bg-slate-500' : 'bg-violet-600 hover:bg-violet-800'
          } px-5 py-2 font-bold text-white transition `}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <div className='mx-auto mt-20 mb-40 max-w-[1200px] px-5 text-center'>
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
              <h3 className='mt-5 mb-2 text-xl font-bold'>{p.name}</h3>
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
