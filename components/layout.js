import Head from 'next/head'
import Header from '@components/header'
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  function backgroundRender(path) {
    if (path == '/') {
      return (
        <video className="fixed top-0 right-0 bottom-0 left-0 -z-10 w-full" src="http://139.59.117.210/omg-website/video/index.mp4" autoPlay muted loop></video>
      )
    } else if (path == '/about') {
      return (
        <video className="fixed top-0 right-0 bottom-0 left-0 -z-10 w-full" src="http://139.59.117.210/omg-website/video/about.mov" autoPlay muted loop></video>
      )
    } else if (path == '/contact') {
      return (
        <video className="fixed top-0 right-0 bottom-0 left-0 -z-10 w-full" src="http://139.59.117.210/omg-website/video/contact.mp4" autoPlay muted loop></video>
      )
    } else if (path == '/gameplay') {
      return (
        <div className="fixed top-20 right-0 bottom-0 left-0 -z-10" style={{backgroundImage: 'url(/gameplay.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center'}}></div>
      )
    }
  }

  const router = useRouter()

  return (
    <>
      { backgroundRender(router.pathname) }
      <Head>
        <title>OMG Website</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className="container mx-auto">
        {children}
      </main>
    </>
  )
}
