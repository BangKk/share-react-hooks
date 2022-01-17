import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import Example1 from './Example1';

import './App.css';

function Home() {
  return (
    <div className="home">
      <div className="left">
        <h1>React Hooks</h1>
        <ul className="points">
          <li>
            <Link to={'/example1'}>Example 1</Link>
          </li>
          <li>
            <Link to={'/example2'}>Example 2</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="example1" element={<Example1 />} />
      </Routes>
    </div>
  );
}

export default App;
