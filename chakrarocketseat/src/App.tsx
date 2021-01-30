import React from 'react';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';

import { newtheme } from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={newtheme} resetCSS>
      <ColorModeProvider value="dark" options={{ initialColorMode:"dark" }}>
        <h1>hello</h1>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
