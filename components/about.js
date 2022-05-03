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
      <video className="absolute top-0 right-0 bottom-0 left-0 -z-10 w-full h-full object-cover" src="/video/about.mp4" autoPlay muted loop></video>
      <div className="absolute top-60 right-0 left-0">
        <div className="text-center text-white md:text-2xl max-w-2xl mx-auto font-poppins px-5">
          <p className="mb-5">OMG is near future of gaming.</p>
          <p className="mb-5">You are a gamer in 2022 on Earth. Unfortunately, you pay to play, You cant earn money, you are not rewarded for your precious time and attention, and you have nothing to show for hours of hard work in games.</p>
          <p className="mb-5">This is not right,.. 'Pay To Play' is the past,</p>
          <p>Welcome to the future of rewarding gameplay</p>
        </div>
      </div>
    </div>
  )
}
