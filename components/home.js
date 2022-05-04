import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div id="home" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <div className="container mx-auto px-5">
          <Link href="#home">
            <a>
              <Image src='/logo-lg.png' width={256} height={219} />
            </a>
          </Link>
        </div>
      </div>
      <video className="absolute top-0 right-0 bottom-0 left-0 -z-10 w-full h-full object-cover" src="/video/index.mp4" autoPlay muted loop></video>
      <div className="container py-20 px-5 mx-auto mt-5 flex md:justify-end justify-center md:items-start items-center">
        <div className="mr-2">
          <Link href="#">
            <a>
              <Image src="/appstore.svg" width={128} height={50} />
            </a>
          </Link>
        </div>
        <div>
          <Link href="#">
            <a>
              <Image src="/googleplay.svg" width={128} height={50} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
