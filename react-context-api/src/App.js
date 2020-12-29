import React from 'react';

import CountProvider from './context/Count';
import ThemeProvider from './context/Theme';

import Counter from './components/Counter';
import Mirror from './components/Mirror';
import Container from './components/Container';

function App() {
  return (
    <ThemeProvider>
      <CountProvider>
        <Container>
          <Counter />

          <hr />

          <Mirror />
        </Container>
      </CountProvider>
    </ThemeProvider>
  );
}

export default App;
