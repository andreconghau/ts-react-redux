import React, { useEffect } from 'react';

import './App.css';
import { UserAdd } from './components/users/Add';
import { UserList } from './components/users/List';
import { UserListThunk } from './components/users/ListThunk';
import { useAppDispatch } from './store/store';
import { userFetch } from './store/features/UserThunkSlice';

function App() {
  const dispath = useAppDispatch();
  useEffect(() => {
    dispath(userFetch());
  });
  return (
    <div className="App">
      <header className="App-header"></header>
      <UserAdd />
      <UserList />
      <hr />
      <h1>Redux Thunk</h1>
      <UserListThunk />
    </div>
  );
}

export default App;
