import Head from 'next/head'
import Navbar from './Navbar'

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
        <meta
          name='description'
          content={description ?? 'SILC is a learning centre to teach kids.'}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      {!hideTitle && (
        <div className='mx-auto mt-20 max-w-[1200px] px-4'>
          <h1 className='text-center text-6xl font-bold text-violet-700'>
            {title}
          </h1>
        </div>
      )}
      {children}
    </>
  )
}