import React, { useState, useEffect } from 'react';
import "./theme.css"

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check if dark mode is already set in local storage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

    const handleThemeChange = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        // Set body class for dark mode
        if (newMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button className="theme-toggle-btn" onClick={handleThemeChange}>
            {isDarkMode ? (
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
                        d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M6.364 17.364l2.121-2.121M17.364 17.364l-2.121-2.121M6.364 6.364l2.121 2.121"
                    />
                </svg>
            ) : (
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
                        d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M6.364 17.364l2.121-2.121M17.364 17.364l-2.121-2.121M6.364 6.364l2.121 2.121"
                    />
                </svg>
            )}
        </button>
    );
};

export default ThemeToggle;
