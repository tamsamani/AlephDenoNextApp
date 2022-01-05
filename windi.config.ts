import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	darkMode: 'class',
	shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
	},
  extract: {
    // accepts global file paths relative to project root
    include: [
      'index.html',
      './pages/**/*.{jsx,tsx,mdx}',
			'./components/**/*.{jsx,tsx,mdx}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
})