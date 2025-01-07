



import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './rating.css'
import { AuthContext } from '../Provider/AuthProvider';

const AddMovie = ({ userEmail, onAddMovie }) => {
    const {user} = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
        // other logic
    };


    const onSubmit = (data) => {

        if (rating < 1) {
            toast.error("Please provide a rating.");
            return;
        }
        // Check if user is logged in
        if (!user?.email) {
            toast.error("You must be logged in to add a movie.");
            return;
        }

        // Format the data
        const movieData = {
            poster: data.poster,              
            title: data.title,                
            genre: [data.genre],              
            duration: Number(data.duration),  
            releaseYear: Number(data.releaseYear), 
            rating,                           
            summary: data.summary,            
            email: user.email,              
        };

        // Simulate saving to a database
        toast.success("Movie added successfully!");
        console.log("Movie Data:", movieData);

        if (onAddMovie) onAddMovie(movieData); 

        // send data to server 

        fetch('https://movie-portal-server-sigma.vercel.app/movie', {
            method: 'POST', 
            headers: {
                'content-type' :  'application/json'
            }, 
            body: JSON.stringify(movieData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            } )
            .catch(error => {
                console.error('Error adding movie:', error);
            });





    };


    return (
        <div className="add-movie-form  my-8">
            <h2 className='text-3xl text-white font-bold text-center my-12'>Add Movie</h2>
            <div className='border max-w-3xl mx-auto  p-8  '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Movie Poster */}
                    {user?.email && (<p>{user.email}</p>)}

                    <div className="flex flex-col my-6">
                        <label htmlFor="poster" className='mb-2'>Movie Poster (URL)</label>
                        <input
                            type="url"
                            id="poster"
                            placeholder="Poster-URL"
                            className="input input-bordered w-full bg-gray-900 text-white"
                            {...register('poster', {
                                required: 'Movie poster is required',
                                pattern: {
                                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i,
                                    message: 'Please provide a valid image URL',
                                },
                            })}
                        />
                        {errors.poster && <p className="error">{errors.poster.message}</p>}
                    </div>

                    {/* Movie Title */}
                    <div className="flex flex-col my-6">
                        <label htmlFor="title" className='mb-2'>Movie Title</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Title"
                            className="input input-bordered w-full bg-gray-900 text-white"
                            {...register('title', {
                                required: 'Movie title is required',
                                minLength: {
                                    value: 2,
                                    message: 'Title must have at least 2 characters',
                                },
                            })}
                        />
                        {errors.title && <p className="error">{errors.title.message}</p>}
                    </div>

                    {/* Genre */}
                    <div className="flex flex-col my-6">
                        <label htmlFor="genre" className='mb-2'>Genre</label>
                        <select id="genre"
                            className="input input-bordered w-full bg-gray-900"
                            {...register('genre', { required: 'Genre is required' })}>
                            <option value="">Select Genre</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="horror">Horror</option>
                            <option value="action">Action</option>
                        </select>
                        {errors.genre && <p className="error">{errors.genre.message}</p>}
                    </div>

                    {/* Duration */}
                    <div className='flex flex-col mt-6'>
                        <label htmlFor="duration" >Duration (minutes)</label>
                        <input
                            type="number"
                            id="duration"
                            placeholder="Set Duration"
                            className="input input-bordered w-full bg-gray-900 text-white mb-6 mt-2"
                            {...register('duration', {
                                required: 'Duration is required',
                                validate: (value) => value > 60 || 'Duration must be greater than 60 minutes',
                            })}
                        />
                        {errors.duration && <p className="error">{errors.duration.message}</p>}
                    </div>

                    {/* Release Year */}
                    <div className='flex flex-col'>
                        <label htmlFor="releaseYear" className='mt-8'>Release Year</label>
                        <select id="releaseYear"
                            className="input input-bordered w-full bg-gray-900 mb-6 mt-2 "
                            {...register('releaseYear', { required: 'Release year is required' })}>
                            <option value="">Select Year</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                        {errors.releaseYear && <p className="error">{errors.releaseYear.message}</p>}
                    </div>
                    {/* Summary */}
                    <div className='flex flex-col'>
                        <label htmlFor="summary">Summary</label>
                        <textarea
                            id="summary"
                            placeholder="write here"
                            className="input input-bordered w-full h-28 bg-gray-900 text-white mt-2"
                            {...register('summary', {
                                required: 'Summary is required',
                                minLength: {
                                    value: 10,
                                    message: 'Summary must have at least 10 characters',
                                },
                            })}
                        />
                        {errors.summary && <p className="error">{errors.summary.message}</p>}
                    </div>

                    {/* Rating */}
                
                    <div className="py-4  my-auto">
                        <div className="">
                            <div className="rating">
                                {[1, 2, 3, 4, 5].map((rate) => (
                                    <span
                                        key={rate}
                                        className={`star ${rating >= rate ? 'active' : ''}`}
                                        onClick={() => handleRating(rate)}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p>Rating: {rating}</p>
                        </div>
                    </div>


                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button className="btn  bg-black border-red-700 text-white hover:bg-red-700 hover:text-black">Add Movie</button>
                    </div>
                </form>
            </div>
            <ToastContainer />

        </div>
    );
};

export default AddMovie;
