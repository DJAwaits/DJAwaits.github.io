import React, { useEffect, useState } from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
//import { clearConfigCache } from 'prettier';

const UploadBook = () => {
    

    //  handle book submission
    const handleBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const authors = form.authors.value;
        const thumbnail = form.thumbnail.value;
        const categories = form.categories.value;
        const description = form.description.value;
        const isbn13 = form.isbn13.value;
        const isbn10 = form.isbn10.value;
        const published_year = form.published_year.value;
        const num_pages = form.num_pages.value;

        const bookObj = {
            title, authors, thumbnail, categories, description, isbn13, isbn10,published_year, num_pages
        }

        console.log(bookObj)

        // send data to db

        fetch("http://localhost:5000/upload-book", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
             console.log(data)
            alert("Book upload successfully!!!")
            form.reset();
        })
    };
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A book</h2>

            <form onSubmit={handleBookSubmit}className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                {/* first row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label 
                                htmlFor="title" 
                                value="title" 
                            />
                        </div>
                        <TextInput 
                            id="title" 
                            name='title'
                            type="text" 
                            placeholder="Book name" 
                            required 
                        />
                    </div>

                    {/* authorName */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label 
                                htmlFor="authors" 
                                value="authors" 
                            />
                        </div>
                        <TextInput 
                            id="authors" 
                            name='authors'
                            type="text" 
                            placeholder="Author Name" 
                            required 
                        />
                    </div>
                </div>

                {/* 2nd Row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label 
                                htmlFor="thumbnail" 
                                value="thumbnail" 
                            />
                        </div>
                        <TextInput 
                            id="thumbnail" 
                            name='thumbnail'
                            type="text" 
                            placeholder="Book image URL" 
                            required 
                        />
                    </div>

                    {/* Category */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                        <Label 
                                htmlFor="categories" 
                                value="categories" 
                            />
                        </div>
                        <TextInput 
                            id="categories" 
                            name='categories'
                            type="text" 
                            placeholder="Book Category" 
                            required 
                        />

                    </div>
                </div>

                {/* bookDescription */}
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="description"
                            value="description"
                        />
                    </div>
                    <Textarea
                        id="description"
                        name="description"
                        placeholder="Write your book description..."
                        required
                        className='w-full'
                        rows={6}
                    />   
                </div>

                
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="isbn13"
                            value="isbn13"
                        />
                    </div>
                    <TextInput
                        id="isbn13"
                        name='isbn13'
                        placeholder="book isbn 13"
                        required
                        type="text"
                    />
                      <div className="mb-2 block">
                        <Label
                            htmlFor="isbn10"
                            value="isbn10"
                        />
                    </div>
                    <TextInput
                        id="isbn10"
                        name='isbn10'
                        placeholder="book isbn 10"
                        required
                        type="text"
                    />     
                </div>
                <div className="mb-2 block">
                        <Label
                            htmlFor="published_year"
                            value="published_year"
                        />
                    </div>
                    <TextInput
                        id="published_year"
                        name='published_year'
                        placeholder="Published Year"
                        required
                        type="text"
                    />
                <div className="mb-2 block">
                        <Label
                            htmlFor="num_pages"
                            value="num_pages"
                        />
                    </div>
                    <TextInput
                        id="num_pages"
                        name='num_pages'
                        placeholder="Page Count"
                        required
                        type="text"
                    />    
                

                <Button type="submit" className='mt-5 text-black'>
                    Upload Book
                </Button>

            </form>
        </div>
    )
}

export default UploadBook
