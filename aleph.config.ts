// Config & Plugins for Aleph

import windicss from 'https://deno.land/x/aleph_plugin_windicss/plugin.ts';
// import postcssWindicss from 'https://esm.sh/postcss-windicss',
import type { Config } from 'aleph/types';

export default <Config>{
	// build: {
	// 	target: 'es2015'
	// },
	css: {
    postcss: {
      plugins: {
				'postcss-windicss': {
					config: './windi.config.ts', // by default it will try to find it in your project root
				}
			}
    }
  },
  plugins: [
		windicss
	]
}