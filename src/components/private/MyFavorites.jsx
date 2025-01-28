

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const FavoriteMovies = () => {
    const [favorites, setFavorites] = useState([]);
    const userEmail = "shafiqul.islam25021998@gmail.com"; // Replace with logged-in user's email

    useEffect(() => {
        fetch(`https://movie-portal-server-sigma.vercel.app/favorites?email=${userEmail}`)
            .then((res) => res.json())
            .then((data) => setFavorites(data))
            .catch((err) => console.error("Error fetching favorites:", err));
    }, []);

    const handleDeleteFavorite = (id) => {
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
                fetch(`https://movie-portal-server-sigma.vercel.app/favorites/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "The movie has been removed from your favorites.", "success");
                            setFavorites(favorites.filter((movie) => movie._id !== id));
                        }
                    })
                    .catch((err) => console.error("Error deleting favorite movie:", err));
            }
        });
    };


    return (
        <div className="container mx-auto my-8">
            <h1 className="text-4xl font-bold text-center mb-6">My Favorite Movies</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {favorites.map((movie) => (
                    <div key={movie._id} className="card bg-gray-950 text-white shadow-lg">
                        <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold">{movie.title}</h2>
                            <p>Genre: {movie.genre.join(", ")}</p>
                            <p>Duration: {movie.duration} min</p>
                            <p>Release Year: {movie.releaseYear}</p>
                            <p>Rating: {movie.rating}</p>
                            <button
                                onClick={() => handleDeleteFavorite(movie._id)}
                                className="btn mt-4 w-full bg-red-700 text-white hover:bg-red-900"
                            >
                                Delete Favorite
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoriteMovies;
