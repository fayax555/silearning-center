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
        setError({ id: 'mobile', text: 'Mobile number must be 7 digits' })

        return setTimeout(() => setError({ id: '', text: '' }), 3000)
      }

      setSubmitting(true)

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mobile, message }),
      })

      if (res.ok) {
        toast.success('Your message has been sent')
        setName('')
        setMobile('')
        setMessage('')
      } else {
        toast.error('Failed to send message')
      }
    } catch (error) {
      toast.error('Failed to send message')
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

                  setVal(e.target.value.replace(/\-/g, ''))
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

          <div className='relative'>
            <textarea
              required
              id='message'
              placeholder=' '
              onChange={(e) => setMessage(e.target.value)}
              className='peer block min-h-[120px] w-full appearance-none rounded-lg bg-slate-200 px-2.5 pb-2.5 pt-4 text-slate-900 outline-violet-600'
            />
            <label
              htmlFor='message'
              className='absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text rounded-md bg-slate-50 px-2 text-slate-500 duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-slate-200  peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-slate-50 peer-focus:px-2  peer-focus:text-violet-900'
            >
              Message
            </label>
          </div>

          <button
            disabled={submitting}
            type='submit'
            className={`mt-8 w-full rounded-md ${
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
