const inputs = [
  'CONTACT PHONE',
  'ADD US TO THE WAITING LIST',
  "PARENT'S NAME",
] as const

export default function EnrollChild() {
  return (
    <section className="bg-slate-600 bg-[url('/img/enroll-bg.jpg')] bg-cover bg-center bg-no-repeat py-24">
      <div className='mx-auto max-w-[1200px] px-4 text-white'>
        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl'>HOW TO ENROLL YOUR CHILD?</h2>
          <p className='mt-10 text-xl font-bold md:mt-20'>
            CALL +1 000 123 1234 OR FILL IN THE FORM BELOW
          </p>
          <p className='mx-auto mt-6 max-w-[90ch]'>
            Lorem ipsum dolor sit amet, consectetur adcing elit Lorem ipsum
            dolor sit amet, consectetur adip iscing elit psum dolor sit amet.
            Aenean consectetur fringilla mi in mollis. Etiam eleifend
            sollicitudin dignissim.
          </p>
        </div>

        <form className='mt-14 grid gap-8 text-slate-800 md:grid-cols-2'>
          <div className='grid gap-3'>
            {inputs.map((input) => (
              <input
                key={input}
                className='rounded-md px-4 py-3 font-bold placeholder:text-slate-500'
                type='text'
                placeholder={input}
              />
            ))}
          </div>
          <textarea
            className='row-[1/4] max-h-[400px] min-h-[120px] rounded-md p-4 placeholder:font-bold placeholder:text-slate-600 md:col-[2]'
            placeholder='YOUR MESSAGE'
          ></textarea>
          <button
            type='submit'
            className='font-nunito col-[1/-1] mt-4 justify-self-center rounded-md bg-red-500 px-14 py-3 text-xl text-white'
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  )
}
