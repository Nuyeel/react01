import React, {useState} from "react";
import ThemeContext, { themes } from "./components/ThemeContext";

export default function Container({ children }) {
    const [theme, setTheme] = useState(themes.blue)

    return (
        <ThemeContext.Provider value={{...theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
