import Image from 'next/image'

const navItems = [
  ['HOME', 'text-red-500'],
  ['TIMETABLE', 'text-orange-500'],
  ['FEATURES', 'text-yellow-500'],
  ['SHORTCODES', 'text-lime-500'],
  ['POST TYPES', 'text-blue-500'],
  ['SHOP', 'text-indigo-500'],
] as const

export default function Navbar() {
  return (
    <nav className='mx-auto flex max-w-[1200px] items-center justify-between px-4'>
      <Image height={180} width={180} src='/img/silogo.svg' alt='' />
      <ul className='hidden md:flex'>
        {navItems.map(([item, color]) => (
          <li key={item}>
            <a
              href='#'
              target='_blank'
              className={`block ${color} font-neue p-4 py-7 text-lg`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
