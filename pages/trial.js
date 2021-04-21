import Head from 'next/head'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import Hero from '@components/Testimonial'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="site-container">
      <Navbar>
        
      </Navbar>

      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="THIS IS THE TRIAL PAGE" />

        <Hero />

      </main>

      <Footer />
    </div>
  )
}
