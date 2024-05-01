import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from 'react'

const EditAnimanga = () => {

  const {id} = useParams();
  const {title, year, cover, tags, description} = useLoaderData();
  
  const handleAnimangaUpdate = (event) => {


    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const year = form.year.value;
    const cover = form.cover.value;
    const tags = form.tags.value;
    const description = form.description.value;
    
    

    const updateAnimangaObj = {
      title, year, cover, tags, description
    }

    console.log(updateAnimangaObj)

    // send data to db

    fetch("http://localhost:5000/animanga:id", {
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(updateAnimangaObj)
    }).then(res => res.json()).then(data => {
         console.log(data)
        alert("animanga updated successfully!!!")
        form.reset();
    })
};
return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update An Animanga</h2>

        <form onSubmit={handleAnimangaUpdate}className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
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
                        placeholder="Animanga name" 
                        required 
                    />
                </div>

                {/* authorName */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label 
                            htmlFor="year" 
                            value="year" 
                        />
                    </div>
                    <TextInput 
                        id="year" 
                        name='year'
                        type="text" 
                        placeholder="Year" 
                        required 
                    />
                </div>
            </div>

            {/* 2nd Row */}
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label 
                            htmlFor="cover" 
                            value="cover" 
                        />
                    </div>
                    <TextInput 
                        id="cover" 
                        name='cover'
                        type="text" 
                        placeholder="Cover image URL" 
                        required 
                    />
                </div>

                {/* Category */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                    <Label 
                            htmlFor="tags" 
                            value="tags" 
                        />
                    </div>
                    <TextInput 
                        id="tags" 
                        name='tags'
                        type="text" 
                        placeholder="tags" 
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
                    placeholder="Write your description..."
                    required
                    className='w-full'
                    rows={6}
                />   
            </div>

            
           
            

            <Button type="submit" className='mt-5 text-black'>
                Update Movie
            </Button>

        </form>
    </div>
)
   
}

export default EditAnimanga
