import Layout from "../../components/layout/Layout"
import ProductCard from "../../components/productCard/ProductCard"
import { initMongoose } from "../../lib/mongoose"
import { findAllProducts } from "./api/products"
import Overview from "../../components/customiser/Overview"
import Banner from "../../components/home/Banner"
import Featured from "../../components/home/Featured"


export default function Home({products}) {
  
  const categoriesNames = [...new Set(products.map(p => p.category))]

  return (
    <Layout>
      <Banner />
      <Featured />
      {categoriesNames.map(categoryName => (
        <div key={categoryName}>
          <h2 className="text-3xl font-bold mx-10 py-5">{categoryName}</h2>
          <div className="flex overflow-x-auto snap-x pb-3">
            {products.filter(p => p.category === categoryName).map(product =>(
              <div key={product._id} className="snap-start">
                <ProductCard _id={product._id} name={product.name} image={product.picture} description={product.description} price={product.price}/>
              </div>
            ))}
          </div>
        </div> 
      ))}
      <Overview home={true} />
    </Layout>
  )
}

export async function getServerSideProps() {
  await initMongoose()
  const products = await findAllProducts()
  return {
    props : {
      products: JSON.parse(JSON.stringify(products)),
    },
  }
}