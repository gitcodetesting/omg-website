import Layout from '@components/layout'
import Link from 'next/link'

export default function GamePlay() {
  return (
    <div className="flex justify-center mt-80">
      <Link href="#">
        <a>
          <div className="relative">
            <div className="bg-black opacity-60" style={{width: 400, height: 130, borderRadius: '50%'}}></div>
            <img src="/logo-sm.png" width={250} height={96} style={{position: 'absolute', top: 12, left: 69}} />
          </div>
        </a>
      </Link>
    </div>
  )
}

GamePlay.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
