

import React, { useEffect, useState } from "react";
import "./theme.css"; 

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme); 
        localStorage.setItem("theme", theme); 
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="flex justify-end p-4">
            <button
                className={`btn ${theme === "light" ? "btn-light" : "btn-dark"}`}
                onClick={toggleTheme}
            >
                {theme === "light" ? "Dark" : "Light"} Mode
            </button>
        </div>
    );
};

export default ThemeToggle;
