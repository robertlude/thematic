'use client'

/// External Dependencies

import React, {
  createContext,
  useContext,
  ReactNode,
} from 'react'

/// Internal Dependencies

import {
  Theme,
  createTheme,
} from './Theme/index'

/// Component

type ThemeContextType = {
  theme: Theme
}

const ThemeContext = createContext<ThemeContextType>({
  theme: createTheme({
    name: '',
    key:  '',
  }),
})

const ThemeProvider = ({
  children,
  theme,
}: {
  children: ReactNode
  theme:    Theme
}) => {
  return (
    <ThemeContext.Provider value={{theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) 

export default ThemeProvider