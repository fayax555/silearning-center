import Features from '../components/Features'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import MeetOurTeachers from '../components/MeetOurTeachers'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <MeetOurTeachers />
    </div>
  )
}
