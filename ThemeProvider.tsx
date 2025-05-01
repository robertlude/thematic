'use client'

/// External Dependencies

import {
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from 'react'

/// Internal Dependencies

import Theme from './Theme'

/// Component

type ThemeContextType = {
  theme:    Theme
  themeKey: string
}

const ThemeContext = createContext<ThemeContextType>({
  theme: new Theme({
    name: '',
    key:  '',
  }),
  themeKey: '',
})

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: ReactNode
  theme:    Theme
}) => {
  useEffect(() => {
    document.body.className = theme.body
  }, [theme])

  return (
    <ThemeContext.Provider value={{
      theme,
      themeKey: theme.key,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) 