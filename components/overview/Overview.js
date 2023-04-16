import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../Loader'
import Card from '../customiser/Card'
import FormField from '../customiser/FormField'
import Carousel from './Carousel'

function RenderCards({data, title, home, carousel}) {    
    if(data?.length > 0) {
        const productTypes = [...new Set(data.map(p => p.product))]   
        console.log("product")
        console.log(data)
        return (
            productTypes.map(productType => (
                <div key={productType} className='flex flex-col my-5 mx-10'>
                    <h2 className="text-2xl md:text-4xl font-bold pb-5">{productType}s {home && "by Dall E"}</h2>
                    <div>
                        {carousel?
                        <div>                      
                            <Carousel posts={data.filter(post => post.product === productType)} />
                        </div>                       
                        : 
                        <div className='flex flex-wrap justify-center gap-8'>
                            {data.filter(post => post.product === productType).map((post) => <Card key={post._id} {...post}/>)}
                        </div>
                        }
                    </div>                   
                </div>
            ))       
        )               
    } else{
        return (
        <h2 className='mt-5 font-bold text-[#6449ff]'>{title}</h2>
        )
    }   
}

export default function Overview (props) {
    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState(null)
    const [searchText, setSearchText] = useState("")
    const [searchTimeout, setSearchTimeout] = useState(null)
    const [searchedResults, setSearchedResults] = useState(null)

    async function fetchPostsData() {
        setLoading(true)
        try {
            const response = await fetch("/api/post", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                console.log("fetched")
                const fetchedData = await response.json()
                setAllPosts(fetchedData.data.reverse())
            }
        } catch(error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPostsData()
    }, [])

    function handleSearchChange(e) {
        clearTimeout(searchTimeout)
        setSearchText(e.target.value)
    
        setSearchTimeout(
          setTimeout(() => {
            const searchResult = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()))
            setSearchedResults(searchResult);
          }, 500),
        )
      }

  return (
    <Fragment>
        <div className='border-t-2 2xl:mx-10'>
            {props.home?
                <div>
                    {/* <h2 className="text-3xl font-bold py-5">Designed By AI:</h2> */}
                </div>
                :
                <div>
                    <div>
                        <h1 className='font-extrabold text-xl mt-10'>Shop Others' Designs</h1>
                        <p> Browse through a collection of prints designed by our dearest AI, Dall E.</p>
                    </div>
                    <div className='mt-5 mb-10'>
                        <FormField
                            labelName="Search Designs"
                            type="text"
                            name="text"
                            placeholder="Search something..."
                            value={searchText}
                            handleChange={handleSearchChange}
                        />
                    </div>
                </div>
            }    
            <div>
                {loading? (
                    <div className='flex justify-center items-center'>
                        <Loader />
                    </div>
                ) : (
                <Fragment>
                    {searchText && (
                        <h2 className='font-medium text-gray-500 text-md mb-3'>
                            Showing results for <span className='text-gray-500'>{searchText}</span>
                        </h2>
                    )}
                    <div className=''>
                        {searchText ? (
                            <RenderCards
                                data={searchedResults}
                                title="No search results found"
                                home={props.home}
                                carousel={props.carousel}
                            />
                        ) : (
                            <RenderCards
                                data={allPosts}
                                title="NO POSTS FOUND"
                                home={props.home}
                                carousel={props.carousel}
                            />
                        )}
                    </div>
                
                </Fragment>
                )}
            </div>
        </div>
    </Fragment>
    
  )
}

