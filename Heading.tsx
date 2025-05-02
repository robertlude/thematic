/// External Dependencies

import { ReactNode } from 'react'

/// Internal Dependencies

// Contexts

import { useTheme } from '@/thematic/ThemeProvider'

/// Component

export default function Heading({
  children,
  className = '',
  level     = 1,
}: {
  children:   ReactNode
  className?: string
  level?:     number
}) {
  const { theme } = useTheme()

  switch (level) {
    case 1:
      return <h1 className={`${theme.h1} ${className}`}>{children}</h1>
    case 2:
      return <h2 className={`${theme.h2} ${className}`}>{children}</h2>
    case 3:
      return <h3 className={`${theme.h3} ${className}`}>{children}</h3>
    case 4:
      return <h4 className={`${theme.h4} ${className}`}>{children}</h4>
    case 5:
      return <h5 className={`${theme.h5} ${className}`}>{children}</h5>
    default:
      return <h6 className={`${theme.h6} ${className}`}>{children}</h6>
  }
}
