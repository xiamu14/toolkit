import typescript from 'rollup-plugin-typescript2';
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    output: [
      {
        name: pkg.name,
        file: pkg.main,
        format: 'umd',
      },
      {
        name: pkg.name,
        file: pkg.module,
        format: 'es',
      },
    ],
    plugins: [filesize(), typescript()],
  },
];
