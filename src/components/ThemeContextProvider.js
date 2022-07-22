import React, { useState } from "react";
import ThemeContext, { themes } from "./ThemeContext";

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState(themes.blue);
    return (
        <ThemeContext.Provider value={{ ...theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
