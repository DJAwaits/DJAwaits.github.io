import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react'


const ManageAnimanga = () => {
  const [allAnimangas, setAllAnimangas] = useState([]);
  useEffect( () => {
      fetch("https://localhost:5000/all-animanga").then(res => res.json()).then(data => setAllAnimangas(data))
  }, [])

  // delete a book
  const handleDelete = (id) => {
      console.log(id);
      fetch(`https://localhost:5000/animanga/${id}`, {
          method: "DELETE", 
      }).then(res => res.json()).then(data => {
          alert("Animanga is deleted successfully!") 
          setAllAnimangas(data);
      })
  }
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3x1 font-bold'>Manage Your Animanga</h2>

        {/* table for book data */}
        <Table className='lg:w-[1180px]'>
            <Table.Head>
                <Table.HeadCell>
                    No.
                </Table.HeadCell>
                <Table.HeadCell>
                    Animange Title
                </Table.HeadCell>
                
                <Table.HeadCell>
                   Tags
                </Table.HeadCell>
                <Table.HeadCell>
                    <span>
                        Edit or Manage
                    </span>
                </Table.HeadCell>
            </Table.Head>
                {
                    allAnimangas.map((animanga, index) => <Table.Body className="divide-y" key={animanga._id}>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">  
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {index + 1}
                        </Table.Cell>        
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {animanga.title}
                        </Table.Cell>
                       
                        <Table.Cell>
                            {animanga.tags}
                        </Table.Cell>
                        <Table.Cell>
                            <Link
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                                to={`/admin/dashboard/editAnimanga/${animanga._id}`}
                            >    
                                Edit 
                            </Link>  
                            <button onClick={() => handleDelete(animanga._id) } className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm 
                            hover:bg-sky-600'>Delete</button>  
                        </Table.Cell>
                    </Table.Row>    
                    </Table.Body>)
                }
        </Table>
    </div>
)
}

export default ManageAnimanga
