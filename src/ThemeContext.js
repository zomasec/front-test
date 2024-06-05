import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context object with a default shared structure
const ThemeContext = createContext({
    theme: 'dark', // default value
    toggleTheme: () => {} // empty function placeholder
});

// Custom hook for easy consumption of the context
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark'); // Default theme is dark

    // Effect to handle changes in theme
    useEffect(() => {
        // Update CSS variables when theme changes
        const root = document.documentElement;
        root.style.setProperty('--background-color', theme === 'dark' ? '#121212' : '#f0f0f0');
        root.style.setProperty('--text-color', theme === 'dark' ? '#ffffff' : '#333');
        root.style.setProperty('--nav-background-color', theme === 'dark' ? '#1a1a2e' : '#ffffff');
        root.style.setProperty('--link-color', theme === 'dark' ? '#e94560' : '#007bff');
    }, [theme]); // Dependency array to ensure effect runs only when theme changes

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
    };

    // Provide the theme context to children
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
