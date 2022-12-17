import Layout from 'components/Layout'
import { FormEvent, Fragment, useState } from 'react' // 67 lines

export default function ContactPage() {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')

  const formInputs = [
    ['Name', 'name', 'text', setName],
    ['Mobile Number', 'mobile', 'number', setMobile],
  ] as const

  console.log({ name, mobile, message })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, mobile, message }),
    })

    if (res.ok) {
      alert('Form submitted successfully')
    } else {
      alert('Failed to submit form')
    }
  }

  return (
    <Layout title='Contact Us'>
      <div className='mb-40'>
        <form
          onSubmit={handleSubmit}
          className='mx-4 mt-14 max-w-[600px]  rounded-md border-2 border-violet-400 px-4 py-8 sm:mx-auto sm:p-10 [&>*]:block'
        >
          {formInputs.map(([label, id, type, setter]) => (
            <Fragment key={label}>
              <label htmlFor={id}>{label}</label>
              <input
                required
                className='mt-1 mb-6 w-full rounded-md border-2 bg-slate-200 px-4 py-2 outline-violet-600'
                type={type}
                placeholder={label}
                id={id}
                onChange={(e) => setter(e.target.value)}
              />
            </Fragment>
          ))}

          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            placeholder='Message'
            onChange={(e) => setMessage(e.target.value)}
            className='mt-1 mb-6 min-h-[120px] w-full rounded-md bg-slate-200 px-4 py-2 outline-violet-600'
          />

          <button
            type='submit'
            className='mt-8 w-full rounded-md bg-violet-600 px-5 py-2 font-bold text-white transition hover:bg-violet-800'
          >
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  )
}
