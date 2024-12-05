import { AiFillCaretRight } from "react-icons/ai";


const Family = () => {
    return (
        <div className="bg-white py-12 ">
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-6">
                <div className="space-y-3">
                    <p className="text-sm text-red-400">ONLINE STREAMING</p>
                    <h3 className="text-4xl font-extrabold text-black ">Live Movie & TV Shows <br /> For Friends & Family</h3>
                    <p className="text-sm text-gray-600 pt-4">Family and Friends Live is a heartwarming TV show that <br /> celebrates  the unique bonds between loved ones through <br /> fun games,
                        emotional stories, and surprise reunions.</p>
                    <div className="flex items-center gap-8 ">
                        <p className="text-5xl text-yellow-500 font-extrabold">HD 4K</p>
                        <div>
                            <span className="text-3xl text-black font-extrabold">20K+</span>
                            <p className="text-black font-bold ">Active Customer </p>
                        </div>
                    </div>
                        <div className="pt-4">
                        <button className="btn  bg-red-700  rounded-full px-6   btn-secondary"><AiFillCaretRight /> WATCH NOW </button>

                        </div>


                </div>
                <div>
                    <img src="https://i.ibb.co.com/4m5wS3M/section-image.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Family;