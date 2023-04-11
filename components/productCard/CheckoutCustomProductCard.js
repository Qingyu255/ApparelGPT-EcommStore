import { Fragment, useContext} from "react"
import { ProductsContext } from "./ProductsContext"
import Card from "../customiser/Card"

export default function CheckoutCustomProductCard({ _id, name, prompt, photo, product, colour}) {
    const { selectedCustomProducts, setSelectedCustomProducts } = useContext(ProductsContext)
    const price = 20
    function incrementProductQuantity(id) {
        setSelectedCustomProducts(prev => {
            return [...prev, id]
        })
    }

    function lowerProductQuantity(id) {
        const pos = selectedCustomProducts.indexOf(id)
        if (selectedCustomProducts.length === 1) {
            setSelectedCustomProducts( () => {
                return []
            })
        } else if (pos != -1) {
            setSelectedCustomProducts( prev => {
                return prev.filter((value, index) => index != pos)
            })
        }
    }

    return (
        <Fragment>
            <div className="flex flex-wrap mx-10 py-5 border-b-2 border-gray-300">
                <div className="shrink w-44">
                    <Card {...{ _id, name, prompt, photo, product, colour}}/>
                </div>
                <div className="flex items-center w-52 mr-5">
                    {/* <img className="rounded-xl" src={photo}></img>  */}  
                </div>
                <div className="flex items-center p-5 pl-0">
                    <div>
                        <h1 className="font-bold text-xl">Customised {product}:</h1>
                        <p className="font-semibold pt-1 max-w-sm">{prompt}</p>
                        <h1 className="font-semibold pt-2">${price}</h1>
                        <div className="flex flex-row items-center">
                            <h1 className="mr-5">Quantity: </h1>
                            <button onClick={() => lowerProductQuantity(_id)} className="bg-neutral-300 rounded-xl font-bold px-1.5">-</button>
                            <h1 className="px-3">{selectedCustomProducts.filter(id => id === _id).length}</h1>
                            <button onClick={() => incrementProductQuantity(_id)} className="bg-neutral-300 rounded-xl font-bold px-1.5">+</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}