


const ContactUs = () => {
    return (
        <div>
            <div className="my-14  max-w-7xl mx-auto flex  items-center justify-center ">
                <p className="text-3xl md:text-4xl font-bold text-white border-b border-gray-600 ">Contact Us</p>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:flex  justify-center items-start max-w-7xl mx-auto   text-white md:p-8 gap-8">
            {/* Contact Form */}
            <div className="w-full md:w-2/3 p-8 border border-gray-800 ">
                <h2 className=" text-xl md:text-2xl font-bold mb-8">Contact Form</h2>
                <form className="space-y-4">
                    <div className="  md:flex justify-between  md:gap-6 ">
                    <div className="md:flex mb-3 flex-col md:w-[50%]">
                        <label htmlFor="name" className="mb-2">Your Name *</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="input input-bordered mt-2 md:mt-0 w-full bg-gray-900 text-white"
                        />
                    </div>
                    <div className="md:flex flex-col  md:w-[50%]">
                        <label htmlFor="email" className="mb-2">Your Email *</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className="input input-bordered mt-2 md:mt-0 w-full bg-gray-900 text-white"
                        />
                    </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="subject" className="mb-2">Subject *</label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Subject"
                            className="input input-bordered w-full bg-gray-900 text-white"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2">Message</label>
                        <textarea
                            id="message"
                            placeholder="Type Your Message..."
                            className="textarea textarea-bordered w-full h-36 bg-gray-900 text-white"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn  rounded-full border-red-700 bg-black text-white hover:bg-red-700 hover:text-black ">SEND MESSAGE</button>
                </form>
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-1/3 p-12 border border-gray-800 bg-gray-900 ">
                <h2 className="text-2xl font-bold mb-8">Information</h2>
                <p className="mb-4 border-b border-gray-700 pb-6 ">
                    Find solutions: <span className="text-gray-400"> to common problems, or get help from a support agent.</span>
                </p>
                <div className="space-y-4">
                    <div className="flex items-center border-b border-gray-700 pb-6 ">
                        <div className="text-yellow-400">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <p>Address: <span className="text-gray-400">W38 Park Road, New York</span></p>
                    </div>
                    <div className="flex items-center border-b border-gray-700  pb-6">
                        <div className="text-yellow-400">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <p>Phone: <span className="text-gray-400">(09) 123 854 365</span></p>
                    </div>
                    <div className="flex items-center border-b border-gray-700 pb-6">
                        <div className="text-yellow-400">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <p>Email: <span className="text-gray-400"> support@movieportal.com</span> </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;
