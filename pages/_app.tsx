import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const neue = localFont({
  src: '../components/neue.woff2',
  variable: '--font-neue',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${neue.variable} mb-[70rem]`}>
      <Component {...pageProps} />
    </main>
  )
}
