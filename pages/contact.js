import Layout from '@components/layout'
import Link from 'next/link'
import Telegram from '@components/svg/telegram'
import Discord from '@components/svg/discord'
import Twitter from '@components/svg/twitter'
import Instagram from '@components/svg/instagram'

export default function Contact() {
  return (
    <ul className="flex items-center justify-end">
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
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
