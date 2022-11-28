import Features from 'components/Features'
import Hero from 'components/Hero'
import Navbar from 'components/Navbar'
import SectionTwo from 'components/SectionTwo'
import SectionThree from 'components/SectionThree'
import ChooseClasses from 'components/ChooseClasses'
import MeetOurTeachers from 'components/MeetOurTeachers'
import ParentReviews from 'components/ParentReviews'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <SectionTwo />
      <SectionThree />
      <ChooseClasses />
      <MeetOurTeachers />
      <ParentReviews />
    </div>
  )
}
