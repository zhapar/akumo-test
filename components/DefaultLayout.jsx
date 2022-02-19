import Head from 'next/head'
import Navbar from 'features/Navigation'
// import Footer from 'features/Footer'

const getAbsoluteURL = (path) => {
  const baseURL = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
  return baseURL + path
}

const DefaultLayout = (props) => (
  <>
    <Head>
      <title>aKumoSolutions - A tech hub powered by network of engineers</title>
      <meta charSet="utf-8" />
      <meta
        property="og:title"
        key="title"
        content="aKumoSolutions - A tech hub powered by network of engineers"
      />
      <meta
        property="og:description"
        key="description"
        content="A tech hub powered by network of engineers. At aKumoSolutions we empower businesses and individuals to achieve their full potential through variety of services."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://akumosolutions.io/" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="w-full flex flex-col">
      <Navbar className="flex-shrink-0" />
      <main className="flex-grow">{props.children}</main>
      {/* <Footer /> */}
    </div>
  </>
)

export default DefaultLayout

export const getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>
