import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import Theme from './styles/theme';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={Theme}>
      <ColorModeScript initialColorMode="light"/>
        <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
