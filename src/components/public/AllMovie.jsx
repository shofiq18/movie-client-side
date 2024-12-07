

const AllMovie = ({ movie }) => {
    
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={movie.poster}
                    alt="Shoes" className="w-full h-[400px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllMovie;