import Link from 'next/link'
import Image from 'next/image'
import Telegram from '@components/svg/telegram'
import Discord from '@components/svg/discord'
import Twitter from '@components/svg/twitter'
import Instagram from '@components/svg/instagram'

export default function Contact() {
  return (
    <div id="contact" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <div className="container mx-auto p-5">
          <Link href="#home">
            <a>
              <Image src='/logo-sm.png' width={225} height={87} />
            </a>
          </Link>
        </div>
      </div>
      <video className="absolute top-0 right-0 bottom-0 left-0 -z-10 w-full h-full object-cover" src="/video/contact.mp4" autoPlay muted loop></video>
      <div className="container md:pt-24 pt-48 px-5 mx-auto">
        <ul className="flex md:items-center justify-end">
          <li>
            <Link href="#">
              <a className="block rounded-full p-2 bg-white opacity-50 hover:opacity-100">
                <Telegram fill="#000000" width={30} height={30} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="block rounded-full p-2 bg-white opacity-50 hover:opacity-100 ml-1">
                <Discord fill="#000000" width={30} height={30} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="block rounded-full p-2 bg-white opacity-50 hover:opacity-100 ml-1">
                <Twitter fill="#000000" width={30} height={30} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="block rounded-full p-2 bg-white opacity-50 hover:opacity-100 ml-1">
                <Instagram fill="#000000" width={30} height={30} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
