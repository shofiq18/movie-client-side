

const Mail = () => {
    return (
        <div className="  shadow-xl px-3 lg:px-0 py-14">
           <div className=" flex justify-between items-center max-w-7xl mx-auto ">
           <div className="  ">
                <h2 className="text-xl lg:text-3xl mb-3 text-gray-100 font-extrabold">TRIAL START FIRST 30 DAYS. </h2>
                <p>Enter Your email to create or restart your membership</p>

            </div>
            <div className="flex items-center border border-red-700  rounded-md overflow-hidden shadow-md">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow text-black pr-36 ps-3 py-4 outline-none bg-gray-200"
                />
                <button className="bg-red-700 text-black px-4 py-4 hover:bg-yellow-600">
                    GET STARTED
                </button>
            </div>
           </div>
        </div>
    );
};

export default Mail;