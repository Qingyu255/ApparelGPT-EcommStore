import '@/styles/globals.css'
import { Cabin } from "next/font/google"
import Layout from '../../components/layout/layout'
import { ProductsContextProvider } from '../../components/productCard/ProductsContext'

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
})

function App({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
      <div className='bg-neutral-50'>
        <div className={`${cabin.variable} font-sans`}>
            <Component {...pageProps} />
        </div>
      </div>
    </ProductsContextProvider>
  )
}

export default App