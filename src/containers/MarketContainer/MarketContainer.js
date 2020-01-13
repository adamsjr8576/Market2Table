import React from 'react';
import './MarketContainer.scss';
import { connect } from 'react-redux';
import Market from '../../Components/Market/Market.js';
import ZipCodeForm from '../ZipCodeForm/ZipCodeForm.js';
import images from '../../images/images.js';

export const MarketContainer = ({ markets, zipCode, favorites, path }) => {
  let favoritesDisplay;
  let marketsToMap = markets;
  if (path.includes('favorites')) {
    marketsToMap = favorites
  }
  const marketsList = marketsToMap.map(market => {
    let image;
    market.favorite? image = images.redChili : image = images.chili;
    return (
      <Market
        key={market.id}
        market={market}
        image={image}
      />
    )
  });
  if (marketsToMap.length === 0) {
    favoritesDisplay = <h1 className="favorites-message">You have no favorites selected!</h1>;
  } else {
    favoritesDisplay = marketsList;
  }
  return (
    <main className="market-container-main">
      {zipCode.length === 0 && <ZipCodeForm path={path}/>}
      <section className="market-list-section">
        {favoritesDisplay}
      </section>
      <section className="markets-map-section">
        <p>MAPPPPP</p>
      </section>
    </main>
  )
}

export const mapStateToProps = state => ({
  markets: state.farmersMarkets,
  zipCode: state.zipCode,
  favorites: state.favorites
});

export default connect(mapStateToProps)(MarketContainer);
