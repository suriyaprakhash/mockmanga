import React, { useEffect, useState } from 'react'

function Navbar({ initTheme, parentCallback }: any) {
    const [theme, setTheme] = useState(initTheme);

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
        <nav className="bg-secondary-bg text-secondary-text h-[100px] grid grid-cols-6 items-center">
            <div className="col-span-5 pl-16">Mock Manga</div>
            <div className="col-span-1 sm:pl-20">
                <button onClick={toggleTheme}>
                    {theme === 'light' ?
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun-filled" width="30" height="30" viewBox="0 0 30 15" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" strokeWidth="0" fill="currentColor" />
                                <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z" strokeWidth="0" fill="currentColor" />
                                <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" strokeWidth="0" fill="currentColor" />
                                <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" strokeWidth="0" fill="currentColor" />
                                <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" strokeWidth="0" fill="currentColor" />
                                <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z" strokeWidth="0" fill="currentColor" />
                                <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z" strokeWidth="0" fill="currentColor" />
                                <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" strokeWidth="0" fill="currentColor" />
                                <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" strokeWidth="0" fill="currentColor" />
                            </svg>

                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-toggle-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z" /></svg> */}
                        </div>
                        :
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon-filled" width="30" height="30" viewBox="0 0 30 15" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" strokeWidth="0" fill="currentColor" /> </svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-toggle-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M2 6m0 6a6 6 0 0 1 6 -6h8a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-8a6 6 0 0 1 -6 -6z" /></svg> */}
                        </div>
                    }

                </button>
            </div>
        </nav>
    )
}

export default Navbar