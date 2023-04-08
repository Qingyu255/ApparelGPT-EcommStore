import { createContext } from "react"
import useLocalStorageState from "use-local-storage-state"

export const CustomiserContext = createContext({})

export function CustomiserContextProvider({children}) {
    const [customColour, setCustomColour] = useLocalStorageState("customColour", {defaultValue: "white.jpg"})
    const [customImageChosen, setCustomImageChosen] = useLocalStorageState("customImageChosen", {defaultValue: null})
    const [form, setForm] = useLocalStorageState("imageGenerated", {defaultValue: {
        name: "",
        prompt: "",
        photo: "",
        shirtColour: customColour,
    }})
    return (
        <CustomiserContext.Provider value={{customColour, setCustomColour, customImageChosen, setCustomImageChosen, form, setForm}}>
            {children}
        </CustomiserContext.Provider>
    )
}