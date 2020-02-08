<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Chore from "./components/Chore";

function App() {
  return (
    <>
      <Header />
      <Chore status="open" label="Teste" value="20" />
      <Footer />
    </>
>>>>>>> dev
  );
}

export default App;
