/// Internal Dependencies

import type {
  Theme,
  ThemeComponent,
  ThemeComponentTypeDefinition,
  ThemeComponentValue,
  ThemeHeaders,
  ThemeHeadersValue,
  ThemeStyle,
} from './types'

/// Helper Functions

function createThemeComponent(value: ThemeComponentValue): ThemeComponent {
  if (typeof value === 'string') {
    return {
      className: value,
      style:     {},
    }
  }

  const style: ThemeStyle = {...value}

  delete style.className

  return {
    className: value.className ?? '',
    style:     style,
  }
}

function combineThemeComponents(a: ThemeComponentValue, b: ThemeComponentValue): ThemeComponent {
  const componentA = createThemeComponent(a)
  const componentB = createThemeComponent(b)

  return {
    className: `${componentA.className} ${componentB.className}`,
    style:     {...componentA.style, ...componentB.style},
  }
}

function getHeaders(header: ThemeHeadersValue): ThemeHeaders {
  if (typeof header === 'object' && 'common' in header) {
    return {
      h1: combineThemeComponents(header.common, `text-6xl ${header.h1 ?? ''}`),
      h2: combineThemeComponents(header.common, `text-5xl ${header.h2 ?? ''}`),
      h3: combineThemeComponents(header.common, `text-4xl ${header.h3 ?? ''}`),
      h4: combineThemeComponents(header.common, `text-3xl ${header.h4 ?? ''}`),
      h5: combineThemeComponents(header.common, `text-2xl ${header.h5 ?? ''}`),
      h6: combineThemeComponents(header.common, `text-xl ${header.h6 ?? ''}`),
    }
  }

  return {
    h1: combineThemeComponents(header, 'text-6xl'),
    h2: combineThemeComponents(header, 'text-5xl'),
    h3: combineThemeComponents(header, 'text-4xl'),
    h4: combineThemeComponents(header, 'text-3xl'),
    h5: combineThemeComponents(header, 'text-2xl'),
    h6: combineThemeComponents(header, 'text-xl'),
  }
}
/// Functions

export function createTheme(
  {
    name,
    key,

    body   = '',
    button = '',
    link   = '',
    panel  = '',

    header = '',

    componentTypes = undefined,

    custom = {},
  }: {
    name: string
    key:  string

    body?:   ThemeComponentValue
    button?: ThemeComponentValue
    link?:   ThemeComponentValue
    panel?:  ThemeComponentValue

    header?: ThemeHeadersValue

    componentTypes?: undefined |{
      Link?: ThemeComponentTypeDefinition
    }

    custom?: Record<string, any>
  }
): Theme {
  return {
    name,
    key,

    body:   createThemeComponent(body),
    button: createThemeComponent(button),
    link:   createThemeComponent(link),
    panel:  createThemeComponent(panel),

    ...getHeaders(header),

    componentTypes: {
      Link: componentTypes?.Link ?? 'a',
    },

    custom,
  }
}