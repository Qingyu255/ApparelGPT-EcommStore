
const Banner = () => {

    const bannerRoute = "/dallEBanner.jpg"

    return (
        <div className='flex justify-center'>
            <div className='flex items-center justify-center relative m-10 max-w-[1400px]'>
                <img src={bannerRoute} className='rounded-xl'></img>
                <div className='absolute bg-[rgba(0,0,0,0.6)] rounded-lg px-5 py-2'>
                    <h1 className='font-black text-7xl text-white'>Apparel GPT</h1>
                    <p className='flex justify-center font-black text-white mt-3'>Boring Shirts? AI is here to help.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
