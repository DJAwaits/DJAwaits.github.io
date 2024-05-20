import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleMovie = () => {
  const {_id, Series_Title, Poster_Link, Overview, Director, Runtime, Released_Year, categories} = useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24 flex display:flex bg-sky-blue'>
        <img src={Poster_Link} alt="" className='h-96 m-2.5'/>
      <div className='m-2.5'>
        <h2 className='m-2.5 font-bold text-4xl border-b-2 border-gunmetal pb-1'>{Series_Title}</h2>
        <h2 className='m-2.5 mt-6 text-xl'>Description:</h2>
        <p className='m-2.5 mt-2 border rounded p-2 border-gunmetal'>{Overview}</p>
        <h2 className='m-2.5 mt-6 text-xl'>Additional Information:</h2>
        <p className='m-2.5 mt-2 border rounded p-2 border-gunmetal'>
          <p>Released: {Released_Year}</p>
          <p>Movie Length: {Runtime}</p>
          <p>Directed By: {Director}</p>
        </p>
      </div>
    </div>
  )
}

export default SingleMovie

