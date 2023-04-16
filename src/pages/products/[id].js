import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../../../components/productCard/ProductsContext"
import Layout from "../../../components/layout/Layout"
import { useRouter } from 'next/router'

export default function ProductPage() {
    const { setSelectedProducts } = useContext(ProductsContext)
    const [productData, setProductData] = useState([{}])
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    
    useEffect(() => {
        const { id } = router.query
        try {
            fetch("/api/products?ids="+id)
                .then(response => response.json())
                .then(json => setProductData(json))              
        } catch(error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }, [])

    function addProduct() {
        setSelectedProducts(prev => [...prev, productData[0]._id])
    }

    return (
        <Layout>
            {!loading?
                <div className="flex flex-row justify-center py-5">
                    <div className="flex flex-wrap w-1/2 flex-row justify-center m-5">
                        <div className="p-2 cursor-not-allowed">
                            <img className="border-solid border-2 border-gray-400 rounded-3xl w-52 md:w-60 lg:w-72 xl:w-96" src={productData[0].picture}></img>
                        </div>
                        <div className="p-2 cursor-not-allowed">
                            <img className="border-solid border-2 border-gray-400 rounded-3xl w-52 md:w-60 lg:w-72 xl:w-96" src={productData[0].picture}></img>
                        </div>
                        <div className="p-2 cursor-not-allowed">
                            <img className="border-solid border-2 border-gray-400 rounded-3xl w-52 md:w-60 lg:w-72 xl:w-96" src={productData[0].picture}></img>
                        </div>
                        <div className="p-2 cursor-not-allowed">
                            <img className="border-solid border-2 border-gray-400 rounded-3xl w-52 md:w-60 lg:w-72 xl:w-96" src={productData[0].picture}></img>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-col m-5">
                        <div className="py-2 px-4 w-52 md:w-64 lg:w-72 xl:w-80 2xl:w-96">
                            <h3 className="text-emerald-500">Made from recycled materials</h3>
                            <h1 className="text-4xl">{productData[0].name}</h1>
                            <p className="py-1 text-lg">S${productData[0].price}</p>
                            <div className="leading-5">{productData[0].description}</div>
                        
                            <div className="flex flex-col pt-2">
                                <div className="flex justify-center grow py-2">
                                    <button onClick={addProduct} className="bg-black rounded-3xl text-white hover:bg-gray-500 grow py-2">Add to Bag</button>
                                </div>
                                <div className="flex justify-center grow py-2">
                                    <button className="bg-white rounded-3xl text-gray-500 border-2 border-gray-400 hover:border-black grow py-2">Join Monthly Giveaway</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            : <div className="h-screen"></div>}
        </Layout>
    )
}
