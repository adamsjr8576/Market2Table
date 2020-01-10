import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import './Header.scss';
import images from '../../images/images.js';
import { removeZipCode } from '../../actions/index.js';

const Header = ({ zipCode, markets, removeZipCode }) => {
  let favorites = 0;
  if (zipCode.length > 0) {
    favorites = markets.filter(market => market.favorite).length;
  }
  return (
    <header className="main-header">
      <section className="logo-zip-header-section">
        <img src={images.m2tLogo} alt="Market 2 Table logo icon" className="logo" />
        <Route exact path="/markets" render={() => {
          return <button className="header-button" type="button" onClick={() => removeZipCode()}>Zip Code: {zipCode}</button>
        }}
        />
      </section>
      <h1 className="header-title">Market2Table</h1>
      <section className="favorites-home-header-section">
        <button className="header-button" type="button">Favorites: {favorites}</button>
      </section>
    </header>
  )
}

export const mapStateToProps = state => ({
  zipCode: state.zipCode,
  markets: state.farmersMarkets
});

export const mapDispatchToProps = dispatch => ({
  removeZipCode: () => dispatch( removeZipCode() )
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
