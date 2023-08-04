import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Chat from './pages/Chat';

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="" element={<Chat />}></Route>
    </Routes>
  );
}

export default App;
