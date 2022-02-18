import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '64em',
  xl: '80em',
  '2xl': '96em',
})

export const theme = extendTheme({
  colors: {
    red: {
      "700": "#F60019",
    },
    gray: {
      "900": "#151515",
      "800": "#1F1F1F",
      "700": "#292929",
    }
  },
  fonts: {
    heading: 'Bebas Neue',
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.200'
      }
    }
  },
  breakpoints
})
