'use client'

/// External Dependencies

import React, {
  ReactNode,
} from 'react'

/// Internal Dependencies

import { useTheme } from './ThemeProvider'

/// Module

export default function Link({
  children,
  className = '',
  href,
}: {
  children:   ReactNode,
  className?: string,
  href:       string,
}) {
  const { theme } = useTheme()

  return <theme.componentTypes.Link
    className={className}
    href     ={href}
  >
    {children}
  </theme.componentTypes.Link>
}


