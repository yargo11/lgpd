import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        tj_dark_blue: '#00384D',
        tj_light_blue: '#14697F',
        tj_light_gray: '#FAFBFC'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50',
                margin: 0,
                padding: 0,
                boxSizing: 'border-box'
            },
            h1: {
                fontSize: '3.5rem',
                fontWeight: '800',
                lineHeight: '64px'
            },
            h5: {
                fontSize: '1rem',
                fontWeight: '700',
                lineHeight: '44px'
            },
            h6: {
                fontSize: 'sm'
            }
        }
    },
    fonts: {
        heading: 'Inter, Raleway',
        body: 'Inter, Raleway'
    }
});
