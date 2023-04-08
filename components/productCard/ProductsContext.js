import { createContext, useState } from "react"
import useLocalStorageState from "use-local-storage-state"

export const ProductsContext = createContext({})

export function ProductsContextProvider({children}) {
    const [selectedProducts, setSelectedProducts] = useLocalStorageState("cart", {defaultValue: []})
    const [customProducts, setCustomProducts] = useLocalStorageState("customProductsCart", {defaultValue: []})
    const [productClicked, setProductClicked] = useLocalStorageState("productClicked", {defaultValue: ""})
    return (
        <ProductsContext.Provider value={{selectedProducts, setSelectedProducts, productClicked, setProductClicked, customProducts, setCustomProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}