/// External Dependencies

import { ComponentType } from 'react'

/// Types

export type ThemeStyle = Record<string, any>

export type ThemeComponent = {
  className: string
  style:     ThemeStyle
}

export type ThemeComponentValue = string | ThemeComponent

export type ThemeHeadersValue = ThemeComponentValue | {
  common: ThemeComponentValue
  h1?:    ThemeComponentValue | undefined
  h2?:    ThemeComponentValue | undefined
  h3?:    ThemeComponentValue | undefined
  h4?:    ThemeComponentValue | undefined
  h5?:    ThemeComponentValue | undefined
  h6?:    ThemeComponentValue | undefined
}

export type ThemeHeaders = {
  h1: ThemeComponent
  h2: ThemeComponent
  h3: ThemeComponent
  h4: ThemeComponent
  h5: ThemeComponent
  h6: ThemeComponent
}

export type ThemeComponentType = ComponentType<any> | string

export type ThemeComponentTypeDefinition = ThemeComponentType | undefined

export type Theme = {
  name: string
  key:  string

  body:   ThemeComponent
  button: ThemeComponent
  panel:  ThemeComponent
  
  h1: ThemeComponent
  h2: ThemeComponent
  h3: ThemeComponent
  h4: ThemeComponent
  h5: ThemeComponent
  h6: ThemeComponent

  custom: any

  componentTypes: {
    Link: ThemeComponentType
  }
}