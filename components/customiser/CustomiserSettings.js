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
      "#686b70": "Grey.jpg",
      "#2d3041": "Navy.jpg",
      "#1a1d24": "Black.jpg"
    }
    setCustomColour(colours[hex])
    setForm({ ...form, shirtColour: colours[hex] })
  }

  return (
    <Fragment>
      <div className=''>
        <div>
          <h1 className='font-semibold sm:text-xl'>Pick your Product:</h1>
          <div className='flex flex-wrap my-2 sm:my-4'>
            <button className='bg-slate-300 hover:bg-neutral-200 rounded-lg px-2 mr-1 text-xs sm:text-sm'>T-Shirt</button>
            <button className='bg-slate-300 hover:bg-neutral-200 rounded-lg px-2 ml-2 text-xs sm:text-sm'>Tote</button>
          </div>
          
        </div>
        
        <h1 className='font-semibold sm:text-xl'>Pick a Colour:</h1>
        <div className='my-5'>
          <CirclePicker
            colors={[ '#e3e4de','#e4d5c2', '#686b70', '#2d3041', '#1a1d24' ]}
            onChange={(color) => handleColorChange(color.hex)}
            width="150px"
          />
          <p className='text-xs sm:text-sm my-2'>{customColour.split(".")[0]}</p>
        </div>
        
      </div>
    </Fragment>
  );
};