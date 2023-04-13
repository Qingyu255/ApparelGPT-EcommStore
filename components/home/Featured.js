import { useState, useEffect } from "react"
import Card from "../customiser/Card"
import Loader from "../Loader"

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
                // var index3 = getRandomIndex(products.data)
                while (index1 === index2) {
                    index1 = getRandomIndex(products.data)
                }
                // while (index3 === index2) {
                //     index2 = getRandomIndex(products.data)
                // }
                // while (index1 === index3) {
                //     index2 = getRandomIndex(products.data)
                // }
                setFeaturedProducts([products.data[index1], products.data[index2]])
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
        <div className="px-10 flex flex-col">
            <h1 className="text-3xl font-bold py-5">Featured</h1>
            <div className="flex justify-center">
                {!loading? 
                (<div className="flex flex-wrap justify-center items-center gap-8">
                    {featuredProducts.map((product) => 
                        <div className="h-[600px] relative border-2 border-black">
                            <Card key={product._id} {...product} purpose="featured" />
                            <div>
                                <div className="absolute inset-x-0 ">
                                    <h1 className="p-2 pb-0">{product.prompt}</h1>
                                </div>
                                <div className="absolute inset-x-0 bottom-0 flex justify-end mr-5">
                                    <div className="flex justify-center py-2">
                                        <button className="bg-black rounded-2xl text-white hover:bg-gray-500 px-3 py-2">Buy Now</button>
                                    </div>
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
