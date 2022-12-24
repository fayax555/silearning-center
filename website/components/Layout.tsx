import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import { NextSeo } from 'next-seo'

type Props = {
  title: string
  children: React.ReactNode
  hideTitle?: true
  description?: string
}

export default function Layout({
  title,
  children,
  hideTitle,
  description,
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
              width: 1385,
              height: 502,
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
          <div className='mx-auto mt-20 max-w-[1200px] px-4'>
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
