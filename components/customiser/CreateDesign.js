import { useState, useContext } from 'react'
import Loader from '../Loader'
import FormField from './FormField'
import { getRandomPrompt } from '../../utils'
import { CustomiserContext } from './CustomiserContext'
import { ProductsContext } from '../productCard/ProductsContext'

export default function CreateDesign () {
    const { form, setForm } = useContext(CustomiserContext)
    const [generatingImg, setGeneratingImage] = useState(false)
    const [addToBagButtonText, setAddToBagButtonText] = useState("Add To Cart and Share with the Community")
    const [loading, setLoading] = useState(false)
    const { setSelectedCustomProducts } = useContext(ProductsContext)

    // setForm(
    //     {
    //         name: "",
    //         prompt: "",
    //         photo: "http://res.cloudinary.com/dq4aaqbme/image/upload/v1681834950/ejrp0tmuhui1v5lln30z.png",
    //         colour: "Black.jpg",
    //         product: "T-Shirt",
    //         size: "",
    //     }
    // )

    async function generateImage() {
        if (form.prompt) {
            try {
                setGeneratingImage(true)
                
                const response = await fetch('/api/dalle', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ prompt:form.prompt }),
                })

                const data = await response.json()
                setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` })
            } catch(error) {
                alert(error)
            } finally {
                setGeneratingImage(false)
            }
        } else {
            alert("Please enter a prompt")
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (form.product === "T-Shirt" && !form.size) {
            return alert("Please select a size.")
        }
        if (form.prompt && form.photo) {
            setLoading(true)
            try {
                const response = await fetch("/api/post", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...form }),
                })
                const postData = await response.json()
                setSelectedCustomProducts(prev => [...prev, postData.data._id])
                setAddToBagButtonText("Added to Bag Successfully")
                setTimeout(() => {
                    setAddToBagButtonText("Add To Cart and Share with the Community")
                }, 2000)
                alert("success")

            } catch (error) {
                alert(error)
            } finally {
                setLoading(false)
            }
        } else {
            alert('Please enter a prompt with proper details.')
        }
    }

    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value})
    }

    function handleSurpriseMe() {
        const randomPrompt = getRandomPrompt(form.prompt)
        setForm({...form, prompt: randomPrompt})
    }

  return (
    <div className='mx-10 sm:m-0 max-w-lg'>
        <div>
            <h1 className="text-2xl font-bold pt-10">Create a Design With AI:</h1>
            <p className='w-auto py-2 text-sm text-neutral-500'>Let OpenAI&apos;s DALL-E AI image generation model design a print for your Apparel.</p>        
        </div>
        <div>
            <form className='mt-4 max-w-3xl' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3'>
                    <FormField 
                        labelName="Your Name"
                        type="text"
                        name="name"
                        placeholder="Qingyu"
                        value={form.name}
                        handleChange={handleChange}
                    />
                    <FormField 
                        labelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="Cat driving while asleep."
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />
                    
                    <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-2 h-64 flex justify-center items-center">
                        { form.photo ? (
                        <img
                            src={form.photo}
                            alt={form.prompt}
                            className="w-full h-full object-contain"
                        />
                        ) : (
                        <img
                            src="/products/preview.png"
                            alt="preview"
                            className="w-9/12 h-9/12 object-contain opacity-40"
                        />
                        )}
                        {generatingImg && (
                            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                                <Loader />
                            </div>
                        )}
                    </div>
                    <div className="mt-1 flex gap-5">
                        <button type='button' onClick={generateImage} className=" text-white bg-[#222629] hover:bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                            {generatingImg? "Generating..." : "Generate Image"}
                        </button>
                    </div>
                    <div className="my-5">
                        <p className="text-[#666e75] text-[14px]">Share your design with others</p>
                        <button
                            type="submit"
                            className="mt-3 text-white bg-[#222629] hover:bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            {loading ? 'Sharing...' : addToBagButtonText}
                        </button>
                    </div> 
                </div>
            </form>
        </div>
        
    </div>
  )
}

