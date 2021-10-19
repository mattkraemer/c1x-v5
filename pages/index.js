import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// Components
import Header from '../components/Header'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Technologies />
      <Projects />
      <About />
      <Footer />
    </>
  )
}
