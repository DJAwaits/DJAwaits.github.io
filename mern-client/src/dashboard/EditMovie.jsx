import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useState } from 'react'

const EditMovie = () => {
  const {id} = useParams();
  const {Series_Title, Director, Poster_Link, Genre, Overview, Runtime} = useLoaderData();
  
  const handleMovieUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const Series_Title = form.Series_Title.value;
    const Director = form.Director.value;
    const Poster_Link = form.Poster_Link.value;
    const Genre = form.Genre.value;
    const Overview = form.Overview.value;
    const Runtime = form.Runtime.value;
    

    const updateMovieObj = {
      Series_Title, Director, Poster_Link, Genre, Overview, Runtime
    }

    console.log(updateMovieObj)

    // send data to db

    fetch("http://localhost:5000/movie/:id", {
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(updateMovieObj)
    }).then(res => res.json()).then(data => {
         console.log(data)
        alert("movie updated successfully!!!")
        form.reset();
    })
};
return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update A movie</h2>

        <form onSubmit={handleMovieUpdate}className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
            {/* first row */}
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label 
                            htmlFor="Series_Title" 
                            value="Series_Title" 
                        />
                    </div>
                    <TextInput 
                        id="Series_Title" 
                        name='Series_Title'
                        type="text" 
                        placeholder="Movie name" 
                        required 
                    />
                </div>

                {/* authorName */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label 
                            htmlFor="Director" 
                            value="Director" 
                        />
                    </div>
                    <TextInput 
                        id="Director" 
                        name='Director'
                        type="text" 
                        placeholder="Director Name" 
                        required 
                    />
                </div>
            </div>

            {/* 2nd Row */}
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                        <Label 
                            htmlFor="Poster_Link" 
                            value="Poster_Link" 
                        />
                    </div>
                    <TextInput 
                        id="Poster_Link" 
                        name='Poster_Link'
                        type="text" 
                        placeholder="Poster image URL" 
                        required 
                    />
                </div>

                {/* Category */}
                <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                    <Label 
                            htmlFor="Genre" 
                            value="Genre" 
                        />
                    </div>
                    <TextInput 
                        id="Genre" 
                        name='Genre'
                        type="text" 
                        placeholder="Movie Genre" 
                        required 
                    />

                </div>
            </div>

            {/* bookDescription */}
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="Overview"
                        value="Overview"
                    />
                </div>
                <Textarea
                    id="Overview"
                    name="Overview"
                    placeholder="Write your movie overview..."
                    required
                    className='w-full'
                    rows={6}
                />   
            </div>

            
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="Runtime"
                        value="Runtime"
                    />
                </div>
                <TextInput
                    id="Runtime"
                    name='Runtime'
                    placeholder="Movi runtime"
                    required
                    type="text"
                />
                  </div>
            

            <Button type="submit" className='mt-5 text-black'>
                Update Movie
            </Button>

        </form>
    </div>
)
}

export default EditMovie
