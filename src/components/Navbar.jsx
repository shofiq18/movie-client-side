import React, { useContext, useState } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Successfully logged out!");
            })
            .catch((error) => {
                toast.error("Error logging out. Please try again!");
            });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className="hover:text-red-500" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/movies" className="hover:text-red-500" onClick={closeMenu}>All Movies</NavLink>
            </li>
            <li>
                <NavLink to="/add" className="hover:text-red-500" onClick={closeMenu}>Add Movie</NavLink>
            </li>
            <li>
                <NavLink to="/favorites" className="hover:text-red-500" onClick={closeMenu}>My Favorites</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="hover:text-red-500" onClick={closeMenu}>Contact us</NavLink>
            </li>
        </>
    );

    return (
        <div data-aos="fade-down" className="sticky top-0 z-50 shadow-md  py-4">
            <div className="navbar max-w-7xl mx-auto flex items-center px-4 md:px-2">
                {/* Mobile Hamburger Menu */}
                <button
                    className="hamburger-menu lg:hidden"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </button>

                {/* Dropdown Menu for Mobile */}
                <div
                    className={`lg:hidden ${
                        isMenuOpen ? 'block' : 'hidden'
                    } absolute top-full left-0 w-full bg-gray-800 te z-50`}
                >
                    <div className="p-4 flex justify-between items-center">
                        <h3 className="text-lg font-bold">Menu</h3>
                        {/* Close Button */}
                        <button
                            onClick={closeMenu}
                            className="text-white hover:text-red-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <ul className="menu p-4 space-y-2 text-base">
                        {links}
                        {/* Dark/Light Mode Toggle for Mobile */}
                        <li>
                            <div className="flex items-center justify-between">
                                <span className="text-white">Toggle Theme</span>
                                <ThemeToggle />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="navbar-start flex items-center">
                    <Link to="/" className="text-xl md:text-3xl text-red-600 font-bold  ml-2">
                        Movie Portal
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4 text-base text-white">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end flex items-center space-x-4">
                    {/* User Profile or Icon */}
                    {user?.photoURL ? (
                        <div className="relative group">
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-10 h-10 rounded-full border-2  object-cover cursor-pointer"
                            />
                            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2rem] hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-lg">
                                {user.displayName}
                            </span>
                        </div>
                    ) : (
                        <FaUserCircle className="text-4xl text-white" />
                    )}

                    {/* Log In / Log Out Button */}
                    {user?.email ? (
                        <button
                            onClick={handleLogOut}
                            className="btn"
                        >
                            Log Out
                        </button>
                    ) : (
                        <Link to="/login">
                            <button className="login-btn">Log In</button>
                        </Link>
                    )}

                    {/* Theme Toggle Button for Desktop */}
                    <div className="hidden lg:block">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default Navbar;
