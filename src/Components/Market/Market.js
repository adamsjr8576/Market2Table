import React from 'react';
import { Link } from 'react-router-dom';
import './Market.scss';
import { connect } from 'react-redux';
import images from '../../images/images.js';
import { toggleFavorite } from '../../actions/index.js';

const Market = ({ id, marketName, favorite, toggleFavorite }) => {
  let image;
  favorite? image = images.redChili : image = images.chili;
  return (
      <article className="market-article">
        <Link to={`/markets/${id}`} className="market-link-to-page">
          <h1 className="market-article-name">{marketName}</h1>
        </Link>
        <button className="favorites-button" type="button" onClick={() => toggleFavorite(id, favorite)}><img src={image} alt="chili icon" className="chili-icon" /></button>
      </article>
  )
}

export const mapDispatchToProps = dispatch => ({
  toggleFavorite: (id, favorite) => dispatch( toggleFavorite(id, favorite) )
});

export default connect(null, mapDispatchToProps)(Market);
