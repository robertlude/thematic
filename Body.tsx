'use client'

/// External Dependencies

import {
  ReactNode,
  RefObject,
} from 'react'

/// Internal Dependencies

// Contexts

import { useTheme } from './ThemeProvider'

/// Component

export default function Panel({
  children,
  className = '',
}: {
  children:   ReactNode
  className?: string
}) {
  const { theme } = useTheme()

  return <body className={`${theme.body} ${className}`}>
    {children}
  </body>
}