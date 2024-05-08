import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id, title, thumbnail, description, authors, num_pages, published_year, categories} = useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24 flex display:flex bg-sky-blue'>
        <img src={thumbnail} alt="" className='h-96 m-2.5'/>
      <div className='m-2.5'>
        <h2 className='m-2.5 font-bold text-4xl'>{title}</h2>
        <p className='m-2.5 mt-8'>{description}</p>
      </div>
      
    </div>
  )
}

export default SingleBook
