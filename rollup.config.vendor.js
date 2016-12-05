// rollup.config.vendor.js
import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
 entry: 'src/vendor.ts',
 dest: 'dist/vendor.es2015.js',
 format: 'iife',
 moduleName: 'vendor',
 plugins: [
   typescript(),
   alias({ vuejs: __dirname + '/node_modules/vue' }),
   resolve({ jsnext: true,
             main: true,
             browser: true }),
 ]
}
