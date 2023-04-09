import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../Loader'
import Card from './Card'
import FormField from './FormField'

function RenderCards({data, title}) {
    if(data?.length > 0) {
        return data.map((post) => <Card key={post._id} {...post}/>)
    }

    return (
        <h2 className='mt-5 font-bold text-[#6449ff]'>{title}</h2>
    )
}


export default function Overview () {
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
        <div className='border-t-2 '>
            <div>
                <h1 className='font-extrabold text-xl mt-10'>See Others' Designs</h1>
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
                    <div className='flex flex-wrap justify-center gap-10 '>
                        {searchText ? (
                            <RenderCards
                                data={searchedResults}
                                title="No search results found"
                            />
                        ) : (
                            <RenderCards
                                data={allPosts}
                                title="NO POSTS FOUND"
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

