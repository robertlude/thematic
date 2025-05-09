'use client'

/// External Dependencies

import React, {
  ReactNode,
  MouseEvent,
} from 'react'

/// Internal Dependencies

import { useTheme } from './ThemeProvider'

/// Component

export default function Button({
  children,
  className = '',
  onClick,
}: {
  children: ReactNode
  className?: string
  onClick?: (event: MouseEvent) => void
}) {
  const { theme } = useTheme()

  return <button
    className={`${theme.button.className} ${className}`}
    onClick  ={onClick}
    style    ={theme.button.style}
  >
    {children}
  </button>
}