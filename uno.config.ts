// uno.config.ts
import { colors } from '@unocss/preset-wind'
import { defineConfig, presetUno } from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

export default defineConfig({
  presets: [presetUno(), presetAnimations({ fillMode: 'both' })],
  // add js/ts files to the pipeline
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
      ],
      exclude: [
        // the default
        /\.(css|postcss|sass|scss|less|stylus|styl)($|\?)/,
        // exclude node_modules & dist folders,
        '**/node_modules/**/*',
        '**/dist/**/*',
      ],
    },
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#111',
      dark: '#1e1e1e',
      grayDark: '#313131',
      grayDarkBorder: '#444444',
      gray: '#656565',
      grayLight: '#898989',
      graySuperLight: '#d1d1d1',
      light: '#efefef',
      white: '#fff',
      primary: '#f5b759',
      primaryLight: '#f6c883',
      primarySuperLight: '#e2cdae',
      success: colors.emerald[500],
      successLight: colors.emerald[200],
      successDark: colors.emerald[800],
      warning: colors.amber[500],
      warningLight: colors.amber[200],
      warningDark: colors.amber[800],
      error: colors.red[500],
      errorLight: colors.red[200],
      errorDark: colors.red[800],
    },
    fontSize: {
      micro: ['10px', '14px'],
      small: ['14px', '20px'],
      base: ['16px', '24px'],
      large: ['20px', '28px'],
    },
    fontFamily: {
      sans: 'Helvetica Neue, Arial, Tahoma, sans-serif',
    },
  },
  // a good place to use the theme values directly
  preflights: [
    {
      // outputs the css variables for colors and font sizes
      // assigns base font styles to html and body
      getCSS: ({ theme }) => {
        let cssVariables = ''

        if (theme.colors) {
          Object.keys(theme.colors).forEach(color => {
            if (typeof theme.colors?.[color] === 'string') {
              cssVariables += `--color-${color}: ${theme.colors?.[color]};\n`
            }
          })
        }
        if (theme.fontSize) {
          Object.keys(theme.fontSize).forEach(size => {
            if (Array.isArray(theme.fontSize?.[size])) {
              cssVariables += `--font-size-${size}: ${theme.fontSize?.[size][0]};\n`
            }
          })
        }

        return `
          body, html {
            font-family: ${theme.fontFamily?.sans};
            font-size: ${theme.fontSize?.base[0]};
          }

          @media (prefers-color-scheme: dark) {
            body, html {
              background-color: ${theme.colors?.dark};
              color: ${theme.colors?.light};
            }
          }

          @media (prefers-color-scheme: light) {
            body, html {
              background-color: ${theme.colors?.white};
              color: ${theme.colors?.dark};
            }
          }

          :root {
            ${cssVariables}
          }
        `
      },
    },
  ],
})
