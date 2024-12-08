import { useEffect, useState } from "react";

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
      <div className="bg-black">
        <div className="flex justify-end max-w-7xl mx-auto items-center  text-base-content">
        <button
          className="btn btn-primary"
          onClick={toggleTheme}
        >
           {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
      </div>
    );
};

export default ThemeToggle;