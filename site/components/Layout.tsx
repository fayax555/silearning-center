import Footer from './Footer'
import Navbar from './Navbar'
import Link from 'next/link'
import { IoMdArrowBack } from 'react-icons/io'
import Head from 'next/head'

type Props = {
  title: string
  children: React.ReactNode
  hideTitle?: true
  description?: string
  backButtonText?: string
}

export default function Layout({
  title,
  children,
  hideTitle,
  description,
  backButtonText,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='robots' content='index,follow' />
        <meta name='description' content={description} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@silearningcenter' />
        <meta name='twitter:creator' content='@silearningcenter' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content='https://silearning.center' />
        <meta property='og:image' content='/logo.png' />
        <meta property='og:image:alt' content='SI Learning Center logo' />
        <meta property='og:image:type' content='image' />
        <meta property='og:image:width' content='1435' />
        <meta property='og:image:height' content='594' />
        <meta property='og:site_name' content='Siyama Imad Learning Center' />
        <link rel='canonical' href='https://silearning.center' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <Navbar />

        <div className='pt-14' />
        {!hideTitle && (
          <div className='mx-auto mt-20 grid max-w-[1200px] justify-items-center px-4'>
            {backButtonText && (
              <Link
                href={`/${backButtonText.toLowerCase()}`}
                className='mb-3 flex items-center gap-2 rounded-md bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-800 transition hover:bg-violet-200'
              >
                <IoMdArrowBack />
                <span>{backButtonText}</span>
              </Link>
            )}
            <h1 className='text-center text-4xl font-bold text-violet-700 sm:text-6xl'>
              {title}
            </h1>
          </div>
        )}
      </header>

      <main>{children}</main>

      <Footer />
    </>
  )
}
