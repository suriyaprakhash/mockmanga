'use client'
import { ThemeContextProvider } from "./components/context/themeContextProvider";
import Container from "./components/container";

export default function Home() {
  return (
    <ThemeContextProvider>
      <Container />
    </ThemeContextProvider>
  );
}
