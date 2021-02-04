import { theme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

const customTheme = {
    ...theme,
    breakpoints: createBreakpoints({ sm: '30em', md: '48em', lg: '62em', xl: "80em"}),
    
    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Roboto, system-ui, sans-serif',
        mono: 'Menlo, monospace',
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 400,
        medium: 600,
        bold: 700,
    },
    fontSizes: {
        ...theme.fontSizes,
        sm: '12px',
        md: '16px'
    },
    radii: {
        ...theme.radii,
        sm: '8px',
        md: '100%',
    },
    colors: {
        ...theme.colors,
        purple: {
            ...theme.colors.purple,
            500: '#8257e5',
        },
        gray: {
            ...theme.colors.gray,
            300: '#e1e1e6',
            600: '#87868b',
            700: '#202024',
            800: '#121214',
            900: '#141316'
        }
    }
}

export default customTheme;