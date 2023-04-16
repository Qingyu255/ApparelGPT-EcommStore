import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../../../components/productCard/ProductsContext"
import Layout from "../../../components/layout/Layout"
import Card from "../../../components/customiser/Card"
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import CustomiserSettings from "../../../components/customiser/CustomiserSettings"

export default function CustomProductPage() {
    const {setSelectedCustomProducts} = useContext(ProductsContext)
    const [productData, setProductData] = useState([{}])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        async function fetchProduct() {
            try {
                const { id } = router.query     
                const response = await fetch("/api/post?ids="+id, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                if (response.ok) {
                    const fetchedData = await response.json()
                    setProductData(fetchedData.data)
                }
            } catch(error) {
                alert(error)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [])

    function addProduct() {
        setSelectedCustomProducts(prev => [...prev, productData[0]._id])
    }

    return (
        <Layout>
            {!loading?
                <div className="flex flex-row justify-center py-5">
                    <div className="flex flex-wrap w-1/2 flex-row justify-center m-5">
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="flex items-center justify-center sm:h-[500px]">
                                    <Card {...productData[0]} purpose="featured"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center h-[350px] sm:h-[500px] p-2">
                                    <img className="border-solid border-2 border-slate-300 rounded-lg w-52 md:w-60 lg:w-72 xl:w-96" src={productData[0].photo}></img>
                                </div>
                            </SwiperSlide>                          
                        </Swiper>   
                    </div>
                    <div className="flex flex-wrap flex-col m-5">
                        <div className="py-2 px-4 w-52 md:w-64 lg:w-72 xl:w-80 2xl:w-96">
                            <h3 className="text-emerald-500">Made from recycled materials</h3>
                            <h1 className="text-4xl">Customised {productData[0].product}</h1>
                            <p className="py-1 text-lg">S$20</p>
                            <div className="leading-5">
                                <h1 className="font-semibold">Prompt:</h1>
                                <p className="mt-1">{productData[0].prompt}</p>
                            </div>

                            {/* <CustomiserSettings /> */}
                        
                            <div className="flex flex-col pt-2">
                                <div className="flex justify-center grow py-2">
                                    <button onClick={addProduct} className="bg-black rounded-3xl text-white hover:bg-gray-500 grow py-2">Add to Bag</button>
                                </div>                          
                            </div>
                        </div>
                    </div>
                </div>
            : <div className="h-screen"></div>}
        </Layout>
    )
}