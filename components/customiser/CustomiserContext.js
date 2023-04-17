import { createContext } from "react"
import useLocalStorageState from "use-local-storage-state"

export const CustomiserContext = createContext({})

export function CustomiserContextProvider({children}) {
    const [customProduct, setCustomProduct] = useLocalStorageState("customProduct", {defaultValue: "T-Shirt"})
    const [customImageChosen, setCustomImageChosen] = useLocalStorageState("customImageChosen", {defaultValue: null})
    const [form, setForm] = useLocalStorageState("imageGenerated", {defaultValue: {
        name: "",
        prompt: "",
        photo: "",
        colour: "",
        product: customProduct,
        size: "",
    }})    
    return (
        <CustomiserContext.Provider value={{ customImageChosen, setCustomImageChosen, customProduct, setCustomProduct, form, setForm}}>
            {children}
        </CustomiserContext.Provider>
    )
}