// import { useLoaderData } from "react-router-dom";
// import AllMovie from "./AllMovie";


// const AllMovies = () => {
//     const movies = useLoaderData();
//     if (!Array.isArray(movies)) {
//         return <div>Error: Movies data is not available or not in an array format.</div>;
//     }
//     console.log(movies);
//     return (
//         <div >
            
//             <h1 className="text-white font-bold text-4xl text-center my-12"> Our All Movies  </h1>
            
//             <div className="grid md:grid-cols-3 my-12 max-w-7xl mx-auto gap-5 ">
//             {
//                 movies.map(movie => (<AllMovie key={movie._id}  movie={movie}></AllMovie>) )
//             }
//             </div>
            
            
//         </div>
//     );
// };

// export default AllMovies;

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllMovie from "./AllMovie";

const AllMovies = () => {
    const movies = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    if (!Array.isArray(movies)) {
        return <div>Error: Movies data is not available or not in an array format.</div>;
    }

    // Filter movies based on the search query
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h1 className="text-white font-bold text-5xl text-center my-12">Our All Movies</h1>
            
            {/* Search Input */}
            <div className="text-center mb-8">
                <input
                    type="text"
                    className="p-2  border  rounded-full w-1/3"
                    placeholder="Search movies by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            
            {/* Movies Grid */}
            <div className="grid md:grid-cols-3 my-12 max-w-7xl mx-auto gap-5">
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
