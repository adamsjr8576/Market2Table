import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import './Header.scss';
import images from '../../images/images.js';
import { removeZipCode } from '../../actions/index.js';

export const Header = ({ zipCode, favorites, removeZipCode }) => {
  const favoritesNum = favorites.length;
  return (
    <header className="main-header">
      <section className="logo-zip-header-section">
        <img src={images.m2tLogo} alt="Market 2 Table logo icon" className="logo" />
        <Route exact path="/markets" render={() => {
          return <button className="header-button" type="button" onClick={() => removeZipCode()}>Zip Code: {zipCode}</button>
        }}
        />
        <Route exact path={['/markets/:id', '/favorites']} render={() => {
          return (
            <Link to='/markets' className="header-button-link">
              <button className="header-link-button" type="button">Back</button>
            </Link>
          )
        }}
        />
      </section>
      <h1 className="header-title">Market2Table</h1>
      <section className="favorites-home-header-section">
        <Route path={['/markets', '/favorites']} render={() => {
          return (
            <Link to='/favorites' className="header-button-link">
              <button className="header-link-button">Favorites: {favoritesNum}</button>
            </Link>)
          }}
        />
        <Route path={['/markets', '/favorites']} render={() => {
          return (
            <Link to='/' className="header-button-link">
              <button className="header-link-button" onClick={() => removeZipCode()}>Home</button>
            </Link>
          )
          }}
        />
      </section>
    </header>
  )
}

export const mapStateToProps = state => ({
  zipCode: state.zipCode,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  removeZipCode: () => dispatch( removeZipCode() )
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
