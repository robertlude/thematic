'use client'

/// External Dependencies

import React, {
  ChangeEvent,
  ReactNode,
  RefObject,
} from 'react'

/// Internal Dependencies

import { useTheme } from './ThemeProvider'

/// Component

export default function InputText({
  className = '',
  onChange  = undefined,
  ref       = undefined,
  rows      = 1,
  value     = '',
}: {
  className?: string
  onChange?:  ((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined
  ref?:       RefObject<any> | undefined
  rows?:      number
  value?:     string
}) {
  const { theme } = useTheme()

  if (rows > 1) {
    return <textarea
      className={`${theme.input.text.className} ${className}`}
      onChange ={onChange}
      ref      ={ref}
      rows     ={rows}
      style    ={theme.input.text.style}
      value    ={value}
    />
  }

  return <input
    className={`${theme.input.text.className} ${className}`}
    onChange ={onChange}
    ref      ={ref}
    style    ={theme.input.text.style}
    value    ={value}
  />
}