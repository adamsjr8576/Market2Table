import React from 'react';
import './App.scss';
import Header from '../Header/Header.js';
import ZipCodeForm from '../ZipCodeForm/ZipCodeForm.js';

function App() {
  return (
    <div className="App">
      <ZipCodeForm />
      <Header />
    </div>
  );
}

export default App;
