import Layout from '@components/layout'
import Home from '@components/home'
import About from '@components/about'
import Contact from '@components/contact'
import GamePlay from '@components/gameplay'

export default function Index() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Contact></Contact>
      <GamePlay></GamePlay>
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
