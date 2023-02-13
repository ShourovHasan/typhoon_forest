import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import '@/styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <>
      <Header></Header>
        <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
