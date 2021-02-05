import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';

import App from './App';
import Theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={Theme}>
      <ColorModeProvider value="dark" options={{ initialColorMode: 'dark' }}>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);