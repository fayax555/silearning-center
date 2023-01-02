import { type InferGetStaticPropsType } from 'next'

import Features from 'components/Features'
import Hero from 'components/Hero'
import AboutUs from 'components/AboutUs'
import Classes from 'components/Classes'
import OurTeachers from 'components/OurTeachers'
import Testimonials from 'components/Testimonials'
import PhotoGallery from 'components/PhotoGallery'
import Layout from 'components/Layout'
import { Directus, directusItems } from 'utils'
import UpcomingEvents from 'components/UpcomingEvents'
import * as S from '../types'

export default function Home(
  p: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout
      title='Siyama Imad Learning Center'
      description='Siyama Imad Learning Center is a learning center is an early education center based in Aa. Ukulhas, Maldives mainly focuses on improving skills in a playful environment under Islamic guidance.'
      hideTitle
    >
      <Hero heroImage={p.hero.image} />
      <div className='pt-10'>
        <AboutUs aboutUs={p.aboutUs} />
      </div>
      <Features features={p.features} />
      <UpcomingEvents events={p.events} />
      <Classes classes={p.classes} />
      <OurTeachers teachers={p.teachers} />
      <Testimonials testimonials={p.testimonials} />
      <PhotoGallery gallery={p.gallery} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const heroRes = await directusItems('hero').read({ fields: ['image'] })

  const featuresRes = await directusItems('features').read({
    fields: ['id', 'title', 'image',],
  })

  const teachersRes = await directusItems('teachers').read({
    fields: ['id', 'name', 'title', 'image'],
  })

  const galleryRes = await directusItems('gallery').read({
    fields: ['id', 'title', 'thumbnail'],
  })

  const classRes = await directusItems('classes').read({
    fields: ['id', 'name', 'age_group', 'class_size', 'image'],
  })

  const aboutUsRes = await directusItems('about_us').read({
    fields: ['title', 'text', 'image'],
  })

  const testimonialsRes = await directusItems('testimonials').read({
    fields: ['id', 'name', 'title', 'testimonial'],
  })

  const eventsRes = await directusItems('upcoming_events').read({
    fields: ['name', 'start', 'end', 'description', 'image'],
  })

  const hero = S.HeroSchema.parse(heroRes)
  const features = S.FeatureSchema.parse(featuresRes)
  const teachers = S.TeacherSchema.parse(teachersRes)
  const gallery = S.GallerySchema.parse(galleryRes).slice(0, 3)
  const classes = S.ClassSchema.parse(classRes)
  const aboutUs = S.AboutUsSchema.parse(aboutUsRes)
  const testimonials = S.TestimonialsSchema.parse(testimonialsRes)
  const events = S.EventsSchema.parse(eventsRes)

  return {
    props: {
      hero,
      features,
      teachers,
      gallery,
      classes,
      aboutUs,
      testimonials,
      events,
    },
  }
}
