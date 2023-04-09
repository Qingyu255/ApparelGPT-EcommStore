import { createContext } from "react"
import useLocalStorageState from "use-local-storage-state"

export const CustomiserContext = createContext({})

export function CustomiserContextProvider({children}) {
    const [customColour, setCustomColour] = useLocalStorageState("customColour", {defaultValue: "White.jpg"})
    const [customProduct, setCustomProduct] = useLocalStorageState("customProduct", {defaultValue: "T-Shirt"})
    const [customImageChosen, setCustomImageChosen] = useLocalStorageState("customImageChosen", {defaultValue: null})
    const [form, setForm] = useLocalStorageState("imageGenerated", {defaultValue: {
        name: "",
        prompt: "",
        photo: "",
        colour: "",
        product: customProduct,
    }})
    return (
        <CustomiserContext.Provider value={{customColour, setCustomColour, customImageChosen, setCustomImageChosen, customProduct, setCustomProduct, form, setForm}}>
            {children}
        </CustomiserContext.Provider>
    )
}