'use client'
import { useEffect } from "react";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {

  useEffect(() => {
    // if a user has a theme selected
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme) {
      document.body.classList.add(selectedTheme);
      // if the user preferes to match with OS theme
    } else if (window.matchMedia("prefers-color-scheme: dark")) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }

  }, []);

  return (
    <main className="{`${stringOfMoreClasses}`} bg-primary-bg text-primary-text lex flex-col items-center justify-between">
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </main>
  );
}
