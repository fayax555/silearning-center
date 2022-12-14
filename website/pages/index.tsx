import { type InferGetStaticPropsType } from 'next'
import { Directus } from '@directus/sdk'

import Features from 'components/Features'
import Hero from 'components/Hero'
import Navbar from 'components/Navbar'
import AboutUs from 'components/AboutUs'
import SectionThree from 'components/SectionThree'
import ChooseClasses from 'components/ChooseClasses'
import MeetOurTeachers from 'components/MeetOurTeachers'
import ParentReviews from 'components/ParentReviews'
import PhotoGallery from 'components/PhotoGallery'
import EnrollChild from 'components/EnrollChild'
import Footer from 'components/Footer'
import {
  AboutUsSchema,
  ClassSchema,
  FeatureSchema,
  GallerySchema,
  TeacherSchema,
} from '../types'

export default function Home({
  features,
  teachers,
  gallery,
  classes,
  aboutUs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features features={features} />
      <AboutUs aboutUs={aboutUs} />
      <SectionThree />
      <ChooseClasses classes={classes} />
      <MeetOurTeachers teachers={teachers} />
      <ParentReviews />
      <PhotoGallery gallery={gallery} />
      <EnrollChild />
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL
  if (!directusUrl) throw new Error('NEXT_PUBLIC_DIRECTUS_URL is not defined')
  const directus = new Directus(directusUrl)

  const featuresRes = await directus.items('features').readByQuery({
    fields: ['id', 'title', 'image'],
  })

  const teachersRes = await directus.items('teachers').readByQuery({
    fields: ['id', 'name', 'title', 'image'],
  })

  const galleryRes = await directus.items('gallery').readByQuery({
    fields: ['id', 'title', 'thumbnail'],
  })

  const classRes = await directus.items('classes').readByQuery({
    fields: ['id', 'name', 'age_group', 'class_size', 'image'],
  })

  const aboutUsRes = await directus.items('about_us').readByQuery({
    fields: ['title', 'text', 'image'],
  })

  const features = FeatureSchema.parse(featuresRes.data)
  const teachers = TeacherSchema.parse(teachersRes.data)
  const gallery = GallerySchema.parse(galleryRes.data)
  const classes = ClassSchema.parse(classRes.data)
  const aboutUs = AboutUsSchema.parse(aboutUsRes.data)

  return {
    props: { features, teachers, gallery, classes, aboutUs },
  }
}
