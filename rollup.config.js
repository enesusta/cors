import resolve from '@rollup/plugin-node-resolve'
import { terser } from "rollup-plugin-terser";

import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
    ],
    plugins: [
      resolve(),
      terser()
    ]
  }
];
