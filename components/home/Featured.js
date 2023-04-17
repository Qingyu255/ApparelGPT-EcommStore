import { useState, useEffect } from "react"
import Card from "../customiser/Card"
import Loader from "../Loader"
import Link from "next/link"

const Featured = () => {
    const [loading, setLoading] = useState(false)
    const [featuredProducts, setFeaturedProducts] = useState([])

    function getRandomIndex(array) {
        const randomIndex = Math.floor(Math.random() * array.length)
        return randomIndex
    }

    async function fetchPostsData() {
        setLoading(true)
        try {
            const response = await fetch("/api/post", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {                 
                const products = await response.json()
                var index1 = getRandomIndex(products.data)
                var index2 = getRandomIndex(products.data)
                var index3 = getRandomIndex(products.data)
                while (index1 === index2) {
                    index1 = getRandomIndex(products.data)
                }
                while (index3 === index2) {
                    index2 = getRandomIndex(products.data)
                }
                while (index1 === index3) {
                    index2 = getRandomIndex(products.data)
                }
                setFeaturedProducts([products.data[index1], products.data[index2], products.data[index3]])
                console.log("fetched featured")                           
            }
            
        } catch(error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
            fetchPostsData()
        }, [])

    const purpose = "featured"
    return (
        <div className="px-10 flex flex-col mb-10">
            <h1 className="text-2xl md:text-4xl font-bold py-5">Featured</h1>
            <div className="flex justify-center">
                {!loading? 
                (<div className="flex overflow-x-auto snap-x gap-8">
                    {featuredProducts.map((product) => 
                        <div key={product._id} className="flex flex-col border-2 border-slate-300 w-72 sm:w-96 mb-2 snap-center">
                            <Card key={product._id} {...product} purpose="featured" />                            
                            <div className="flex flex-row pb-4">
                                <div className="grow">                                  
                                    <h1 className="p-3 pb-0">
                                        <p className="font-semibold">Design: </p>
                                        {product.prompt}
                                    </h1>
                                </div>
                                <div className="flex items-center px-2">       
                                    <Link href={`/customProducts/${product._id}`}>                     
                                        <button className="bg-black rounded-xl text-white hover:bg-gray-500 px-4 py-1">Shop</button>
                                        {/* Change to add to cart png */}
                                    </Link>       
                                </div>                                    
                            </div>
                            
                        </div>
                    )}
                </div>) : (
                <div className="flex justify-center">
                    <Loader />
                </div> )
                    
                }
            </div>
        </div>
    )
}

export default Featured
