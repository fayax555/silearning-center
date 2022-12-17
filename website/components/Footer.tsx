import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'

const contactDetails = [
  [MdMail, 'contact@silearning.center'],
  [AiFillPhone, '7777777'],
] as const

const SocialIcons = [
  ['twitter', BsTwitter, 'https://twitter.com'],
  ['instagram', AiFillInstagram, 'https://instagram.com'],
  ['facebook', FaFacebookF, 'https://facebook.com'],
  ['youtube', FaYoutube, 'https://youtube.com'],
] as const

export default function Footer() {
  return (
    <footer className='bg-slate-900 py-16 text-white'>
      <div className='mx-auto flex max-w-[1200px] flex-col items-center justify-evenly gap-10 px-4 sm:flex-row sm:gap-4'>
        <div>
          <h2 className='text-2xl font-bold mb-4'>SI Learning Center</h2>
          <p className='text-sm'>&copy; 2022. All Rights Reserved</p>
        </div>
        <div className='px-4text-sm grid gap-6 font-semibold'>
          {contactDetails.map(([Icon, text]) => (
            <div key={text} className='flex items-center gap-3 text-lg'>
              <Icon size={30} />
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className='flex gap-4'>
          {SocialIcons.map(([name, Icon, link]) => (
            <a
              className='grid h-[40px] w-[40px] place-items-center rounded-full bg-slate-200 p-2 text-slate-700 md:h-[50px] md:w-[50px]'
              key={name}
              title={name}
              href={link}
              target='_blank'
              rel='noreferrer'
            >
              <Icon className='text-xl md:text-2xl' />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
