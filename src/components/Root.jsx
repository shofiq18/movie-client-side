import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ThemeToggle></ThemeToggle>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;