import { Fragment, useContext } from 'react'
import { CirclePicker } from 'react-color'
import { CustomiserContext } from './CustomiserContext'

export default function CustomiserSettings() {
  const { form, setForm } = useContext(CustomiserContext)

  function handleColorChange(hex) {
    const colours = {
        "#e3e4de": "White.jpg",
        "#e4d5c2": "Beige.jpg",
        "#1a1d24": "Black.jpg",
        "#686b70": "Grey.jpg",
        "#2d3041": "Navy.jpg",
    }
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
        <div className='flex flex-col'>
          <div className='flex flex-row gap-6'>
            <div>
              <h1 className='font-semibold sm:text-xl'>Pick your Product:</h1>
              <div className='flex flex-wrap my-2 sm:my-4'>
                <button className='bg-[#c3c6c9] hover:bg-slate-400 rounded-lg px-2 py-1 mr-1 text-xs sm:text-sm font-semibold' name="T-Shirt" onClick={handleProductType}>T-Shirt</button>
                <button className='bg-[#c3c6c9] hover:bg-slate-400 rounded-lg px-2 py-1 ml-2 text-xs sm:text-sm font-semibold' name="Tote" onClick={handleProductType}>Tote</button>
              </div>
            </div>
            
            <div>
              <h1 className='font-semibold sm:text-xl'>Pick a Colour:</h1>
              <div className='my-2'>
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
                <p className='text-xs sm:text-sm mt-2'>{form.colour.split(".")[0]}</p>
              </div> 
            </div>
          </div>

          {form.product != "Tote" &&
            <div>
              <h1 className='font-semibold sm:text-xl'>Choose Size:</h1>
              <p className="text-xs sm:text-sm">{form.size}</p>
              <div className='grid grid-cols-3 my-2 gap-2'>
                <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="XS">XS</button>
                <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="S">S</button>
                <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="M">M</button>
                <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="L">L</button>
                <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="XL">XL</button>
                <button className='bg-[#c3c6c9] hover:bg-slate-300 rounded-lg px-2 py-1 text-xs sm:text-sm font-semibold' onClick={handleProductSize} name="2XL">2XL</button>                           
              </div>
            </div>
          }

        </div>    
      </div>
    </Fragment>
  );
};