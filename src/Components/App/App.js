import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Header from '../../containers/Header/Header.js';
import ZipCodeForm from '../../containers/ZipCodeForm/ZipCodeForm.js';
import MarketContainer from '../../containers/MarketContainer/MarketContainer.js';
import { farmersMarkets, marketInfo } from '../../mockData.js';


function App() {
  return (
    <div className="App">
      <Route exact path='/' render={({ location }) => {
        return <ZipCodeForm path={location.pathname}/>
      }}
      />
      <Route path='/' render={() => {
        return <Header />
      }}
      />
      <Route exact path='/markets' render={({ location }) => {
        return <MarketContainer path={location.pathname}/>
      }}
      />
    </div>
  );
}

export default App;
