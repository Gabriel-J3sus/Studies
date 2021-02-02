import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App';
import Theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={Theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);