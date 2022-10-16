import { extendTheme } from '@chakra-ui/react'
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}
const theme = extendTheme({ config })

/* export default {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#f7fafc',
        // ...
        900: '#171923',
      },
      orange: {
        100: '#f7b76e',
        500: '#eca452'
      }
    },
  } */

export default theme
