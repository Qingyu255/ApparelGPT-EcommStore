import { Fragment, useContext } from 'react'
import Link from 'next/link'

export default function Card ({ _id, name, prompt, photo, product, colour, purpose}) {
  // This Card is for the AI products overview/showcase
  const shirtRoute = "/products/blankShirts/" + colour
  const toteRoute = "/products/blankTotes/" + colour
  // const { selectedProducts, setSelectedProducts, selectedCustomProducts, setSelectedCustomProducts } = useContext(ProductsContext)

  console.log(purpose + "hi")
  return (
    <Fragment>
      <div className='flex justify-center items-center'>
        <div className="flex items-center w-72 sm:w-96">
          <div>
            {product === "Tote" ? 
              <div className="flex items-center justify-center group relative">
                <img src={toteRoute} className={`${purpose != "featured" && "border-2 border-slate-300 rounded-xl"}`}></img>
                <div className="w-32 h-16 sm:w-48 sm:h-24 absolute flex justify-center">
                  <img className="rounded-md absolute h-40 sm:h-52" src={photo}></img>
                </div>
                
                {purpose !="featured" &&
                <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-3 rounded-md">
                  <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
                  <div className="mt-3 flex justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full object-cover bg-cyan-300 flex justify-center items-center text-black text-xs font-bold">{name[0]}</div>
                      <p className="text-white text-sm">{name}</p>
                    </div>
                    <Link href={`/customProducts/${_id}`}>
                      <button type="button" className="outline-none bg-transparent border-none">
                        <img src="/addToCart.png" alt="download" className="w-8 h-8 object-contain invert" />
                      </button>
                    </Link>
                  </div>
                </div>
                }
              </div>
            :
              <div className="flex items-center justify-center group relative">
                <img src={shirtRoute} className={`${purpose != "featured" && "border-2 border-slate-300 rounded-xl"}`}></img>
                <div className="w-32 h-48 sm:w-40 sm:h-60 absolute flex justify-center">
                  <img className="rounded-md absolute h-40 sm:h-52" src={photo}></img>
                </div>
                {purpose != "featured" &&
                <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-3 rounded-md">
                  <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>
                  <div className="mt-3 flex justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full object-cover bg-cyan-300 flex justify-center items-center text-black text-xs font-bold">{name[0]}</div>
                      <p className="text-white text-sm">{name}</p>
                    </div>
                    <Link href={`/customProducts/${_id}`}>
                      <button type="button" className="outline-none bg-transparent border-none">
                        <img src="/addToCart.png" alt="Add To Cart" className="w-8 h-8 object-contain invert" />
                      </button>
                    </Link>
                  </div>
                </div>
                }
              </div>   
            } 
          </div>
          
        </div>
        
      </div>
      
    </Fragment>
  )
}

