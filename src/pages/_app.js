import '@/styles/globals.css'
import { Cabin } from "next/font/google"
import { ProductsContextProvider } from '../../components/productCard/ProductsContext'
import { CustomiserContextProvider } from '../../components/customiser/CustomiserContext'

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
})

function App({ Component, pageProps }) {
  return (
    <ProductsContextProvider>
      <CustomiserContextProvider>
        <div className='bg-neutral-50'>
          <div className={`${cabin.variable} font-sans`}>
              <Component {...pageProps} />
          </div>
        </div>
      </CustomiserContextProvider>
    </ProductsContextProvider>
  )
}

export default App