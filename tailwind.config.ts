import type { Config } from 'tailwindcss'

interface DaisyUIConfig {
  themes?: string[] | object[]
  darkTheme?: string
  base?: boolean
  styled?: boolean
  utils?: boolean
  prefix?: string
  logs?: boolean
  themeRoot?: string
}

type ConfigWithDaisyUI = Config & {
  daisyui?: DaisyUIConfig
}

const config: ConfigWithDaisyUI = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}
export default config
