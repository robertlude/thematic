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
  ref,
}: {
  children:   ReactNode
  className?: string
  ref?:       RefObject<HTMLDivElement | null>
}) {
  const { theme } = useTheme()

  return <div
    className={`${theme.panel} ${className}`}
    ref      ={ref}
  >
    {children}
  </div>
}