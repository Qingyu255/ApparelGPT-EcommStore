import Layout from "../../components/layout/Layout"
import ProductCard from "../../components/productCard/ProductCard"
import { initMongoose } from "../../lib/mongoose"
import { findAllProducts } from "./api/products"
import { findAllPosts } from "./api/post"
import Overview from "../../components/overview/Overview"
import Banner from "../../components/home/Banner"
import Featured from "../../components/home/Featured"
import { ProductsContext } from "../../components/productCard/ProductsContext"
import useLocalStorageState from "use-local-storage-state"
import { useContext } from "react"

export default function Home({products, posts}) {
  const {nonCustomProductsNew, setNonCustomProductsNew} = useContext(ProductsContext)
  const categoriesNames = [...new Set(products.map(p => p.category))]
  
  setNonCustomProductsNew(products)
  return (
    <Layout>
      <Banner />
      <Featured />
      <div className="mb-10 border-t-2 mx-10 ">
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            <div className="py-5">
              <h2 className="text-2xl md:text-4xl font-bold">{categoryName}</h2>
              <p className="mt-1 text-sm sm:text-md text-gray-400">Ready Stock</p>
            </div>
            <div className="flex overflow-x-auto snap-x pb-3 gap-5 xl:justify-center">
              {products.filter(p => p.category === categoryName).map(product =>(
                <div key={product._id} className="snap-center">
                  <ProductCard _id={product._id} name={product.name} image={product.picture} description={product.description} price={product.price}/>
                </div>
              ))}
            </div>
          </div> 
        ))}
      </div>
      <Overview home={true} carousel={true}/>      
    </Layout>
  )
}

export async function getServerSideProps() {
  await initMongoose()
  const products = await findAllProducts()
  const posts = await findAllPosts()
  return {
    props : {
      products: JSON.parse(JSON.stringify(products)),
      posts: JSON.parse(JSON.stringify(posts)),
    },
  }
}