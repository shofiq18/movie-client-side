
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Login = () => {
    const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate("/");
            })
            .catch((error) => console.log("Error", error.message));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError({ ...error, login: err.code });
            });
    };

    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="flex justify-center items-center  my-12">
            <div className="hero-content flex-col border border-gray-50">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card  lg:w-[500px] py-6 mt-6 shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered bg-gray-900"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                className="input input-bordered bg-gray-900"
                                required
                            />
                            {error.login && (
                                <label className="label text-red-500">{error.login}</label>
                            )}

                            <label className="label">
                                <Link to={`/reset?email=${encodeURIComponent(email)}`} className="label-text-alt link link-hover">
                                    Forgot password?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  bg-black border-red-700 text-white hover:bg-red-700 hover:text-black">Login</button>
                        </div>
                    </form>
                    <p className="text-center">or</p>
                    <div className="form-control mt-4 px-8">
                        <button
                            onClick={handleGoogle}
                            className="btn font-normal bg-black border-green-300"
                        >
                            <span className="mr-4 text-xl">
                                <FcGoogle />
                            </span>
                            Login with Google
                        </button>
                    </div>
                    <p className="ml-4 mt-4 text-base text-center text-gray-500">
                        Don't have an Account?{" "}
                        <Link className="text-red-600 border-b ml-4" to="/register">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
