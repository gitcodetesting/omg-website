import Head from 'next/head'
import Header from '@components/header'
import { useState, useRef } from 'react'

export default function Layout({ children }) {
  const [position, setPosition] = useState(0)
  const [scrollSnap, setScrollSnap] = useState(null)
  const scrollRef = useRef(null);

  function handleScroll(event) {
    setPosition(event.target.scrollTop)
    setScrollSnap(scrollRef)
  }

  return (
    <>
      <Head>
        <title>Occupy Mars Games - By Gamers, For Gamers</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <Header position={ position } scrollSnap={ scrollSnap } />
      <div className="scroll-snapping" onScroll={ handleScroll } ref={ scrollRef }>
        { children }
      </div>
    </>
  )
}
