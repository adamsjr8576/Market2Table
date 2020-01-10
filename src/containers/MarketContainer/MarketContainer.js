import React from 'react';
import './MarketContainer.scss';
import { connect } from 'react-redux';
import Market from '../../Components/Market/Market.js';
import ZipCodeForm from '../ZipCodeForm/ZipCodeForm.js';

const MarketContainer = ({ markets, zipCode, path }) => {
  const marketsList = markets.map(market => {
    return (
      <Market
        key={market.id}
        id={market.id}
        marketName={market.marketname}
        favorite={market.favorite}
      />
    )
  })
  return (
    <main className="market-container-main">
      {zipCode.length === 0 && <ZipCodeForm path={path}/>}
      <section className="market-list-section">
        {marketsList}
      </section>
      <section className="markets-map-section">
        <p>MAPPPPP</p>
      </section>
    </main>
  )
}

export const mapStateToProps = state => ({
  markets: state.farmersMarkets,
  zipCode: state.zipCode
});

export default connect(mapStateToProps)(MarketContainer);
