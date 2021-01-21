import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from '@rollup/plugin-json'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import { terser } from 'rollup-plugin-terser'

export default {
    input: '3rd-party/xmldom.src.js',
    output: {
        file: '3rd-party/xmldom.dist.js',
        format: 'cjs'
    },
    plugins: [
        resolve({
            mainFields: ['module', 'main'],
            browser: true,
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        commonjs(),
        json(),
        builtins(),
        globals(),
        terser()
    ],
}
