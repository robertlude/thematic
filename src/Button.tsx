'use client'

/// External Dependencies

import React, {
  MouseEvent,
  ReactNode,
  RefObject,
} from 'react'

/// Internal Dependencies

import { useTheme } from './ThemeProvider'

/// Component

export default function Button({
  children,

  className = '',
  onClick   = undefined,
  ref       = undefined,
}: {
  children: ReactNode

  className?: string
  onClick?:   (() => void) | undefined
  ref?:       RefObject<HTMLButtonElement> | undefined
}) {
  const { theme } = useTheme()

  return <button
    className={`cursor-pointer ${theme.button.className} ${className}`}
    onClick  ={() => onClick?.()}
    ref      ={ref}
    style    ={theme.button.style}
  >
    {children}
  </button>
}