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
  GallerySchema,
  TeacherSchema,
} from '../types'
import { z } from 'zod'

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

const FeatureSchema = z
  .object({
    id: z.number(),
    title: z.string().nullable(),
    image: z.string().nullable(),
  })
  .array()

export const getStaticProps = async () => {
  const directus = new Directus('http://localhost:8055')

  const featuresRes = await directus.items('features').readByQuery({
    fields: ['id', 'title', 'image'],
  })

  const teachersRes = await directus.items('teachers').readByQuery({
    fields: ['id', 'name', 'title', 'image'],
  })

  const galleryRes = await directus.items('gallery').readByQuery({
    fields: ['id', 'title', 'thumbnail'],
  })

  console.log(galleryRes)

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
    props: { features,teachers,gallery, classes, aboutUs },
  }
}
