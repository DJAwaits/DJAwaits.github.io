import React, {useEffect, useState} from 'react'


import { Card } from "flowbite-react";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  }, []);
  return (
    <div className='mt-28 px-4 lg;px-24'> 
      <h2 className='text-5x1 font-bold text-center text-2xl'>All books</h2>

      <div>
        {
          books.map(books => <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/blog/image-1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>)
        }
      </div>
    </div>
  )
}

export default AllBooks
