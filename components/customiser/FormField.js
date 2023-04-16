export default function FormField({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) {
  return (
    <div>
        <div className='flex items-center gap-2'>
            <label htmlFor={name} className='block text-lg font-medium text-gray-900 mb-1'>{labelName}</label>        
        </div>
        <div>
            <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange} required 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6462ff] focus:border-[#6469ff] outline-none block w-full p-3"></input>
            {isSurpriseMe && (
                <button type='button' onClick={handleSurpriseMe} className='font-semibold text-xs text-white bg-slate-800 hover:bg-[#6469ff] px-2 py-1 my-1.5 rounded-lg'>
                    Surprise Me !
                </button>
            )}
        </div>
    </div>
  )
}