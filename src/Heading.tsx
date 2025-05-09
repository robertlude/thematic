'use client'

/// External Dependencies

import React, {
  ReactNode,
  RefObject,
} from 'react'

/// Internal Dependencies

// Contexts

import { useTheme } from './ThemeProvider'

/// Types

type HeadingTagValue = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

/// Component

export default function Heading({
  children,

  className = '',
  level     = 1,
  ref       = undefined,
}: {
  children: ReactNode

  className?: string
  level?:     number
  ref?:       RefObject<HTMLHeadingElement> | undefined
}) {
  const { theme } = useTheme()

  if (typeof level !== 'number') {
    throw new Error('Level must be a number')
  }

  if (level < 1 || level > 6) {
    throw new Error('Level must be between 1 and 6')
  }

  if (Math.floor(level) !== level) {
    throw new Error('Level must be an integer')
  }

  const HeadingTag: HeadingTagValue = `h${level}` as HeadingTagValue

  return <HeadingTag
    className={`${theme[HeadingTag].className} ${className}`}
    style    ={theme[HeadingTag].style}
    ref      ={ref}
  >
    {children}
  </HeadingTag>
}