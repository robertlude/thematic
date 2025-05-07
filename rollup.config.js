/// External Dependencies

import commonjs from '@rollup/plugin-commonjs'
import resolve  from '@rollup/plugin-node-resolve'

import peerDepsExternal   from 'rollup-plugin-peer-deps-external'
import preserveDirectives from 'rollup-plugin-preserve-directives'
import typescript         from 'rollup-plugin-typescript2'
import { terser }         from 'rollup-plugin-terser'

/// Configuration

export default {
  input: [
    'src/Body.tsx',
    'src/Heading.tsx',
    'src/Panel.tsx',
    'src/Theme.ts',
    'src/ThemeProvider.tsx',
    'src/index.ts',
  ],
  output: [
    {
      dir:                 'dist/cjs',
      format:              'cjs',
      exports:             'named',
      sourcemap:           true,
      preserveModules:     true,
      preserveModulesRoot: 'src',
    },
    {
      dir:                 'dist/esm',
      format:              'esm',
      sourcemap:           true,
      preserveModules:     true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    preserveDirectives(),
    terser(),
  ],
}