import React, {useEffect, useState} from 'react'


import { Card } from "flowbite-react";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  }, []);
  return (
    <div className='mt-28 px-4 lg;px-24 bg-sky-blue'> 
    <header className='display:flex '>
      <h2 className='text-5x1 font-bold text-center text-2xl'>All books</h2>
      <a  href='https://reccomender-7ckb5mzvqoyqunerf8haxa.streamlit.app/'>
                    <button className='bg-gunmetal px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search + recommendations</button>
                </a>
    </header>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card
          >
            <img src={book.thumbnail} alt="" className='h-96' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                {book.title}
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
              {book.description}
              </p>
            </p>
              {/*<button className='bg-gunmetal font-semibold text-white py-2 rounded'>More</button>*/}
          </Card>)
        }
      </div>
    </div>
  )
}

export default AllBooks
