'use client'

/// External Dependencies

import React, {
  ComponentType,
  ReactNode,
  RefObject,
} from 'react'

/// Internal Dependencies

import { useTheme } from './ThemeProvider'

/// Module

export default function Link({
  children,
  href,

  className = '',
  ref       = undefined,
}: {
  children: ReactNode
  href:     string

  className?: string
  ref?:       RefObject<ComponentType<any>> | undefined
}) {
  const { theme } = useTheme()

  return <theme.componentTypes.Link
    className={`hover:underline ${theme.link.className} ${className}`}
    href     ={href}
    ref      ={ref}
    style    ={theme.link.style}
  >
    {children}
  </theme.componentTypes.Link>
}


