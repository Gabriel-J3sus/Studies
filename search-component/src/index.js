import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';

import Theme from './styles/theme';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={Theme}>
      <ColorModeProvider value="light" options={{ initialColorMode:"light" }}>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
