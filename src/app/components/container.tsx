import React, { useContext, useEffect } from 'react'
import Footer from './footer'
import Hero from './hero'
import Navbar from './navbar'
import { ThemeContextType, ThemeContext } from './context/themeContextProvider'

export const Container = () => {
    const [theme, setTheme]: ThemeContextType = useContext(ThemeContext);

    /**
     * Initializing the theme for the first time load
     */
    useEffect(() => {
        // if a user has a theme selected
        const selectedTheme: string | null = localStorage.getItem("theme");

        if (selectedTheme) {
            document.body.classList.add(selectedTheme);
            setTheme(selectedTheme);
            // if the user preferes to match with OS theme
        } else if (window.matchMedia("prefers-color-scheme: dark")) {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    }, []);
    
    return (
        <main className={theme}>
            <section className="bg-primary-bg text-primary-text items-center justify-between">
                <Navbar ></Navbar>
                <Hero></Hero>
                <Footer></Footer>
            </section>

        </main>
    )
}

export default Container