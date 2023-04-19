import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';


export default {
	input: 'src/main.ts',
	output: {
		file: './main.js',
		format: 'cjs'
	},
	plugins: [
		nodeResolve(),
		commonjs({
			extensions:['.js','.json']
		})
	]
}