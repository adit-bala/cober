import { extendTheme } from '@chakra-ui/react'
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    green: '#52e3b5',
    blue: '#5657ff',
    gray: {
      50: '#f7fafc',
      // ...
      900: '#171923',
    },
    },
fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
    },
}
const theme = extendTheme({ config })

export default theme