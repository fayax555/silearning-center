import Navbar from 'components/Navbar'

export default function Admission() {
  return (
    <>
      <Navbar />

      <div>
        <form className='mx-auto mt-20 max-w-[600px] rounded-md border-2 border-slate-400 p-10 [&>*]:block'>
          <label htmlFor='studentName'>Student Name</label>
          <input
            className='mt-1 mb-6 w-full rounded-md bg-slate-200 px-4 py-2'
            type='text'
            name='studentName'
            id='studentName'
            placeholder='Student Name'
          />

          <label htmlFor='parentName'>Parent Name</label>
          <input
            className='mt-1 mb-6 w-full rounded-md bg-slate-200 px-4 py-2'
            type='text'
            name='parentName'
            id='parentName'
            placeholder='Parent Name'
          />

          <label htmlFor='mobile'>Mobile Number</label>
          <input
            className='mt-1 mb-6 w-full rounded-md bg-slate-200 px-4 py-2'
            type='number'
            name='mobile'
            id='mobile'
            placeholder='Mobile Number'
          />

          <label htmlFor='program'>Program</label>
          <select
            name='program'
            id='program'
            className='mt-2 w-full cursor-pointer rounded-md border-r-8 border-slate-200 bg-slate-200 px-4 py-2'
          >
            <option value=''>Select Program</option>
            <option value=''>Program 1</option>
            <option value=''>Program 2</option>
          </select>

          <button
            type='submit'
            className='mt-8 w-full rounded-md bg-violet-600 px-5 py-2 font-bold text-white'
          >
            Submit
          </button>
        </form>

        <div className='mt-20 text-center'>
          <h2 className='text-4xl font-bold text-slate-700'>Our Programs</h2>
        </div>
      </div>
    </>
  )
}
