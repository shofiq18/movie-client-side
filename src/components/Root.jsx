import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
 
import "./theme.css";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
         
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;