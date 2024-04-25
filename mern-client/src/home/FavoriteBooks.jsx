import React, {useEffect, useState} from 'react'
import BookCards from '../comp/BookCards';

const FavoriteBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => console.log(data)) 
    }, [])
  return (
    <div>
      <BookCards books={books} headline=""/>
    </div>
  )
}

export default FavoriteBooks
