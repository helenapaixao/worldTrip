import {extendTheme } from "@chakra-ui/react"


export const theme = extendTheme({
  colors: {
    highlight: {
      "500": '#FFBA08'
    },
    dark: {
      "black": '#000000',
      "headings": '#47585B',
      "info": '#999999'
    },
    light: {
      "white": '#FFFFFF',
      'headingsLight': '#F5F8FA',
      "infoLight": '#DADADA'
    }
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',

  },
  styles: {
    global: {
      body: {
        bg: "light.white",

      }
    }
  }
})

