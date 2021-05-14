import Head from 'next/head'
import Header from '@components/Header'
import Hero from '@components/Hero'
import Navbar from '@components/Navbar'
import Testimonial from '@components/Testimonial'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div className="site-container">
      <Navbar>

      </Navbar>

      <Hero></Hero>

bacon UPDATED
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="" />

        <Testimonial />

      </main>

      <Footer />
    </div>
  )
}
