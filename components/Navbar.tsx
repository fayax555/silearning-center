import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  ['HOME', 'text-red-600'],
  ['ADMISSION', 'text-[hsl(308,95%,40%)]'],
  ['TIMETABLE', 'text-blue-600'],
  ['CONTACT', 'text-[hsl(113,85%,29%)]'],
] as const

export default function Navbar() {
  return (
    <nav className='mx-auto flex max-w-[1200px] items-center justify-between px-4'>
      <Link href='/'>
        <Image height={150} width={150} src='/img/silogo.svg' alt='' />
      </Link>
      <ul className='hidden md:flex'>
        {navItems.map(([item, color]) => (
          <li key={item}>
            <a
              href='#'
              className={`block ${color} p-4 py-7 font-extrabold`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
