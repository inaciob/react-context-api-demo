import React from 'react'

export const themes = {
    light: {},
    dark: {}
}

export const ThemeContext = React.createContext(themes.dark)
export const ThemeProvider = ThemeContext.Provider