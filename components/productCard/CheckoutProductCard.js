import { Fragment, useContext} from "react"
import { ProductsContext } from "./ProductsContext"

export default function CheckoutProductCard(props) {
    const {selectedProducts,setSelectedProducts} = useContext(ProductsContext)

    function incrementProductQuantity(id) {
        setSelectedProducts(prev => {
            return [...prev, id]
        })
    }

    function lowerProductQuantity(id) {
        const pos = selectedProducts.indexOf(id)
        if (selectedProducts.length === 1) {
            setSelectedProducts( () => {
                return []
            })
        } else if (pos != -1) {
            setSelectedProducts( prev => {
                return prev.filter((value, index) => index != pos)
            })
        }
    }

    return (
        <Fragment>
            <div className="flex flex-wrap mx-10 py-5 border-b-2 border-gray-300">
                <div className="flex items-center w-52 mr-5">
                    <img className="rounded-xl" src={props.image}></img>
                </div>
                <div className="flex items-center p-5 pl-0">
                    <div>
                        <h1 className="font-bold text-xl">{props.name}</h1>
                        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
                        <h1 className="font-semibold pt-2">${props.price}</h1>
                        
                        <div className="flex flex-row items-center">
                            <h1 className="mr-5">Quantity: </h1>
                            <button onClick={() => lowerProductQuantity(props.id)} className="bg-neutral-300 rounded-xl font-bold px-1.5">-</button>
                            <h1 className="px-3">{props.quantity}</h1>
                            <button onClick={() => incrementProductQuantity(props.id)} className="bg-neutral-300 rounded-xl font-bold px-1.5">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}