import { createContext, useState } from "react"
import useLocalStorageState from "use-local-storage-state"

export const ProductsContext = createContext({})

export function ProductsContextProvider({children}) {
    const [selectedProducts, setSelectedProducts] = useLocalStorageState("cart", {defaultValue: []})
    const [productClicked, setProductClicked] = useLocalStorageState("productClicked", {defaultValue: ""})
    return (
        <ProductsContext.Provider value={{selectedProducts, setSelectedProducts, productClicked, setProductClicked}}>
            {children}
        </ProductsContext.Provider>
    )
}