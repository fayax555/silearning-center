import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import { NextSeo } from 'next-seo'

type Props = { title: string; children: React.ReactNode; hideTitle?: true }

export default function Layout({ title, children, hideTitle }: Props) {
  return (
    <>
      <NextSeo
        title={title}
        description='SILC is a learning center to teach kids. We focus on improving their motor skills and building a strong foundation for their future.'
        canonical='https://silearning.center'
        openGraph={{
          url: 'https://silearning.center',
          title: 'Siyama Imad Learning Center',
          description:
            'SILC is a learning center to teach kids. We focus on improving their motor skills and building a strong foundation for their future.',
          images: [
            {
              url: '/logo.svg',
              width: 733,
              height: 322,
              alt: 'SI Learning Center logo',
              type: 'image',
            },
          ],
          site_name: 'Siyama Imad Learning Center',
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      />

      <Navbar />

      <div className='pt-14'>
        {!hideTitle && (
          <div className='mx-auto mt-20 max-w-[1200px] px-4'>
            <h1 className='text-center text-4xl font-bold text-violet-700 sm:text-6xl'>
              {title}
            </h1>
          </div>
        )}
        {children}
      </div>

      <Footer />
    </>
  )
}
