import React from 'react';

import Header from './components/Header/Header';
import User from './components/Users/Users';
import Aux from './hoc/hoc';

import './App.css'
function App() {
  return (
    <Aux>
      <Header />
      <User />
    </Aux>
  );
}

export default App;
