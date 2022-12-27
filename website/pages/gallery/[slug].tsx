import Layout from 'components/Layout'
import { GetStaticPropsContext } from 'next'
import Image from 'next/image'
import { type Gallery, GallerySchema } from 'types'
import { Directus, slugify } from 'utils'

type GalleryPageProps = { gallery: Gallery & { images: string[] } }

export default function GalleryPage({ gallery }: GalleryPageProps) {
  return (
    <Layout title={gallery.title ?? ''} backButtonText='Gallery'>
      <div className='mx-auto mb-40 mt-20 grid max-w-[1200px] gap-10 px-4'>
        {gallery.images?.map((image) => (
          <Image
            key={image}
            src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image}`}
            alt=''
            width={1980}
            height={1080}
            className='h-auto w-full'
          />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug
  if (typeof slug !== 'string') throw new Error('Invalid id')

  const directus = Directus()

  const galleryRes = await directus.items('gallery').readByQuery({
    fields: ['id', 'title'],
  })

  const galleryFilesRes = await directus.items('gallery_files').readByQuery({
    fields: ['id', 'gallery_id', 'directus_files_id'],
  })

  const galleryList = GallerySchema.parse(galleryRes.data)

  const id = galleryList.find((g) => slugify(g.title) === slug)?.id

  const images = galleryFilesRes.data
    ?.map((file) => {
      const fileId = file.directus_files_id
      if (typeof fileId === 'string' && file.gallery_id === Number(id))
        return fileId
    })
    .filter(Boolean)

  if (!images) throw new Error('No images found')

  const gallery = galleryList.find((g) => g.id === Number(id))

  if (!gallery) return { notFound: true }

  return { props: { gallery: { ...gallery, images } } }
}

export async function getStaticPaths() {
  const directus = Directus()

  const galleryRes = await directus.items('gallery').readByQuery({
    fields: ['id', 'title'],
  })

  const galleryList = GallerySchema.parse(galleryRes.data)

  const paths = galleryList.map((g) => ({ params: { slug: slugify(g.title) } }))
  return { paths, fallback: 'blocking' }
}
