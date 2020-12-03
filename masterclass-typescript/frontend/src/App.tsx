import React, { useEffect, useState } from 'react';

import User from './components/User';

import api from './services/api';

interface IUsers {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data);
    })
  }, [])

  return (
    <div className="App">
      { users.map(user => <User key={user.email} user={user}/>)}
    </div>
  );
}

export default App;
