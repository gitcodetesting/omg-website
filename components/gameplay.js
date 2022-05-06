import Link from 'next/link'
import Image from 'next/image'

export default function GamePlay() {
  return (
    <div id="gameplay" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <div className="container mx-auto p-5">
          <Link href="#home">
            <a>
              <Image src='/logo-sm.png' width={225} height={87} />
            </a>
          </Link>
        </div>
      </div>
      <div className="absolute md:top-32 top-48 right-0 bottom-0 left-0 -z-10" style={{backgroundImage: 'url(/gameplay.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center'}}></div>
      <div className="flex justify-center items-center h-full mt-16">
        <Link href="#">
          <a>
            <div className="relative">
              <div className="bg-black opacity-0" style={{width: 400, height: 130, borderRadius: '50%'}}></div>
            
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
