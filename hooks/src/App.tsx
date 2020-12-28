import React, { useState, useEffect, useMemo, useCallback, useRef, useContext, useImperativeHandle, useReducer } from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]);
  
  const greeting = useCallback(
    (user: User) => alert(`Hello ${user.name}`),
    []
  );

  function focusOnInput() {
    inputRef.current?.focus();
  }

  return (
    <form action="">
      <input type="text" ref={inputRef} />
    </form>
  );
}

export default App;


// ?. = if it is null --- !. impossible to be null

//useMemo keeps a value until it changes similar to useCallback
//useRef references to an element from DOM