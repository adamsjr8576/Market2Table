import React from 'react';
import './MarketPage.scss';
import { connect } from 'react-redux';
import images from '../../images/images.js';
import { toggleFavorite, controlFavorites } from '../../actions/index.js';

export const MarketPage = ({ id, markets, toggleFavorite, controlFavorites }) => {
  const market = markets.find(market => market.id === id);
  let image;
  market.favorite? image = images.redChili : image = images.chili;
  return (
    <main className="market-page-main">
      <section className="market-page-section">
        <div className="market-page-header-container">
          <h1 className="market-page-name">{market.marketname}</h1>
          <button className="favorites-button" type="button" onClick={() => {toggleFavorite(id, market.favorite); controlFavorites(market)}}><img src={image} alt="chili icon" className="chili-icon" /></button>
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
        <p>MAPPPPP</p>
      </section>
    </main>
  )
}

export const mapDispatchToProps = dispatch => ({
  toggleFavorite: (id, favorite) => dispatch( toggleFavorite(id, favorite) ),
  controlFavorites: market => dispatch( controlFavorites(market) )
});

export const mapStateToProps = state => ({
  markets: state.farmersMarkets
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketPage);
