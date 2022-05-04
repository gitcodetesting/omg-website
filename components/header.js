import Link from 'next/link'
import Image from 'next/image'

export default function Header({ position, scrollSnap }) {
  let location = 'home'

  if (scrollSnap) {
    const tmp = scrollSnap.current.scrollHeight / position

    if (tmp >= scrollSnap.current.scrollHeight) {
      location = 'home'
    } else if (tmp >= 2.9) {
      location = 'about'
    } else if (tmp >= 1.9) {
      location = 'contact'
    } else {
      location = 'gameplay'
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-5 pt-10 max-h-24 flex flex-wrap justify-between">
        <Link href="#home">
          <a className="opacity-0 md:w-auto w-full">
            <Image src='/logo-sm.png' width={225} height={87} />
          </a>
        </Link>
        <nav className="md:w-auto w-full md:p-0 pt-20 pl-6 transition-all h-0" style={position > 0 ? {padding: 0} : {}}>
          <ul className="flex md:text-3xl text-xl font-mussels-stencil" style={{color: '#6e6e6e'}}>
            <li>
              <Link href="#about">
                <a style={location == 'about' ? {color: '#f35714'} : {}}>About</a>
              </Link>
            </li>
            <li>
              <span className="mx-2">|</span>
            </li>
            <li>
              <Link href="#contact">
                <a style={location == 'contact' ? {color: '#f35714'} : {}}>Contact</a>
              </Link>
            </li>
            <li>
              <span className="mx-2">|</span>
            </li>
            <li>
              <Link href="#gameplay">
                <a style={location == 'gameplay' ? {color: '#f35714'} : {}}>Gameplay</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
