import { InferGetStaticPropsType, GetStaticProps } from 'next'
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
import { FeatureSchema, type Feature } from 'types'
import { z } from 'zod'

export default function Home({
  features,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Features features={features} /> */}
      <SectionTwo />
      <SectionThree />
      <ChooseClasses />
      <MeetOurTeachers />
      <ParentReviews />
      <UpcomingEvents />
      <PhotoGallery />
      <EnrollChild />
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const directus = new Directus('https://a4ida36s.directus.app')

  const featuresRes = await directus.items('features').readByQuery({
    fields: ['title', 'id', 'image'],
  })

  const features = FeatureSchema.array().parse(featuresRes.data)

  // console.log(features)

  return {
    props: {
      features: features,
    },
  }
}
