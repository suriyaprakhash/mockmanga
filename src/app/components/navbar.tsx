import React, { useEffect, useState } from 'react'

function Navbar({ parentCallback }: any) {
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
            <div className="col-span-5 pl-16">MockMango</div>
            <div className="col-span-1 sm:pl-20">
                <button onClick={toggleTheme}>
                    {/* {theme === 'light' ? 'Dark Mode' : 'Light Mode'} */}
                    {theme === 'light' ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-toggle-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-toggle-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z" /></svg>}

                </button>
            </div>
        </nav>
    )
}

export default Navbar