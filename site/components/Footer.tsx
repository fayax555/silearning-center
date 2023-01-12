import { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { MdMail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'

const SocialIcons = [
  ['instagram', AiFillInstagram, 'https://instagram.com'],
  [
    'facebook',
    FaFacebookF,
    'https://web.facebook.com/profile.php?id=100084554445045',
  ],
] as const

export default function Footer() {
  const [clicked, setClicked] = useState(false)

  return (
    <footer className='bg-slate-900 py-16 text-white'>
      <div className='mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-10 px-4 max-md:text-center sm:gap-4 md:flex-row'>
        <div>
          <h2 className='mb-2 text-2xl font-bold'>
            Siyama Imad Learning Center
          </h2>
          <p className='text-xs'>&copy; 2022. All Rights Reserved</p>
        </div>

        <div className='contents justify-between gap-20 md:flex'>
          <div className='grid gap-4 font-semibold max-md:justify-items-center'>
            <div
              onClick={() => {
                setClicked(true)
                navigator.clipboard.writeText(
                  'siyamaimadlearningcentre@gmail.com'
                )
                setTimeout(() => setClicked(false), 2000)
              }}
              className={`flex cursor-pointer items-center gap-3 ${
                clicked ? '[&>button]:block' : '[&>button]:hover:block'
              } `}
            >
              <MdMail size={26} />
              <button
                type='button'
                className='absolute hidden -translate-y-6 translate-x-9 rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-900 transition'
              >
                {clicked ? 'Copied' : 'Click to Copy'}
              </button>
              <p>siyamaimadlearningcentre@gmail.com</p>
            </div>

            <div className='flex items-center gap-3'>
              <AiFillPhone size={26} />
              <a href='tel:7615084'>7615084</a>
            </div>
          </div>

          <div className='flex gap-4'>
            {SocialIcons.map(([name, Icon, link]) => (
              <a
                className='grid h-[40px] w-[40px] place-items-center rounded-full bg-slate-200 p-2 text-slate-600 transition hover:text-violet-800 md:h-[50px] md:w-[50px]'
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
      </div>
    </footer>
  )
}
