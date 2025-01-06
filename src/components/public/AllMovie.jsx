import { Link } from "react-router-dom";

const AllMovie = ({ movie }) => {
  return (
    <div className="card card-compact px-8 md:px-0 shadow-lg relative group rounded-none">
      <figure>
        <img
          src={movie.poster}
          alt="poster"
          className="w-full h-[400px] transition-opacity duration-300 group-hover:opacity-20 rounded-none"
        />
      </figure>
      <div className="card-body p-4 bg-black rounded-none">

        <div className="flex justify-between gap-12">
          <h2 className="card-title text-xl text-gray-200 items-center">{movie.title}</h2>
        </div>
        <div className="flex justify-between">
          {/* Fixed Position for Duration */}
          <p className="text-sm text-gray-400 absolute bottom-20">{movie.duration} min</p>
        </div>

        <div className="card-actions opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link to={`/details/${movie._id}`}>
            <button className="px-4 py-2 bg-red-700 text-black my-2 hover:bg-black hover:border-red-700 hover:border hover:text-white rounded-none">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllMovie;
