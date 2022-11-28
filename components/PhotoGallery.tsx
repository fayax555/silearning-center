import Image from 'next/image'

export default function PhotoGallery() {
  return (
    <section className='bg-red-400 py-20 text-white'>
      <div className='mx-auto max-w-[1200px] px-6 pb-8'>
        <h2 className='text-center text-4xl'>PHOTO GALLERY</h2>
        <div className='mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i}>
              <Image
                height={550}
                width={550}
                src={`/img/gallery/${i + 1}.jpg`}
                alt=''
                className='rounded-lg'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
