import { type InferGetStaticPropsType } from 'next'
import { Directus } from '@directus/sdk'

import Features from 'components/Features'
import Hero from 'components/Hero'
import Navbar from 'components/Navbar'
import SectionTwo from 'components/SectionTwo'
import SectionThree from 'components/SectionThree'
import ChooseClasses from 'components/ChooseClasses'
import MeetOurTeachers from 'components/MeetOurTeachers'
import ParentReviews from 'components/ParentReviews'
import UpcomingEvents from 'components/UpcomingEvents'
import PhotoGallery from 'components/PhotoGallery'
import EnrollChild from 'components/EnrollChild'
import Footer from 'components/Footer'
import { FeatureSchema, GallerySchema, TeacherSchema } from 'types'

export default function Home({
  features,
  teachers,
  gallery,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features features={features} />
      <SectionTwo />
      <SectionThree />
      <ChooseClasses />
      <MeetOurTeachers teachers={teachers} />
      <ParentReviews />
      <UpcomingEvents />
      <PhotoGallery gallery={gallery} />
      <EnrollChild />
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const directus = new Directus('https://a4ida36s.directus.app')

  const featuresRes = await directus.items('features').readByQuery({
    fields: ['id', 'title', 'image'],
  })

  const teachersRes = await directus.items('teachers').readByQuery({
    fields: ['id', 'name', 'title', 'image'],
  })

  const galleryRes = await directus.items('photo_gallery').readByQuery({
    fields: ['id', 'image'],
  })

  const features = FeatureSchema.array().parse(featuresRes.data)
  const teachers = TeacherSchema.array().parse(teachersRes.data)
  const gallery = GallerySchema.array().parse(galleryRes.data)

  // console.log(features)

  return {
    props: {
      features,
      teachers,
      gallery,
    },
  }
}
