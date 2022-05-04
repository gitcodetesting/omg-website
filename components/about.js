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
      <img className="absolute top-0 right-0 bottom-0 left-0 -z-10 w-full h-full object-cover" src="/video/about.gif" autoPlay muted loop></img>
      <div className="absolute top-60 right-0 left-0">
        <div className="text-center text-white md:text-2xl max-w-2xl mx-auto font-poppins px-5">
          <p className="mb-5">Gamers of Earth, Mars is calling you!</p>
          <p className="mb-5">You find yourself in the near future, Starships have brought thousands of people to Mars, the first wave of exploration and pioneers is over, we are now world building.</p>
          <p className="mb-5">The United Republics of Mars is an Earth based corporation and the the only quasi official government body on Mars. All off planet transport is contracted to the URM. It controls imports to the planet and maintains fragile relations with the guilds. The URM have military rockets to enforce its monopoly on inter-planetary transport.</p>
          <p className="mb-5">Play the game, forge the future of Mars and you shall be rewarded with:</p>
          <p className="mb-5">Dogecoin,</p>
          <p className="mb-5">Land,</p>
          <p className="mb-5">Citizenship.</p>
        </div>
      </div>
    </div>
  )
}
