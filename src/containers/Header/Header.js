import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.scss';
import images from '../../images/images.js';
import { removeZipCode, removeMarkets } from '../../actions/index.js';

export const Header = ({ zipCode, favorites, removeZipCode, removeMarkets }) => {
  const favoritesNum = favorites.length;
  return (
    <header className="main-header">
      <section className="logo-zip-header-section">
        <img src={images.m2tLogo} alt="Market 2 Table logo icon" className="logo" />
        <Route exact path="/markets" render={() => {
          return <button className="header-button" type="button" onClick={() => {removeZipCode(); removeMarkets();}}>Zip Code: {zipCode}</button>
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
              <button className="header-link-button">Favorites: {favoritesNum} <img src={images.redChili} alt="chili icon" className="red-chili-icon" /></button>
            </Link>)
          }}
        />
        <Route path={['/markets', '/favorites']} render={() => {
          return (
            <Link to='/' className="header-button-link">
              <button className="header-link-button" onClick={() => {removeZipCode(); removeMarkets();}}>Home</button>
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
  removeZipCode: () => dispatch( removeZipCode() ),
  removeMarkets: () => dispatch( removeMarkets() )
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {
  zipCode: PropTypes.string,
  favorites: PropTypes.array,
  removeZipCode: PropTypes.func
}
