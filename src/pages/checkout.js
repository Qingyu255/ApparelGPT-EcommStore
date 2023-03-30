import { useContext, useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import CheckoutProductCard from "../../components/productCard/CheckoutProductCard"
import { ProductsContext } from "../../components/productCard/ProductsContext"
import useLocalStorageState from "use-local-storage-state"

export default function CheckoutPage() {
    const {selectedProducts} = useContext(ProductsContext)
    const [productsInfo, setProductsInfo] = useLocalStorageState("uniqueProductsInfo", {defaultValue: []})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const uniqueIds = [...new Set(selectedProducts)]
        if (uniqueIds.length > 0) {
            fetch("/api/products?ids="+uniqueIds.join(","))
                .then(response => response.json())
                .then(json => setProductsInfo(json))
                .then(() => setLoading(false))
        } else {
           setLoading(false)
        }
    }, [selectedProducts])


    return (
        <Layout>
            {!loading?
                <div className="flex flex-wrap justify-center my-10 py-5 sm:flex-row">
                
                    <div className="flex flex-col pb-5">
                        <h1 className="mx-10 font-bold text-3xl">Your Bag</h1>
                        {!selectedProducts.length && (
                            <div>
                                <h1>There are no products in your shopping cart.</h1>
                            </div>
                        )}
                        {selectedProducts.length > 0 && (
                            productsInfo.map(productInfo => <CheckoutProductCard key={productInfo._id} id={productInfo._id} name={productInfo.name} image={productInfo.picture} price={productInfo.price} quantity={selectedProducts.filter(id => id === productInfo._id).length}/>  
                        ))}
                    </div>

                    {selectedProducts.length > 0 && (
                        <div className="grow max-w-xs">
                            <h1 className="font-bold text-3xl">Summary</h1>
                            <div className="py-5">
                                <div className="flex flex-row items-center text-xl">
                                    <h1 className="grow">Subtotal</h1>
                                    <div>$20</div>
                                </div>
                                <div className="flex flex-row items-center text-xl mt-1">
                                    <h1 className="grow">Estimated Delivery Fees</h1>
                                    <div>Free</div>
                                </div>
                                <div className="flex flex-row items-center border-y-2 py-3 my-5 text-xl">
                                    <h1 className="grow">Total</h1>
                                    <div>$20</div>
                                </div>
                                <div className="flex flex-col justify-center py-5">
                                    <button className="bg-black rounded-3xl text-white hover:bg-gray-500 grow py-3 my-2">Checkout with Card (Stripe)</button>
                                    <button className="bg-black rounded-3xl text-white hover:bg-gray-500 grow py-3 my-1">Checkout with Paynow</button>
                                </div>
                            </div>
                        </div>
                    )}    
                </div>
            : <div className="h-screen"></div>}
        </Layout>
    )
}
