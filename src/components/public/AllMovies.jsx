import { useLoaderData } from "react-router-dom";
import AllMovie from "./AllMovie";


const AllMovies = () => {
    const movies = useLoaderData();
    if (!Array.isArray(movies)) {
        return <div>Error: Movies data is not available or not in an array format.</div>;
    }
    return (
        <div >
            
            <h1>This is all movies page </h1>
            <h1>total movies : {movies.length}</h1>
            <div className="grid md:grid-cols-3 my-12 max-w-7xl mx-auto gap-5 ">
            {
                movies.map(movie => (<AllMovie key={movie._id}  movie={movie}></AllMovie>) )
            }
            </div>
            
            
        </div>
    );
};

export default AllMovies;