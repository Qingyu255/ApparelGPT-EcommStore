import { createContext, useState } from "react"
import useLocalStorageState from "use-local-storage-state"

export const ProductsContext = createContext({})

export function ProductsContextProvider({children}) {
    const [selectedProducts, setSelectedProducts] = useLocalStorageState("selectedProducts", {defaultValue: []})
    const [selectedCustomProducts, setSelectedCustomProducts] = useLocalStorageState("selectedCustomProducts", {defaultValue: []})
    const [productClicked, setProductClicked] = useLocalStorageState("productClicked", {defaultValue: ""})
    return (
        <ProductsContext.Provider value={{selectedProducts, setSelectedProducts, productClicked, setProductClicked, selectedCustomProducts, setSelectedCustomProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}