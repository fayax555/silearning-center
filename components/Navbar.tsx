import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  ['HOME', 'text-red-600', 'hover:bg-red-50'],
  ['ADMISSION', 'text-[hsl(308,95%,40%)]', 'hover:bg-purple-50'],
  ['TIMETABLE', 'text-blue-600', 'hover:bg-blue-50'],
  ['CONTACT', 'text-[hsl(113,85%,29%)]', 'hover:bg-green-50'],
] as const

export default function Navbar() {
  return (
    <nav className='mx-auto flex max-w-[1200px] items-center justify-between px-4'>
      <Link href='/'>
        <Image height={150} width={150} src='/img/silogo.svg' alt='' />
      </Link>
      <ul className='hidden md:flex'>
        {navItems.map(([item, color, hoverColor]) => (
          <li key={item}>
            <a
              href={`/${item.toLowerCase()}`}
              className={`block ${color} p-4 py-7 font-extrabold ${hoverColor}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
