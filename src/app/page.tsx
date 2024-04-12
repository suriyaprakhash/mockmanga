'use client'
import { useEffect, useState } from "react";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {

  // here don't init the theme, it will be set in the useEffects
  const [theme, setTheme] = useState<string>();

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

  }, [theme]);

  return (
    <main className={theme}>
      <section className="bg-primary-bg text-primary-text lex flex-col items-center justify-between">
        <Navbar parentCallback={setTheme}></Navbar>
        <Hero></Hero>
        <Footer></Footer>
      </section>
    </main>
  );
}
