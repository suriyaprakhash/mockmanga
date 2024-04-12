import React, { useContext, useEffect } from 'react'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import { ThemeContextType, ThemeContext } from './components/shared/theme/themeContextProvider'

export const Container = () => {
    const [theme, ]: ThemeContextType = useContext(ThemeContext);

    /**
     * Initializing the theme
     */
    useEffect(() => {
        // if a user has a theme selected
        const selectedTheme: string | null = localStorage.getItem("theme");

        if (selectedTheme) {
            document.body.classList.add(selectedTheme);
            // if the user preferes to match with OS theme
        } else if (window.matchMedia("prefers-color-scheme: dark")) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    }, []);
    
    return (
        <main className={theme}>
            <section className="bg-primary-bg text-primary-text lex flex-col items-center justify-between">
                <Navbar ></Navbar>
                <div>{theme}</div>
                <Hero></Hero>
                <Footer></Footer>
            </section>

        </main>
    )
}

export default Container