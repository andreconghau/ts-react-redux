import React from 'react';

import './App.css';
import { UserAdd } from './components/users/Add';
import { UserList } from './components/users/List';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <UserAdd />
      <UserList />
    </div>
  );
}

export default App;
