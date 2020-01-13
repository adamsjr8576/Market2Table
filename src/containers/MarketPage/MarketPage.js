import React from 'react';
import './MarketPage.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import images from '../../images/images.js';
import { toggleFavorite, controlFavorites } from '../../actions/index.js';
import MapContainer from '../MapContainer/MapContainer.js';

export const MarketPage = ({ id, markets, favorites, toggleFavorite, controlFavorites }) => {
  let market = markets.find(market => market.id === id);
  if (market === undefined) {
    market = favorites.find(market => market.id === id);
  }
  let image;
  market.favorite? image = images.redChili : image = images.chili;
  return (
    <main className="market-page-main">
      <section className="market-page-section">
        <div className="market-page-header-container">
          <h1 className="market-page-name">{market.marketname}</h1>
          <button className="favorites-button" type="button" onClick={() => {controlFavorites(market); toggleFavorite(id)}}><img src={image} alt="chili icon" className="chili-icon" /></button>
        </div>
        <div className="market-page-info-container">
          <h2 className="market-page-header">Address:</h2>
          <p className="products-p">{market.Address}</p>
        </div>
        <div className="market-page-info-container">
          <h2 className="market-page-header">Products:</h2>
          <p className="products-p">{market.Products}</p>
        </div>
        <div className="market-page-info-container">
          <h2 className="market-page-header">Schedule:</h2>
          <p className="products-p">{market.Schedule}</p>
        </div>
        <a href={market.GoogleLink}>Google Maps</a>
      </section>
      <section className="markets-map-section">
        <MapContainer market={market}/>
      </section>
    </main>
  )
}

export const mapDispatchToProps = dispatch => ({
  toggleFavorite: (id) => dispatch( toggleFavorite(id) ),
  controlFavorites: market => dispatch( controlFavorites(market) )
});

export const mapStateToProps = state => ({
  markets: state.farmersMarkets,
  favorites: state.favorites
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketPage);

MarketPage.propTypes = {
  id: PropTypes.string,
  markets: PropTypes.arrayOf(PropTypes.object),
  favorites: PropTypes.array,
  toggleFavorite: PropTypes.func,
  controlFavorites: PropTypes.func
}
