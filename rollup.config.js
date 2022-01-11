import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: !production
	},
	plugins: [
		resolve(), // tells Rollup how to find packages in node_modules
		production && terser() // minify, but only in production
	]
};
