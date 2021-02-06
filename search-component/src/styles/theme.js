import { theme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

const customTheme = {
  ...theme,
  breakpoints: createBreakpoints({sm: '20em', md: "40em", lg: "60"}),
  fonts: {
    body: 'Playfair Display, serif',
    heading: 'Playfair Display, serif',
    mono: 'Playfair Display, serif',
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 500,
    medium: 600,
    bold: 700,
  },
}

export default customTheme;
