import { MdCalendarMonth } from "react-icons/md";

import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";



const AllMovie = ({ movie }) => {

    return (
        <div className="card card-compact bg-gray-950 w-96  shadow-lg">
            <figure>
                <img
                    src={movie.poster}
                    alt="poster" className="w-full h-[400px]" />
            </figure>
            <div className="card-body p-4">

                <h2 className="card-title text-2xl text-white items-center">{movie.title}</h2>
                <p className="border-b border-gray-800 pb-3">{movie.genre[0]}</p>
                <div className="flex justify-between  ">
                    <p className="flex gap-2 text-base items-center"><MdCalendarMonth /> {movie.releaseYear}</p>
                    <p className="text-base">Duration: {movie.duration} min</p>
                </div>

                <ReactStars
                    count={movie.rating}
                    // onChange={ratingChanged}
                    size={24}
                    // activeColor="#ffd700"
                    color={"#ffd700"}
                />,


                <span className="text-base">Rating: {movie.rating}</span>
                <div className="card-actions ">
                    <Link to={`/details/${movie._id}`}> <button className="px-3 py-2 bg-red-700 text-black  my-2 hover:bg-black hover:border-red-700 hover:border hover:text-white  ">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllMovie;