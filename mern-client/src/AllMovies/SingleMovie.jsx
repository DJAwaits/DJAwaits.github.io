import React from 'react'
import { useLoaderData } from 'react-router-dom'
const SingleMovie = () => {
  const {_id, Series_Title, Poster_Link} = useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={Poster_Link} alt="" className='h-96'/>
      <h2>{Series_Title}</h2>
    </div>
  )
}

export default SingleMovie
