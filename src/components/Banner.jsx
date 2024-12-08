import { AiFillCaretRight } from "react-icons/ai";
import { LuClock5 } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";

const Banner = () => {
    return (
        <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="carousel w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px]"
        >
            <div id="slide1" className="carousel-item relative w-full">
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src="https://i.ibb.co.com/px71mqY/main.jpg"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-cover transform scale-110 transition-transform duration-700 ease-out hover:scale-100"
                    />
                </div>
                <div className="absolute left-4 right-4 md:left-20 md:right-20 lg:left-80 lg:right-5 top-1/2 -translate-y-1/2 transform space-y-3">
                    <p className="text-lg sm:text-2xl font-bold text-red-600">Movie Portal</p>
                    <p className="text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug">
                        Unlimited <span className="text-red-700">Movie</span>, TVs <br /> Shows, & More.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-gray-200">
                        <div className="border-2 font-bold w-10 flex justify-center text-white">HD</div>
                        <p>Romance, Drama</p>
                        <p className="inline-flex items-center gap-2"> <SlCalender /> 2024</p>
                        <p className="inline-flex items-center gap-1"> <LuClock5 /> 128 min </p>
                    </div>
                    <div className="pt-4">
                        <button className="btn bg-black text-white border-red-700 hover:bg-red-700 hover:text-black rounded-full px-6 inline-flex items-center">
                            <AiFillCaretRight /> WATCH NOW
                        </button>
                    </div>
                </div>
                <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src="https://i.ibb.co.com/prnMB3k/Fast-Furious-7-Movie-2015-HD-Desktop-Wallpaper-08-1680x1050.jpg"
                        className="w-full h-full object-cover transform scale-110 transition-transform duration-700 ease-out hover:scale-100"
                    />
                </div>
                <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src="https://i.ibb.co.com/HFdqdQX/banner.webp"
                        className="w-full h-full object-cover transform scale-110 transition-transform duration-700 ease-out hover:scale-100"
                    />
                </div>
                <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src="https://i.ibb.co.com/k096YKS/Large-3909.jpg"
                        className="w-full h-full object-cover transform scale-110 transition-transform duration-700 ease-out hover:scale-100"
                    />
                </div>
                <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
