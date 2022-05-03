import Head from 'next/head'
import Header from '@components/header'
import { useState } from 'react'

export default function Layout({ children }) {
  const [position, setPosition] = useState(0)

  function handleScroll(event) {
    setPosition(event.target.scrollTop)
  }

  return (
    <>
      <Head>
        <title>OMG Website</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <Header position={ position } />
      <div className="scroll-snapping" onScroll={ handleScroll }>
        { children }
      </div>
    </>
  )
}
