import { useState, useContext } from 'react'
import Loader from '../Loader'
import FormField from './FormField'
import { getRandomPrompt } from '../../utils'
import { CustomiserContext } from './CustomiserContext'
import { useRouter } from 'next/navigation'
import { ProductsContext } from '../productCard/ProductsContext'

export default function CreateDesign () {
    const { form, setForm } = useContext(CustomiserContext)
    const [generatingImg, setGeneratingImage] = useState(false)
    const [loading, setLoading] = useState(false)
    const { customProducts, setCustomProducts } = useContext(ProductsContext)

    function handleAddToCart() {
      setCustomProducts(prev => [...prev, _id])
    }

    async function generateImage() {
        if (form.prompt) {
            try {
                setGeneratingImage(true)
                const response = await fetch('/api/dalle', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ prompt:form.prompt })
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
                console.log(postData)
                setCustomProducts(prev => [...prev, postData.data._id])
                alert("success")
                // router.push("/")

            } catch (error) {
                console.log(error)
                console.log("oop")
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
        console.log(form.prompt)
    }

    function handleSurpriseMe() {
        const randomPrompt = getRandomPrompt(form.prompt)
        setForm({...form, prompt: randomPrompt})
    }

  return (
    <div className='mx-10 sm:m-0 max-w-lg'>
        <div>
            <h1 className="text-2xl font-bold">Create a Shirt/Tote Design With AI:</h1>
            <p className='w-auto py-2 text-sm text-neutral-500'>Let the OpenAI DALL-E AI design a visually stunning graphic for your Apparel.</p>        
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
                        <button type='button' onClick={generateImage} className=" text-white bg-gray-800 hover:bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                            {generatingImg? "Generating..." : "Generate Image"}
                        </button>
                    </div>
                    <div className="my-5">
                        <p className="text-[#666e75] text-[14px]">Once you have created the design you want, you can share it with others on the page:</p>
                        <button
                            type="submit"
                            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            {loading ? 'Sharing...' : 'Add To Cart and Share with the Community'}
                        </button>
                    </div> 
                </div>
            </form>
        </div>
        
    </div>
  )
}

