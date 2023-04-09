import { Fragment, useContext, useEffect, useState } from "react";
import { CustomiserContext } from './CustomiserContext';


export default function DesignCard() {
  const [bgImg, setBgImg] = useState("")
  const {customColour, form} = useContext(CustomiserContext)

  useEffect(() => {
    setBgImg(form.colour)
  }, [form.colour])

  const shirtRoute = "/products/blankShirts/" + bgImg
  const toteRoute = "/products/blankTotes/" + bgImg

  return (
    <Fragment>
      <div className="mx-5 sm:mx-10">
        <div className="w-72 h-fit sm:w-96 shadow-md">
          <div>

            {form.product === "Tote" ? 
            <div className="flex items-center justify-center relative">
              <img src={toteRoute} className="rounded-xl"></img>
              <div className="w-32 h-16 sm:w-48 sm:h-24 absolute flex justify-center">
                <img className="rounded-md absolute h-40 sm:h-52" src={form.photo}></img>
              </div>
            </div>
            :
            <div className="flex items-center justify-center relative">
              <img src={shirtRoute} className="rounded-xl"></img>
              <div className="w-32 h-48 sm:w-40 sm:h-60 absolute flex justify-center">
                <img className="rounded-md absolute h-40 sm:h-52" src={form.photo}></img>
              </div>
            </div>
            }
            
          </div>
        </div>
      </div>
    </Fragment>
  )
}