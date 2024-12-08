

const Mail = () => {
    return (
        <div className="  shadow-xl px-3 md:px-5 lg:px-0 py-8 md:py-20">
           <div className=" md:flex justify-between  items-center max-w-7xl mx-auto ">
           <div className="mb-6 md:mb-0">
                <h2 className="text-xl lg:text-3xl mb-3  font-extrabold">TRIAL START FIRST 30 DAYS. </h2>
                <p>Enter Your email to create or restart your membership</p>

            </div>
            <div className="flex items-center border border-red-700  rounded-md overflow-hidden shadow-md">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow text-black md:px-0 py-2 md:py-4 md:px- outline-none bg-gray-200"
                />
                <button className="bg-black text-white border-red-700  hover:bg-red-700 hover:text-black  px-4 py-2 md:py-4 ">
                    GET STARTED
                </button>
            </div>
           </div>
        </div>
    );
};

export default Mail;