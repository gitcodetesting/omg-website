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
      <img className="absolute top-0 right-0 bottom-0 left-0 -z-10 w-full h-full object-cover" src="/video/index.jpg" autoPlay muted loop></img>
      <div className="container md:pt-20 pt-60 px-5 mx-auto flex justify-end mt-5">
        <div className="mr-2">
          <Link href="#">
            <a className="block" onClick={ e => alert('We\'re currently running private beta with the first 1,000 users. Please join our discord/telegram community to be added in the subsequent rollouts.') }>
              <Image src="/appstore.svg" width={128} height={50} />
            </a>
          </Link>
        </div>
        <div>
          <Link href="#">
            <a className="block" onClick={ e =>  alert('We\'re currently running private beta with the first 1,000 users. Please join our discord/telegram community to be added in the subsequent rollouts.') }>
              <Image src="/googleplay.svg" width={128} height={50} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}