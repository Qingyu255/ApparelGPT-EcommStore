import { Fragment, useContext } from 'react'
import { CirclePicker } from 'react-color'
import { CustomiserContext } from './CustomiserContext'

export default function CustomiserSettings() {
  const { customColour, setCustomColour, linkInput, setLinkInput, setAddPicture } = useContext(CustomiserContext)
  const { form, setForm } = useContext(CustomiserContext)

  function handleColorChange(hex) {
    const colours = {
        "#e3e4de": "White.jpg",
        "#e4d5c2": "Beige.jpg",
        "#1a1d24": "Black.jpg",
        "#686b70": "Grey.jpg",
        "#2d3041": "Navy.jpg",
    }
    
    setCustomColour(colours[hex])
    setForm({ ...form, colour: colours[hex] })
  }

  function handleProductType(e) {
    if (form.product === "T-Shirt" && e.target.name === "Tote") {
      setForm({ ...form, product: e.target.name, colour: "White.jpg", size: "" })
    } else{
      setForm({ ...form, product: e.target.name })
    }
  }

  function handleProductSize(e) {
    setForm({ ...form, size: e.target.name })
  }

  return (
    <Fragment>
      <div>
        <div className='flex flex-wrap gap-6'>
          <div>
            <h1 className='font-semibold sm:text-xl'>Pick your Product:</h1>
            <div className='flex flex-wrap my-2 sm:my-4'>
              <button className='bg-slate-300 hover:bg-neutral-200 rounded-lg px-2 mr-1 text-xs sm:text-sm' name="T-Shirt" onClick={handleProductType}>T-Shirt</button>
              <button className='bg-slate-300 hover:bg-neutral-200 rounded-lg px-2 ml-2 text-xs sm:text-sm' name="Tote" onClick={handleProductType}>Tote</button>
            </div>
          </div>
          <div>
          {form.product != "Tote" &&
            <div>
              <h1 className='font-semibold sm:text-xl'>Choose Size:</h1>
              <div className='flex flex-wrap my-2 sm:my-4 gap-2 sm:w-40'>
                <button className='bg-slate-300 hover:bg-neutral-200 rounded-lg px-2 text-xs sm:text-sm' onClick={handleProductSize} name="XS">XS</button>
                <button className='bg-slate-300 hover:bg-neutral-200 rounded-lg px-2 text-xs sm:text-sm' onClick={handleProductSize} name="S">S</button>
                <button className='bg-slate-300 hover:bg-neutral-200 rounded-lg px-2 text-xs sm:text-sm' onClick={handleProductSize} name="M">M</button>
                <button className='bg-slate-300 hover:bg-neutral-200 rounded-lg px-2 text-xs sm:text-sm' onClick={handleProductSize} name="L">L</button>
                <button className='bg-slate-300 hover:bg-neutral-200 rounded-lg px-2 text-xs sm:text-sm' onClick={handleProductSize} name="XL">XL</button>
                <button className='bg-slate-300 hover:bg-neutral-200 rounded-lg px-2 text-xs sm:text-sm' onClick={handleProductSize} name="2XL">2XL</button>                           
              </div>
            </div>
          }
          </div>
        </div>
          <h1 className='font-semibold sm:text-xl mt-4'>Pick a Colour:</h1>
          <div className='my-2 sm:my-4'>
            {form.product === "Tote"? 
              <CirclePicker
                colors={[ '#e3e4de','#e4d5c2', '#1a1d24' ]}
                onChange={(color) => handleColorChange(color.hex)}
                width="150px"
              />
            : 
              <CirclePicker
                colors={[ '#e3e4de','#e4d5c2', '#686b70', '#2d3041', '#1a1d24' ]}
                onChange={(color) => handleColorChange(color.hex)}
                width="150px"
              />
            }
            <p className='text-xs sm:text-sm my-2'>{customColour.split(".")[0]}</p>
          </div> 
      </div>
    </Fragment>
  );
};