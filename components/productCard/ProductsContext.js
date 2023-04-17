import { createContext, useState } from "react"
import useLocalStorageState from "use-local-storage-state"

export const ProductsContext = createContext({})

export function ProductsContextProvider({children}) {
    const [selectedProducts, setSelectedProducts] = useLocalStorageState("selectedProducts", {defaultValue: []})
    const [selectedCustomProducts, setSelectedCustomProducts] = useLocalStorageState("selectedCustomProducts", {defaultValue: []})
    const [scrollTo, setScrollTo] = useState()
    return (
        <ProductsContext.Provider value={{selectedProducts, setSelectedProducts, selectedCustomProducts, setSelectedCustomProducts, scrollTo, setScrollTo}}>
            {children}
        </ProductsContext.Provider>
    )
}