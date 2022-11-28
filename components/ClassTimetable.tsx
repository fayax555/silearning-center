export default function ClassTimetable() {
  return (
    <section className='h-[920px] bg-gray-800 py-24'>
      <div className='mx-auto max-w-[1200px] px-6'>
        <h2 className='text-center text-5xl'>CLASS TIMETABLE</h2>
        <div className='mt-20 grid grid-cols-1 gap-10 md:grid-cols-2'>
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <div className='mr-4 h-1 w-1/2 bg-red-500'></div>
              <h3 className='text-2xl'>MONDAY</h3>
            </div>
            <div className='mt-4 flex items-center'>
              <div className='mr-4 h-1 w-1/2 bg-red-500'></div>
              <h3 className='text-2xl'>TUESDAY</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
