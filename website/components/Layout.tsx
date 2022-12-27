import Footer from './Footer'
import Navbar from './Navbar'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { IoMdArrowBack } from 'react-icons/io'

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
      <NextSeo
        title={title}
        description={description}
        canonical='https://silearning.center'
        openGraph={{
          url: 'https://silearning.center',
          title,
          description,
          images: [
            {
              url: '/logo.png',
              width: 1435,
              height: 594,
              alt: 'SI Learning Center logo',
              type: 'image',
            },
          ],
          site_name: 'Siyama Imad Learning Center',
        }}
        twitter={{
          handle: '@silearningcenter',
          site: '@silearningcenter',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      />

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
