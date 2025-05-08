/// Module

export default class Theme {
  /// Private Properties

  private readonly _header: {
    common: string
    h1:     string
    h2:     string
    h3:     string
    h4:     string
    h5:     string
    h6:     string
  }

  /// Public Properties

  readonly name: string
  readonly key:  string

  readonly custom: any

  readonly body:   string
  readonly button: string
  readonly panel:  string

  get h1() { return `${this._header.common} ${this._header.h1}` }
  get h2() { return `${this._header.common} ${this._header.h2}` }
  get h3() { return `${this._header.common} ${this._header.h3}` }
  get h4() { return `${this._header.common} ${this._header.h4}` }
  get h5() { return `${this._header.common} ${this._header.h5}` }
  get h6() { return `${this._header.common} ${this._header.h6}` }

  /// Constructor

  constructor(
    {
      name,
      key,

      body   = '',
      button = '',
      panel  = '',

      header = '',

      custom = {},
    }: {
      name: string
      key:  string

      body?:   string
      button?: string
      panel?:  string

      header?: string | {
        common: string
        h1?:    string | undefined
        h2?:    string | undefined
        h3?:    string | undefined
        h4?:    string | undefined
        h5?:    string | undefined
        h6?:    string | undefined
      }

      custom?: Record<string, any>
    }
  ) {
    this.name = name
    this.key  = key

    this.body   = body
    this.button = button
    this.panel  = panel

    if (typeof header === 'string') {
      this._header = {
        common: header,
        h1:     'text-6xl',
        h2:     'text-5xl',
        h3:     'text-4xl',
        h4:     'text-3xl',
        h5:     'text-2xl',
        h6:     'text-xl',
      }
    } else {
      this._header = {
        common: header.common,
        h1:     header.h1 ?? 'text-6xl',
        h2:     header.h2 ?? 'text-5xl',
        h3:     header.h3 ?? 'text-4xl',
        h4:     header.h4 ?? 'text-3xl',
        h5:     header.h5 ?? 'text-2xl',
        h6:     header.h6 ?? 'text-xl',
      }
    }

    this.custom = custom
  }
}
