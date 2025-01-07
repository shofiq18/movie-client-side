import React, { useEffect, useState } from 'react';
import Feature from './Feature';
import { Link } from 'react-router-dom';

const FeaturesMovies = () => {

    const [movies, setMovies] = useState([])
    console.log(movies);


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("https://movie-portal-server-sigma.vercel.app/movie/top");
                const data = await response.json();
                setMovies(data); // Set the state with the fetched movies
            } catch (error) {
                console.error("Failed to fetch movies", error);
            }
        };

        fetchMovies();
    }, []);





    return (
        <div >

           <div className='max-w-7xl mx-auto px-8 md:px-0 '>
           <h1 className="  font-bold text-xl  md:text-4xl   mt-8 md:my-12"> Our Featured Movies  </h1>

           </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 my-12 max-w-7xl mx-auto gap-5 ">
                {
                    movies?.map(movie => (<Feature key={movie._id} movie={movie}></Feature>))
                }
            </div>

            <div className="text-center my-16"> 
                    <Link to='/movies'><button type="submit" className="btn md:px-10  rounded-full border-red-700  bg-black text-white hover:bg-red-700 hover:text-black ">See All Movies</button>
                    </Link>
                </div>


        </div>
    );
};

export default FeaturesMovies;





