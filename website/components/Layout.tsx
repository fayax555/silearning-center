import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import { NextSeo } from 'next-seo'

type Props = {
  title: string
  description?: string
  children: React.ReactNode
  hideTitle?: true
}

export default function Layout({
  title,
  description,
  children,
  hideTitle,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <NextSeo
          description='SILC is a learning centre to teach kids. We focus on improving their motor skills and building a strong foundation for their future.'
          canonical='https://silearning.center'
          openGraph={{
            url: 'https://silearning.center',
            title: 'SI Learning Center',
            description:
              'SILC is a learning centre to teach kids. We focus on improving their motor skills and building a strong foundation for their future.',
            images: [
              {
                url: '/logo.svg',
                width: 733,
                height: 322,
                alt: 'SI Learning Center logo',
                type: 'image',
              },
            ],
            site_name: 'SI Learning Center',
          }}
        />
       
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
