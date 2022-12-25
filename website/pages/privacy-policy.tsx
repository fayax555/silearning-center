import type { ReactNode } from 'react'
import Link from 'next/link'
import Layout from 'components/Layout'

const P = ({ children }: { children: ReactNode }) => (
  <p className='text-lg text-slate-800'>{children}</p>
)

const PrivacyPolicyPage = () => {
  return (
    <Layout title='Privacy Policy'>
      <div className='mx-auto grid max-w-2xl gap-4 py-14'>
        <P>
          Your privacy is important to us. It is the policy of this website to
          respect your privacy regarding any information we may collect from you
          across our website,{' '}
          <Link href='https://silearning.center' className='text-blue-700'>
            silearning.center
          </Link>
          , and other sites we own and operate.
        </P>
        <P>
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </P>
        <P>
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorized access, disclosure, copying, use or
          modification.
        </P>
        <P>
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </P>
        <P>
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective privacy policies.
        </P>
        <P>
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </P>
        <P>
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us. Our email:
          <code>
            <a href='mailto:instuntmv@gmail.com'>instuntmv@gmail.com</a>
          </code>
        </P>
        <P>This policy is effective as of 25 December 2022.</P>
      </div>
    </Layout>
  )
}

export default PrivacyPolicyPage
