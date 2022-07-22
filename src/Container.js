import React from "react";
import ThemeContextProvider from "./components/ThemeContextProvider";
import AuthContextProvider from "./components/AuthContextProvider";

export default function Container({ children }) {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>{children}</AuthContextProvider>
        </ThemeContextProvider>
    );
}
