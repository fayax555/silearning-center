import { type InferGetStaticPropsType } from 'next'
import Features from 'components/Features'
import Hero from 'components/Hero'
import AboutUs from 'components/AboutUs'
import Classes from 'components/Classes'
import OurTeachers from 'components/OurTeachers'
import Testimonials from 'components/Testimonials'
import PhotoGallery from 'components/PhotoGallery'
import Layout from 'components/Layout'
import { Directus } from 'utils'
import UpcomingEvents from 'components/UpcomingEvents'
import * as S from '../types'

export default function Home(
  p: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout
      title='Siyama Imad Learning Center'
      description='SILC is a learning center to teach kids. We focus on improving their motor skills and building a strong foundation for their future.'
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

  const eventsRes = await directus.items('upcoming_events').readByQuery({
    fields: ['name', 'start', 'end', 'description', 'image'],
  })

  const hero = S.HeroSchema.parse(heroRes.data)
  const features = S.FeatureSchema.parse(featuresRes.data)
  const teachers = S.TeacherSchema.parse(teachersRes.data)
  const gallery = S.GallerySchema.parse(galleryRes.data).slice(0, 3)
  const classes = S.ClassSchema.parse(classRes.data)
  const aboutUs = S.AboutUsSchema.parse(aboutUsRes.data)
  const testimonials = S.TestimonialsSchema.parse(testimonialsRes.data)
  const events = S.EventsSchema.parse(eventsRes.data)

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
