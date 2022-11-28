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
    <nav className='mx-auto flex max-w-[1200px] items-center justify-between px-4  shadow-md'>
      <Image height={180} width={180} src='/img/logo.png' alt='' />
      <ul className='flex'>
        {navItems.map(([item, color]) => (
          <li key={item}>
            <a href='#' className={`block ${color} p-4 py-7 text-lg font-bold font-neue`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
