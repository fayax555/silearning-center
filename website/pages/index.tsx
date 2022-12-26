import { type InferGetStaticPropsType } from 'next'

import Features from 'components/Features'
import Hero from 'components/Hero'
import AboutUs from 'components/AboutUs'
import Classes from 'components/Classes'
import OurTeachers from 'components/OurTeachers'
import Testimonials from 'components/Testimonials'
import PhotoGallery from 'components/PhotoGallery'
import {
  AboutUsSchema,
  ClassSchema,
  FeatureSchema,
  GallerySchema,
  HeroSchema,
  TeacherSchema,
  TestimonialsSchema,
} from '../types'
import Layout from 'components/Layout'
import { Directus } from 'utils'

export default function Home({
  hero,
  features,
  teachers,
  gallery,
  classes,
  aboutUs,
  testimonials
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title='Siyama Imad Learning Center'
      description='SILC is a learning center to teach kids. We focus on improving their motor skills and building a strong foundation for their future.'
      hideTitle
    >
      <Hero heroImage={hero.image} />
      <div className='pt-10'>
        <AboutUs aboutUs={aboutUs} />
      </div>
      <Features features={features} />
      <Classes classes={classes} />
      <OurTeachers teachers={teachers} />
      <Testimonials testimonials={testimonials} />
      <PhotoGallery gallery={gallery} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const directus = Directus()

  const heroRes = await directus.items('hero').readByQuery({
    fields: ['image'],
  })

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

  const testimonialsRes = await directus.items('testimonials').readByQuery({
    fields: ['id', 'name', 'title', 'testimonial'],
  })

  const hero = HeroSchema.parse(heroRes.data)
  const features = FeatureSchema.parse(featuresRes.data)
  const teachers = TeacherSchema.parse(teachersRes.data)
  const gallery = GallerySchema.parse(galleryRes.data).slice(0, 3)
  const classes = ClassSchema.parse(classRes.data)
  const aboutUs = AboutUsSchema.parse(aboutUsRes.data)
  const testimonials = TestimonialsSchema.parse(testimonialsRes.data)

  return {
    props: {
      hero,
      features,
      teachers,
      gallery,
      classes,
      aboutUs,
      testimonials,
    },
  }
}
