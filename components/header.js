import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Header() {
  const router = useRouter()

  function appDownload() {
    if (router.pathname == '/') {
      return (
        <div className="flex mt-5">
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
      )
    }
  }

  return (
    <div className={router.pathname == '/gameplay' ? 'bg-black' : ''}>
      <div className="container mx-auto py-5 flex justify-between">
        <Link href="/">
          <a>
            <Image src={router.pathname == '/' ? '/logo-lg.png' : '/logo-sm.png'} width={router.pathname == '/' ? 256 : 225} height={router.pathname == '/' ? 219 : 87} />
          </a>
        </Link>
        <div>
          <nav>
            <ul className="flex text-3xl mt-5 font-mussels-stencil" style={{color: '#6e6e6e'}}>
              <li>
                <Link href="/about">
                  <a style={router.pathname == '/about' ? {color: '#f35714'} : {}}>About</a>
                </Link>
              </li>
              <li>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link href="/contact">
                  <a style={router.pathname == '/contact' ? {color: '#f35714'} : {}}>Contact</a>
                </Link>
              </li>
              <li>
                <span className="mx-2">|</span>
              </li>
              <li>
                <Link href="/gameplay">
                  <a style={router.pathname == '/gameplay' ? {color: '#f35714'} : {}}>Gameplay</a>
                </Link>
              </li>
            </ul>
          </nav>
          { appDownload() }
        </div>
      </div>
    </div>
  )
}
