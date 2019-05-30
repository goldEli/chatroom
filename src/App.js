import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'antd/dist/antd.css';

import Dashboard from './Container/Dashboard/Dashboard';
import Store from "./Container/Dashboard/Store"

function App() {
  return (
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
