import Features from 'components/Features'
import Hero from 'components/Hero'
import Navbar from 'components/Navbar'
import SectionTwo from 'components/SectionTwo'
import SectionThree from 'components/SectionThree'
import ChooseClasses from 'components/ChooseClasses'
import MeetOurTeachers from 'components/MeetOurTeachers'
import ParentReviews from 'components/ParentReviews'
import ClassTimetable from 'components/ClassTimetable'
import UpcomingEvents from 'components/UpcomingEvents'
import PhotoGallery from 'components/PhotoGallery'
import EnrollChild from 'components/EnrollChild'
import Footer from 'components/Footer'

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
      <ClassTimetable />
      <UpcomingEvents />
      <PhotoGallery />
      <EnrollChild />
      <Footer />
    </div>
  )
}
