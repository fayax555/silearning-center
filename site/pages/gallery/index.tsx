import Layout from 'components/Layout'
import { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GallerySchema } from 'types'
import { directusItems, slugify } from 'utils'

type Props = InferGetStaticPropsType<typeof getStaticProps>
export default function GalleryPage({ gallery }: Props) {
  return (
    <Layout title='Gallery' description=''>
      <div
        className={`mx-auto mt-16 mb-52 flex max-w-[1200px] flex-wrap justify-center gap-10 px-5`}
      >
        {gallery.length ? (
          <>
            {gallery.map(({ title, thumbnail }) => (
              <Link
                href={`/gallery/${slugify(title)}`}
                key={title}
                className='relative grid w-full min-w-[280px] max-w-[380px] flex-1 md:min-w-[300px] lg:max-w-[31%]'
              >
                <div className='z-10 bg-white p-5 shadow-md'>
                  <Image
                    height={600}
                    width={600}
                    src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${thumbnail}`}
                    alt=''
                    className='block h-[230px] w-full object-cover'
                  />
                  <h3 className='mt-3 text-center text-lg font-bold text-violet-500'>
                    {title}
                  </h3>
                </div>
                <div className='rotate absolute inset-0 shadow-md' />
              </Link>
            ))}
          </>
        ) : (
          <p>No gallery items found</p>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const galleryRes = await directusItems('gallery').read({
    fields: ['id', 'title', 'thumbnail'],
  })

  const gallery = GallerySchema.parse(galleryRes)

  return { props: { gallery } }
}
