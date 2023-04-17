import { useContext, useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import Overview from "../../components/overview/Overview"
import { ProductsContext } from "../../components/productCard/ProductsContext"

export default function allProducts () {
    const { scrollTo } = useContext(ProductsContext)
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     function handleScroll () {
    //         const category = document.getElementById({scrollTo})
    //         if (element) {
    //             category.scrollIntoView({ behavior: 'smooth' })
    //         }
    //         setLoading(false)
    //       }

    //     handleScroll()
    // }, [])

    // complete scroll to category functionality

    return (
        <Layout>
            {!loading &&
                <div>
                    <h1 className="text-3xl xl:text-4xl">All Products</h1>
                    <Overview home={true}/>
                </div>
            }
        </Layout>
    )
}

