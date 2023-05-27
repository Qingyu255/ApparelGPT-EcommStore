import { useContext, useEffect, useState } from "react"
import { initMongoose } from "../../../lib/mongoose"
import { findOnePost } from "../api/post"
import { ProductsContext } from "../../../components/productCard/ProductsContext"
import Layout from "../../../components/layout/Layout"
import Card from "../../../components/customiser/Card"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import { CirclePicker } from 'react-color'

export default function CustomProductPage({ product }) {
    const {setSelectedCustomProducts} = useContext(ProductsContext)
    const [productData, setProductData] = useState({})
    const [addToBagButtonText, setAddToBagButtonText] = useState("Add To Bag")
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setProductData(product[0])

    }, [])

    async function handleAddToCart(e) {
        e.preventDefault()
        if (productData.product === "T-Shirt" && !productData.size) {
            return alert("Please select a size.")
        }

        try {
            const response = await fetch("/api/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...productData }),
            })
            const postData = await response.json()
            console.log(postData)
            setSelectedCustomProducts(prev => [...prev, postData.data._id])
            setAddToBagButtonText("Added to Bag Successfully")
            setTimeout(() => {
                setAddToBagButtonText('Add To Bag');
              }, 2000)


        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    function handleProductSize(e) {
        setProductData({...productData, size: e.target.name})
        console.log(productData)
    }

    function handleColorChange(hex) {
        const colours = {
            "#e3e4de": "White.jpg",
            "#e4d5c2": "Beige.jpg",
            "#1a1d24": "Black.jpg",
            "#686b70": "Grey.jpg",
            "#2d3041": "Navy.jpg",
        }
        setProductData({...productData, colour: colours[hex]})
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
                                    <Card {...productData} purpose="featured"/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex items-center justify-center h-[350px] sm:h-[500px] p-2">
                                    <img className="border-solid border-2 border-slate-300 rounded-lg w-52 md:w-60 lg:w-72 xl:w-96" src={productData.photo}></img>
                                </div>
                            </SwiperSlide>                          
                        </Swiper>   
                    </div>
                    <div className="flex flex-wrap flex-col m-5">
                        <div className="py-2 px-4 w-52 md:w-64 lg:w-72 xl:w-80 2xl:w-96">
                            <h3 className="text-sm sm:text-md text-emerald-500">Made from recycled materials</h3>
                            <h1 className="text-3xl sm:text-4xl">Customised {productData.product}</h1>
                            <p className="py-1 text-lg">S$20</p>
                            <div className="leading-5 mt-1">
                                <h1 className="font-semibold sm:text-xl">Prompt:</h1>
                                <p className="mt-1">{productData.prompt}</p>
                            </div>
                            {productData.product != "Tote" &&
                                <div className="mt-3">                                    
                                    <h1 className='font-semibold sm:text-xl'>Choose Size: </h1>
                                    <p className="text-xs sm:text-sm">{productData.size}</p>
                                    <div className='grid grid-cols-3 my-2 sm:my-4 gap-2'>
                                        <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="XS">XS</button>
                                        <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="S">S</button>
                                        <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="M">M</button>
                                        <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="L">L</button>
                                        <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="XL">XL</button>
                                        <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="2XL">2XL</button>                           
                                    </div>
                                </div>
                            }
                            
                            <div className='my-2 sm:my-4'>
                                <h1 className='font-semibold sm:text-xl mb-3'>Pick a Colour:</h1>
                                {productData.product === "Tote"?
                                    <CirclePicker
                                        colors={[ '#e3e4de','#e4d5c2', '#1a1d24' ]}
                                        onChange={(color) => handleColorChange(color.hex)}
                                        width="150px"
                                    />
                                    : 
                                    <CirclePicker
                                        colors={[ '#e3e4de','#e4d5c2', '#686b70', '#2d3041', '#1a1d24' ]}
                                        onChange={(color) => handleColorChange(color.hex)}
                                        width="150px"
                                    />
                                }
                                {productData.color &&
                                    <p className='text-xs sm:text-sm my-2'>{productData.colour.split(".")[0]}</p>
                                }
                                
                            </div> 
                        
                            <div className="flex flex-col pt-2">
                                <div className="flex justify-center grow py-2">
                                    <button onClick={handleAddToCart} className="bg-black rounded-3xl text-white hover:bg-gray-500 grow py-2">{addToBagButtonText}</button>
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
    const product = await findOnePost(id)
    return {
      props : {
        product: JSON.parse(JSON.stringify(product)),
      },
    }
}