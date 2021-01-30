import React from "react";
import { ChakraProvider } from '@chakra-ui/react';

import Form from "./Form";

function App() {
  return (
    <ChakraProvider resetCSS>
      <Form />
    </ChakraProvider>
  );
}

export default App;
