import ts from 'rollup-plugin-ts'
import { terser } from 'rollup-plugin-terser'


export  default {
    input: 'src/index.ts',
    plugins: [
        ts({tsconfig: './tsconfig.json'}),
        terser()
    ],
    output: [
        {
            file: 'dist/index.js',
            format: 'umd',
            name: 'XieConsole',
            exports: 'named',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm'
        }
    ]
}