import Head from 'next/head'
import Image from 'next/image'
import { getLayout } from 'components/DefaultLayout'
import About from 'features/About'
import WorkingHours from 'features/WorkingHours'
import Subscription from 'features/Subscription'
import Services from 'features/Services'
import Events from 'features/Events'
import Contact from 'features/Contact'
import Footer from 'features/Footer'

export default function Home() {
  return (
    <div>
      <About />
      <WorkingHours />
      <Subscription />
      <Services />
      <Events />
      <Contact />
      <Footer />
    </div>
  )
}

Home.getLayout = getLayout
