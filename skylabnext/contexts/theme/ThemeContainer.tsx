import React from 'react';
import { ColorModeProvider, ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import theme from '../../styles/theme';

const ThemeContainer: React.FC = ({ children }) => {
    return (
        <ChakraProvider theme={theme} resetCSS={true}>
            <ColorModeProvider value='dark' options={{ initialColorMode: 'dark' }}>
                    {children}    
            </ColorModeProvider>
        </ChakraProvider>
    );
}

export default ThemeContainer;