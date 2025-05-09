'use client'

/// External Dependencies

import React, {
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
  ref       = undefined,
}: {
  children: ReactNode

  className?: string
  ref?:       RefObject<HTMLBodyElement> | undefined
}) {
  const { theme } = useTheme()

  return <body
    className={`${theme.body.className} ${className}`}
    style    ={theme.body.style}
    ref      ={ref}
  >
    {children}
  </body>
}