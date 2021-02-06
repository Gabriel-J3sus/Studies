import { theme } from '@chakra-ui/react';

const customTheme = {
  ...theme,

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
