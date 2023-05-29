import { useContext, useEffect, useState } from "react"
import { initMongoose } from "../../../lib/mongoose"
import { ProductsContext } from "../../../components/productCard/ProductsContext"
import { findOneProduct } from "../api/products"
import Layout from "../../../components/layout/Layout"

export default function ProductPage({ product }) {
    const { setSelectedProducts } = useContext(ProductsContext)
    const [addToBagButtonText, setAddToBagButtonText] = useState("Add To Bag")
    const [loading, setLoading] = useState(false)
    

    function addProduct() {
        setSelectedProducts(prev => [...prev, product[0]._id])
        setAddToBagButtonText("Added to Bag Successfully")
        setTimeout(() => {
            setAddToBagButtonText('Add To Bag')
          }, 1000)
    }

    return (
        <Layout>
            {!loading?
                <div className="flex flex-col sm:flex-row items-center justify-center py-5">
                    <div className="flex flex-wrap flex-row justify-center m-5">
                        <div className="p-2 cursor-not-allowed">
                            <img className="border-solid border-2 border-gray-400 rounded-3xl w-72 lg:w-80 xl:w-96" src={product[0].picture}></img>
                        </div>
                        {/* <div className="p-2 cursor-not-allowed">
                            <img className="border-solid border-2 border-gray-400 rounded-3xl w-52 md:w-60 lg:w-72 xl:w-96" src={product[0].picture}></img>
                        </div>
                        <div className="p-2 cursor-not-allowed">
                            <img className="border-solid border-2 border-gray-400 rounded-3xl w-52 md:w-60 lg:w-72 xl:w-96" src={product[0].picture}></img>
                        </div>
                        <div className="p-2 cursor-not-allowed">
                            <img className="border-solid border-2 border-gray-400 rounded-3xl w-52 md:w-60 lg:w-72 xl:w-96" src={product[0].picture}></img>
                        </div> */}
                    </div>
                    <div className="flex flex-wrap flex-col m-5">
                        <div className="py-2 px-4 w-72 xl:w-80 2xl:w-96">
                            <h3 className="text-emerald-500">Made from recycled materials</h3>
                            <h1 className="text-4xl">{product[0].name}</h1>
                            <p className="py-1 text-lg">S${product[0].price}</p>
                            <div className="leading-5">{product[0].description}</div>
                        
                            <div className="flex flex-col pt-2">
                                <div className="flex justify-center grow py-2">
                                    <button onClick={addProduct} className="bg-black rounded-3xl text-white hover:bg-gray-500 grow py-2">{addToBagButtonText}</button>
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
            : <div className="h-screen"></div>}
        </Layout>
    )
}

export async function getServerSideProps(context) {
    await initMongoose()
    const id = context.params.id
    const product = await findOneProduct(id)
    return {
      props : {
        product: JSON.parse(JSON.stringify(product)),
      },
    }
}
