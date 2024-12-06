import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";


const MyFavorites = () => {
    return (
        <div>
            <h1>This is my My Favorites page </h1>

            <div className="flex justify-between px-6 py-4">
                <div className="flex">
                <Rating
                    placeholderRating={5}
                    readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                 />
                    <p className="text-gray-700 ml-1">5</p>

                </div>
                <Link to='/'><button className="bg-[#f5beb0] hover:bg-[rgb(231,161,144)] text-gray-700 font-bold py-2 px-4 rounded-full">
                View Details
                </button></Link>
            </div>
        </div>
    );
};

export default MyFavorites;