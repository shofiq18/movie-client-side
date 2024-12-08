// import { useEffect, useState } from "react";

// const ThemeToggle = () => {
//     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//     useEffect(() => {
//       document.documentElement.setAttribute("data-theme", theme);
//       localStorage.setItem("theme", theme);
//     }, [theme]);
  
//     const toggleTheme = () => {
//       setTheme(theme === "light" ? "dark" : "light");
//     };
  
//     return (
//       <div className="bg-black">
//         <div className="flex justify-end max-w-7xl mx-auto items-center  text-base-content">
//         <button
//           className="btn btn-primary"
//           onClick={toggleTheme}
//         >
//            {theme === "light" ? "Dark" : "Light"} Mode
//         </button>
//       </div>
//       </div>
//     );
// };

// export default ThemeToggle;

import React, { useEffect, useState } from "react";
import "./theme.css"; // Import the CSS file

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme); // Apply theme globally
        localStorage.setItem("theme", theme); // Persist theme in localStorage
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
