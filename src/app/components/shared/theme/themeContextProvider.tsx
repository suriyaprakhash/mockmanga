import { createContext, useState } from "react";

export type ThemeContextType = [string, React.Dispatch<React.SetStateAction<string>>]; 

export const ThemeContext = createContext<ThemeContextType>(['', () => null]);

export const ThemeContextProvider = ({children} : { children: React.ReactNode }) => {
    const [theme, setTheme]: ThemeContextType  = useState<string>('');
    return (
        <ThemeContext.Provider value={[theme, setTheme]} >
            {children}
        </ThemeContext.Provider>
    );
}
