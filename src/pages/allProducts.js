import { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import Card from "../../components/customiser/Card"

export default function allProducts () {
    const [loading, setLoading] = useState(true)
    const [allPosts, setAllPosts] = useState(null)
    const [productTypes, setProductTypes] = useState([])

    async function fetchPostsData() {
        try {
            const response = await fetch("/api/post", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                console.log("fetched to all prodcuts")
                const fetchedData = await response.json()
                setAllPosts(fetchedData.data.reverse())
                setProductTypes([...new Set(fetchedData.data.map(p => p.product))])
            }
        } catch(error) {
            alert(error)
        } finally {
            console.log(JSON.stringify(allPosts))
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchPostsData()       
    }, [])

    return (
        <Layout>          
            {!loading &&
                <div>                  
                    <div id="T-Shirt" className='flex flex-col mx-10 mt-10'>
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold my-5">{productTypes[0]}s</h2>                                                           
                            <div className='grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-y-16 2xl:px-[150px]'>
                                {allPosts.filter(post => post.product === productTypes[0]).map((post) => <Card key={post._id} {...post}/>)}
                            </div>
                            
                        </div>
                    </div>

                    <div id="Tote" className='flex flex-col mx-10 mt-10'>
                        <div className='mb-10'>
                            <h2 className="text-2xl md:text-4xl font-bold my-5">{productTypes[1]}s</h2>                                                           
                            <div className='grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-y-16 2xl:px-[150px]'>
                                {allPosts.filter(post => post.product === productTypes[1]).map((post) => <Card key={post._id} {...post}/>)}
                            </div>
                            
                        </div>
                    </div>
                </div>
            }
        </Layout>
    )
}

// Can be deleted
