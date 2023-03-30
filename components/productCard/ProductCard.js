import Link from "next/link"
import { Fragment, useContext } from "react"
import { ProductsContext } from "./ProductsContext"

function ProductCard(props) {
    const {setProductClicked} = useContext(ProductsContext)
    console.log(props.name)

    function setProduct() {
        setProductClicked(props._id)
    }

    return (
        <div key={props._id} className="ml-5">
            <Link href={`/products/${props._id}`} onClick={setProduct}>
                <div className="w-64 py-3 px-3 mx-5 bg-white shadow-md rounded-3xl cursor-pointer">
                    <div>
                        <img className="rounded-3xl" src={props.image}/>
                    </div>
                    <div className="mt-2">
                        <h1 className="font-bold text-lg">{props.name}</h1>
                    </div>
                    <div>
                        <p className="font-sm mt-1 leading-5">{props.description}</p>
                    </div>
                    <div className="flex mt-2">
                        <div className="text-2xl font-bold grow">${props.price}</div>
                    </div>
                </div>    
            </Link> 
            
        </div>
    )
}

export default ProductCard