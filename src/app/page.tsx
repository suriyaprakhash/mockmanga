'use client'
import { ThemeContextProvider } from "./components/shared/theme/themeContextProvider";
import Container from "./container";

export default function Home() {
  return (
    <ThemeContextProvider>
      <Container />
    </ThemeContextProvider>
  );
}
