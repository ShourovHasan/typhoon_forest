import Header from '@/components/Header/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('preline')
  }, [])


  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      {/* <Footer></Footer> */}
    </>
  )
}
