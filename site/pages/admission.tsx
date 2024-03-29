import { type FormEvent, useState } from 'react'
import { type InferGetStaticPropsType } from 'next'
import { toast } from 'react-hot-toast'

import Layout from 'components/Layout'
import { directusItems } from 'utils'
import { ProgramSchema } from 'types'
import Programs from 'components/Programs'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const AdmissionForm = ({ programs }: Props) => {
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
    <form
      onSubmit={handleSubmit}
      className='mx-4 mt-14 max-w-[600px] rounded-md border-2 border-violet-400 px-4 py-8 sm:mx-auto sm:p-10'
    >
      {formInputs.map(([label, id, type, val, setVal]) => (
        <div className='relative mb-6' key={label}>
          {id === error.id && (
            <p className='absolute left-28 -top-1 rounded-md bg-red-50 px-2 text-sm text-red-900'>
              {error.text}
            </p>
          )}
          <input
            className='peer block w-full appearance-none rounded-lg bg-slate-200 px-2.5 pb-2.5 pt-4 text-slate-900 outline-violet-600'
            placeholder=' '
            required
            type={type}
            id={id}
            value={val}
            onChange={(e) => {
              if (id === 'mobile' && e.target.value.length > 7) {
                setError({
                  id: 'mobile',
                  text: 'Mobile number cannot be more than 7 digits',
                })

                return setTimeout(() => {
                  setError({ id: '', text: '' })
                }, 3000)
              }

              setVal(e.target.value)
            }}
          />
          <label
            htmlFor={id}
            className='absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75  cursor-text rounded-md bg-slate-50 px-2 text-slate-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-slate-200  peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-slate-50 peer-focus:px-2  peer-focus:text-violet-900'
          >
            {label}
          </label>
        </div>
      ))}

      {program && (
        <label
          htmlFor='program'
          className='absolute flex w-16 -translate-y-2 translate-x-2 rounded-md bg-slate-50 px-2 text-xs text-violet-900'
        >
          Program
        </label>
      )}
      <select
        required
        id='program'
        className='w-full cursor-pointer rounded-md border-r-8 border-slate-200 bg-slate-200 px-4 py-3 outline-violet-600'
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
        className={`mt-7 w-full rounded-md ${
          submitting ? 'bg-slate-500' : 'bg-violet-600 hover:bg-violet-800'
        } px-5 py-2 font-bold text-white transition `}
      >
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default function Admission({ programs }: Props) {
  return (
    <Layout
      title='Admission'
      description='Our programs are designed to help students achieve their academic goals and prepare them for the future.'
    >
      <div className='mb-20'>
        {!!programs.length && (
          <>
            <AdmissionForm programs={programs} />
            <Programs programs={programs} />
          </>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const programRes = await directusItems('programs').read({
    fields: ['name', 'image', 'age'],
  })

  const programs = ProgramSchema.parse(programRes)

  return { props: { programs }, revalidate: 24 * 60 * 60 }
}
