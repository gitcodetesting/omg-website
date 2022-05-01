import Layout from '@components/layout'

export default function About() {
  return (
    <div className="text-center text-white text-2xl py-20 max-w-2xl mx-auto font-poppins">
      <p className="mb-5">OMG is near future of gaming.</p>
      <p className="mb-5">You are a gamer in 2022 on Earth. Unfortunately, you pay to play, You cant earn money, you are not rewarded for your precious time and attention, and you have nothing to show for hours of hard work in games.</p>
      <p className="mb-5">This is not right,.. 'Pay To Play' is the past,</p>
      <p>Welcome to the future of rewarding gameplay</p>
    </div>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
