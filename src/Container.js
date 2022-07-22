import React from "react";
import ThemeContextProvider from "./components/ThemeContextProvider";

export default function Container({ children }) {
    return (
        <ThemeContextProvider>
            {children}
        </ThemeContextProvider>
    );
}
