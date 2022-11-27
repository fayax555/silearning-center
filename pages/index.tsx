import Features from '../components/Features'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}
