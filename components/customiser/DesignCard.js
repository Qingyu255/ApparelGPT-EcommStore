import { Fragment, useContext, useEffect, useState } from "react";
import { CustomiserContext } from './CustomiserContext';


export default function DesignCard() {
  const [shirtImg, setShirtImg] = useState("")
  const {customColour, form} = useContext(CustomiserContext)

  useEffect(() => {
    setShirtImg("/products/blankShirts/" + customColour)
  }, [customColour])

  return (
    <Fragment>
      <div className="mx-5 sm:mx-10">
        <div className="w-72 h-fit sm:w-96 shadow-md">
          <div className="flex items-center justify-center relative">
            <img src={shirtImg} className=" rounded-xl"></img>  
            <div className="w-32 h-48 sm:w-40 sm:h-60 absolute flex justify-center">
              <img className="rounded-md absolute h-40 sm:h-52" src={form.photo}></img>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}