import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

const navItems = [
  ['HOME', 'text-red-600', 'hover:bg-red-50'],
  ['ADMISSION', 'text-[hsl(308,95%,40%)]', 'hover:bg-purple-50'],
  // ['TIMETABLE', 'text-blue-600', 'hover:bg-blue-50'],
  ['GALLERY', 'text-[hsl(113,85%,29%)]', 'hover:bg-green-50'],
  ['CONTACT', 'text-[hsl(204,83%,47%)]', 'hover:bg-[hsl(204,83%,96%)]'],
] as const

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 top-0 z-20 bg-white ${
        (isScrolled || isOpen) && 'shadow-sm'
      }`}
    >
      <nav className='mx-auto max-w-[1200px] items-center justify-between px-4 py-1 sm:flex'>
        <div className='flex items-center justify-between sm:contents'>
          <Link href='/'>
            <Image height={110} width={110} src='/img/logo.svg' alt='' />
          </Link>
          <AiOutlineMenu
            className='block text-2xl text-blue-800 sm:hidden'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute inset-x-0 top-16 z-20 mx-2 rounded-md  bg-white py-5 text-center  shadow-md sm:static sm:flex sm:py-0 sm:shadow-none`}
        >
          {navItems.map(([item, color, hoverColor]) => (
            <li key={item}>
              <Link
                href={`/${(item === 'HOME' ? '' : item).toLowerCase()}`}
                className={`block ${color} text-sm p-4 font-bold sm:py-4 ${hoverColor}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
