

const Banner = () => {
    return (
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="carousel w-full h-[400px] lg:h-[600px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/qy3PFgM/hq720.jpg"
              className="w-full  "
            />
           
            <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/prnMB3k/Fast-Furious-7-Movie-2015-HD-Desktop-Wallpaper-08-1680x1050.jpg"
              className="w-full "
            />
            
            <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/HFdqdQX/banner.webp"
              className="w-full "
            />
           
            <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co.com/k096YKS/Large-3909.jpg"
              className="w-full"
            />
            
            <div className="absolute left-2 right-2 lg:left-5 lg:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      );
};

export default Banner;