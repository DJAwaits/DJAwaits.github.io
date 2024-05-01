import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id, title, cover} = useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={cover} alt="" className='h-96'/>
      <h2>{title}</h2>
    </div>
  )
}

export default SingleBook
