import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <div id="about" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <div className="container mx-auto p-5">
          <Link href="#home">
            <a>
              <Image src='/logo-sm.png' width={225} height={87} />
            </a>
          </Link>
        </div>
      </div>
      <video className="absolute top-0 right-0 bottom-0 left-0 -z-10 w-full h-full object-cover" src="/video/about.gif" autoPlay muted loop></video>
      <div className="absolute top-60 right-0 left-0">
        <div className="text-center text-white md:text-2xl max-w-2xl mx-auto font-poppins px-5">
          <p className="mb-5">Occupy Mars Games is near future gaming.</p>
          <p className="mb-5">You're a gamer in 2022 on Earth. Play-to-earn is in its infancy.</p>
          <p className="mb-5">This is not right,.. 'Pay To Play' is the past,</p>
          <p>Welcome to the future of rewarding gameplay</p>
        </div>
      </div>
    </div>
  )
}
