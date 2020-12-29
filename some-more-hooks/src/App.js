import React, { useState } from 'react';

import Effect from './examples/Effect';

function App() {
  const [hidden, setHidden] = useState(false);

  setTimeout(() => {
    setHidden(true);
  }, 3000);
  
  return (
    <>
      {!hidden && <Effect />}
    </>
  );
}

export default App;
