
const Banner = () => {

    const bannerRoute = "/dallEBanner.png"

    return (
        <div className='flex justify-center'>
            <div className='flex items-center justify-center relative m-5 sm:m-10'>
                <img src={bannerRoute} className='rounded-xl'></img>
                <div className='absolute bg-[rgba(0,0,0,0.3)] rounded-lg px-5 py-2'>
                    <h1 className='flex justify-center font-black text-2xl sm:text-4xl lg:text-6xl text-white'>Apparel GPT</h1>
                    <p className='flex justify-center font-black text-white mt-1 sm:mt-3 text-sm sm:text-md'>Boring Shirts? AI is here to help.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
