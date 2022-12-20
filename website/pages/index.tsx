import { type InferGetStaticPropsType } from 'next'

import Features from 'components/Features'
import Hero from 'components/Hero'
import AboutUs from 'components/AboutUs'
import Classes from 'components/Classes'
import MeetOurTeachers from 'components/MeetOurTeachers'
import ParentReviews from 'components/ParentReviews'
import PhotoGallery from 'components/PhotoGallery'
import {
  AboutUsSchema,
  ClassSchema,
  FeatureSchema,
  GallerySchema,
  TeacherSchema,
} from '../types'
import Layout from 'components/Layout'

import { Directus } from 'utils'
export default function Home({
  features,
  teachers,
  gallery,
  classes,
  aboutUs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title='SI Learning Center' hideTitle>
      <Hero />
      <div className='bg-slate-50 pt-10'>
        <AboutUs aboutUs={aboutUs} />
      </div>
      <Features features={features} />
      <Classes classes={classes} />
      <MeetOurTeachers teachers={teachers} />
      <ParentReviews />
      <PhotoGallery gallery={gallery} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const directus = Directus()

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
  const gallery = GallerySchema.parse(galleryRes.data).slice(0,3)
  const classes = ClassSchema.parse(classRes.data)
  const aboutUs = AboutUsSchema.parse(aboutUsRes.data)

  return {
    props: { features, teachers, gallery, classes, aboutUs },
  }
}
