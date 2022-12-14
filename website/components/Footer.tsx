import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLocationSharp } from 'react-icons/io5'
import { ImClock, ImMobile } from 'react-icons/im'

const contactDetails = [ 
  [IoLocationSharp, 'San Franciscor, CA 94102, US 1234, Some Str'],
  [
    ImClock,
    'Monday - Friday: 7:30 am - 17:00 pm, Saturday: 8:00 am - 15:00 pm',
  ],
  [ImMobile, '+1 000 123 1245; +1 000 567 5678'],
] as const

const SocialIcons = [
  ['twitter', BsTwitter, 'https://twitter.com'],
  ['linkedin', FaLinkedinIn, 'https://linkedin.com'],
  ['instagram', AiFillInstagram, 'https://instagram.com'],
  ['facebook', FaFacebookF, 'https://facebook.com'],
  ['youtube', FaYoutube, 'https://youtube.com'],
] as const

export default function Footer() {
  return (
    <footer className='bg-purple-600 py-16 text-center text-white'>
      <h2 className='text-4xl md:text-6xl font-bold'>SI Learning Center</h2>
      <div className='grid gap-6 px-4 pt-12 text-sm font-semibold'>
        {contactDetails.map(([Icon, text]) => (
          <div key={text} className='flex items-center justify-center gap-2'>
            <Icon size={16} />
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div className='mx-auto mt-14 grid max-w-[350px] grid-cols-5 justify-items-center md:gap-1'>
        {SocialIcons.map(([name, Icon, link]) => (
          <a
            className='grid h-[50px] w-[50px] place-items-center rounded-full bg-slate-200 p-2 text-slate-800 md:h-[60px] md:w-[60px]'
            key={name}
            title={name}
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            <Icon className='text-2xl md:text-3xl' />
          </a>
        ))}
      </div>
    </footer>
  )
}
