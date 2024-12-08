

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
    const detail = useLoaderData();
    const navigate = useNavigate();

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/movie/${_id}`, {
                    method: "DELETE"
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        }).then(() => {
                            navigate("/movies"); // Redirect to the movies page
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error deleting the movie:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "There was an error deleting the movie.",
                        icon: "error"
                    });
                });
            }
        });
    };

    return (
        <div>
            <h1 className="text-4xl font-bold text-white text-center mt-8 ">Movie Details</h1>
            
            <div className="max-w-4xl mx-auto my-16 card card-side  bg-gray-950 shadow-xl">
                <figure>
                    <img
                        src={detail.poster}
                        alt="Movie" className="w-full md:w-[350px] h-[400px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold text-white">Title: {detail.title}</h2>
                    <p> Genre: {detail.genre[0]}</p>
                    <p>Summary: {detail.summary}</p>
                    <p>ReleaseYear: {detail.releaseYear}</p>
                    <p>Duration: {detail.duration} min</p>
                    <p>Rating: {detail.rating}</p>
                    <div className="card-actions flex justify-between">
                        <button
                            onClick={() => handleDelete(detail._id)}
                            type="submit"
                            className="btn rounded-full border-red-700 mr-6 bg-black text-white hover:bg-red-700 hover:text-black">
                            Delete Movie
                        </button>
                        <button
                            type="submit"
                            className="btn rounded-full border-yellow-600 mr-6 bg-black text-white hover:bg-red-700 hover:text-black">
                            Add to Favorite
                        </button>
                             <Link to={`/update/${detail._id}`}><button
                            type="submit"
                            className="btn rounded-full border-green-700 bg-black text-white hover:bg-red-700 hover:text-black">
                            Update Movie
                        </button></Link>
                    </div>
                </div>
            </div>
            <div className="text-center mb-10">
                <Link to="/movies">
                    <button
                        type="submit"
                        className="btn rounded-full border-red-700 bg-red-800 text-black hover:bg-red-700 hover:text-black">
                        See All Movies
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Details;
