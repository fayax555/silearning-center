import Layout from 'components/Layout'
import { FormEvent, Fragment, useState } from 'react'
import { toast } from 'react-hot-toast'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState({ id: '', text: '' })
  const [submitting, setSubmitting] = useState(false)

  const formInputs = [
    ['Name', 'name', 'text', name, setName],
    ['Mobile Number', 'mobile', 'number', mobile, setMobile],
  ] as const

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      if (mobile.length !== 7) {
        setError({
          id: 'mobile',
          text: 'Mobile number must be 7 digits',
        })

        return setTimeout(() => {
          setError({ id: '', text: '' })
        }, 3000)
      }

      setSubmitting(true)

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mobile, message }),
      })

      if (res.ok) {
        toast.success('Form submitted successfully')
        setName('')
        setMobile('')
        setMessage('')
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
    <Layout title='Contact Us'>
      <div className='mb-40'>
        <form
          onSubmit={handleSubmit}
          className='mx-4 mt-14 max-w-[600px] rounded-md border-2 border-violet-400 px-4 py-8 sm:mx-auto sm:p-10'
        >
          {formInputs.map(([label, id, type, val, setVal]) => (
            <Fragment key={label}>
              <div className='flex items-center gap-5'>
                <label htmlFor={id}>{label}</label>
                {id === error.id && (
                  <p className='text-sm text-red-700'>{error.text}</p>
                )}
              </div>
              <input
                required
                className='mt-1 mb-6 w-full rounded-md border-2 bg-slate-200 px-4 py-2 outline-violet-600'
                type={type}
                placeholder={label}
                id={id}
                value={val}
                onChange={(e) => {
                  if (id === 'mobile') {
                    if (e.target.value.length > 7) {
                      setError({
                        id: 'mobile',
                        text: 'Mobile number cannot be more than 7 digits',
                      })

                      return setTimeout(() => {
                        setError({ id: '', text: '' })
                      }, 3000)
                    }
                  }

                  setVal(e.target.value)
                }}
              />
            </Fragment>
          ))}

          <label htmlFor='message'>Message</label>
          <textarea
            required
            id='message'
            placeholder='Message'
            onChange={(e) => setMessage(e.target.value)}
            className='mt-1 mb-6 min-h-[120px] w-full rounded-md bg-slate-200 px-4 py-2 outline-violet-600'
          />

          <button
            disabled={submitting}
            type='submit'
            className={`mt-6 w-full rounded-md ${
              submitting ? 'bg-slate-500' : 'bg-violet-600 hover:bg-violet-800'
            } px-5 py-2 font-bold text-white transition `}
          >
            {submitting ? 'Sending Message...' : 'Send Message'}
          </button>
        </form>
      </div>
    </Layout>
  )
}
