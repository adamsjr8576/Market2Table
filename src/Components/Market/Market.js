import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Market.scss';
import { connect } from 'react-redux';
import images from '../../images/images.js';
import { toggleFavorite, controlFavorites } from '../../actions/index.js';

export const Market = ({ market, image, toggleFavorite, controlFavorites }) => {
  return (
      <article className="market-article">
        <Link to={`/markets/${market.id}`} className="market-link-to-page">
          <h1 className="market-article-name">{market.marketname}</h1>
        </Link>
        <button className="favorites-button" type="button" onClick={() => {toggleFavorite(market.id, market.favorite); controlFavorites(market)}}><img src={image} alt="chili icon" className="chili-icon" /></button>
      </article>
  )
}

export const mapDispatchToProps = dispatch => ({
  toggleFavorite: (id, favorite) => dispatch( toggleFavorite(id, favorite) ),
  controlFavorites: market => dispatch( controlFavorites(market) )
});

export default connect(null, mapDispatchToProps)(Market);

Market.propTypes = {
  market: PropTypes.object,
  images: PropTypes.string,
  toggleFavorite: PropTypes.func,
  controlFavorites: PropTypes.func
}
