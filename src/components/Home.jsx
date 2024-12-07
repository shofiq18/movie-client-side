import Banner from "./Banner";
import Family from "./Family";
import Mail from "./Mail";
import FeaturesMovies from "./public/FeaturesMovies";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturesMovies />
            <Family></Family>
            <Mail></Mail>
        </div>
    );
};

export default Home;