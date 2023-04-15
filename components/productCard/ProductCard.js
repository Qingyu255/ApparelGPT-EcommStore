import Link from "next/link"
import { useContext } from "react"
import { ProductsContext } from "./ProductsContext"

function ProductCard(props) {
    const {setProductClicked} = useContext(ProductsContext)
    console.log(props.name)

    function setProduct() {
        setProductClicked(props._id)
    }

    return (
        <div key={props._id} className="w-72 sm:w-80">
            <Link href={`/products/${props._id}`} onClick={setProduct}>
                <div className="py-3 px-3 bg-white shadow-md rounded-3xl cursor-pointer">
                    <div className="flex justify-center items-center">
                        <img className="rounded-3xl h-80 object-cover" src={props.image}/>
                    </div>
                    <div className="mx-3">
                        <div className="mt-2">
                            <h1 className="font-bold text-lg">{props.name}</h1>
                        </div>
                        {/* <div>
                            <p className="font-sm mt-1 leading-5">{props.description}</p>
                        </div> */}
                        <div className="flex mt-2">
                            <div className="text-lg font-semibold grow">${props.price}</div>
                        </div>
                    </div>
                </div>    
            </Link> 
            
        </div>
    )
}

export default ProductCard