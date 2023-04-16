import { Fragment, useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import Card from "../customiser/Card"

export default function Carousel(props) {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }    
        window.addEventListener('resize', handleResize);      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    var postsData = props.posts
    if (postsData.length > 6) {
        postsData = postsData.slice(0, 6)
    }

    if (postsData.length > 3) {
        var iterable = [postsData.slice(0, 3), postsData.slice(3)]
    } else {
        var iterable = [postsData]
    }   

    return (
        <Fragment>
            {windowSize.width > 1320 ?
            <div>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {iterable.map(productsArray =>                               
                        <SwiperSlide>
                            <div className=" flex object-fill gap-5 justify-center">
                                {productsArray.map((post) => <Card key={post._id} {...post}/>)}
                            </div>      
                        </SwiperSlide>                                              
                    )}           
                    <SwiperSlide>
                        <div className="flex items-center justify-center h-[500px]">
                            <button className="p-5 rounded-lg border-2 border-slate-300 whitespace-nowrap hover:bg-gray-200">Shop More Designs</button>  
                        </div>
                    </SwiperSlide>                          
                </Swiper>   
            </div>        
            : 
            <div className='flex flex-grow overflow-x-auto snap-x 2xl:justify-center gap-8 pb-2'>
                {postsData.map((post) => 
                <div key={post._id} className="snap-center">
                    <Card {...post}/>
                </div>
                )}                
            </div>
            }
        </Fragment>
    );
}