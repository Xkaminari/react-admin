import React, { useContext, useState } from "react"

export const tokens = (isDark) => ({
    ...(isDark === false ? {
        primary: "#FFF7EB",
        secondary: "#FAE8CD",
        text: "#AD9A7D",
        selectedText: "#8A7215"
    } : {
        primary: "#0F1E33",
        secondary: "#00060F",
        text: "#D2E0EA",
        selectedText: "#4246C7"
    })
})

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext)
}
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                <div className="app_grid">
                    {children}
                </div>
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}