import { Link, useLoaderData } from "react-router-dom";
import AllMovie from "./AllMovie";


const AllMovies = () => {
    const movies = useLoaderData();
    return (
        <div>
            
            <h1>This is all movies page </h1>
            <h1>total movies : {movies.length}</h1>
            {
                movies.map(movie => (<AllMovie key={movie._id}  movie={movie}></AllMovie>) )
            }
            
            
        </div>
    );
};

export default AllMovies;