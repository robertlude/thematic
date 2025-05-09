/// External Dependencies

import type { ComponentType } from 'react'

/// Module

export type ConfigComponent = ComponentType | undefined

export type ConfigType = {
  components: {
    Link: ConfigComponent,
  },
}

export default {
  components: {
    Link: undefined,
  },
}