import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header/Header.js';
import ZipCodeForm from '../../containers/ZipCodeForm/ZipCodeForm.js';
import MarketContainer from '../../containers/MarketContainer/MarketContainer.js';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => {
        return <ZipCodeForm />
      }}
      />
      <Route path='/' render={() => {
        return <Header />
      }}
      />
      <Route exact path='/markets' render={() => {
        return <MarketContainer />
      }}
      />
    </div>
  );
}

export default App;
