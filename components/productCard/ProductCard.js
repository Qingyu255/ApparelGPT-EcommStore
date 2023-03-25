import { Fragment } from "react"

function ProductCard(props) {
    return (
        <Fragment>
            <div className="w-64 py-5 m-10">
                    <div className="bg-blue-100 p-5 rounded-xl">
                        <img className="rounded-lg" src={props.image}/>
                    </div>
                    <div className="mt-2">
                        <h2 className="font-bold text-lg">{props.name}</h2>
                    </div>
                    <div>
                        <p className="font-sm mt-1 leading-5">{props.description}</p>
                    </div>
                    <div className="flex mt-2">
                        <div className="text-2xl font-bold grow">${props.price}</div>
                        <button className="bg-emerald-400 text-white py-1 px-3 pb-2 rounded-xl text-2xl">+</button>
                    </div>
            </div>
        </Fragment>
    )
}

export default ProductCard