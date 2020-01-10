import React from 'react';
import { connect } from 'react-redux';
import Market from '../../Components/Market/Market.js';

const MarketContainer = ({ markets }) => {
  const marketsList = markets.map(market => {
    return (
      <Market
        key={market.id}
        id={market.id}
        marketName={market.marketname}
      />
    )
  })
  return (
    <main className="market-container-main">
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
