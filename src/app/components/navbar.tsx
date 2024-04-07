import React, { useEffect, useState } from 'react'

function Navbar({parentCallback}: any) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        setTheme(storedTheme || 'light');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        parentCallback(newTheme);
    };
    return (
        <nav className="bg-tertiary-bg text-tertiary-text h-[80px] w-screen grid grid-cols-6 items-center">
            <div className="border-2 border-tertiary-text col-span-4 sm:col-span-5 p-5">MockMango</div>
            <div className="border-2 border-tertiary-text col-span-2 sm:col-span-1 p-5">
                <button onClick={toggleTheme}>
                  Toggle {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar