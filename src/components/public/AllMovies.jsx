

import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AllMovie from "./AllMovie";

const AllMovies = () => {
    const movies = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer); 
    }, []);

    if (!Array.isArray(movies)) {
        return <div>Error: Movies data is not available or not in an array format.</div>;
    }

    
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="flex min-h-screen justify-center items-center ">
                    <span className="loading loading-bars loading-lg"></span>

                </div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl text-center my-12">Our All Movies</h1>

           
            <div className="text-center mb-8">
                <input
                    type="text"
                    className="p-2 border rounded-full md:w-1/3"
                    placeholder="Search movies by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

           
            <div className="grid md:grid-cols-3 my-12 max-w-7xl mx-auto  gap-5">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                        <AllMovie key={movie._id} movie={movie}></AllMovie>
                    ))
                ) : (
                    <div className="text-white text-center col-span-3">
                        No movies found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllMovies;

