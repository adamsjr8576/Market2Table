import React from 'react';
import './Market.scss';
import { connect } from 'react-redux';
import images from '../../images/images.js';
import { toggleFavorite } from '../../actions/index.js';

const Market = ({ id, marketName, favorite, toggleFavorite }) => {
  let image;
  favorite? image = images.redChili : image = images.chili;
  return (
    <article className="market-article">
      <h1 className="market-article-name">{marketName}</h1>
      <img src={image} alt="chili icon" className="chili-icon" onClick={() => toggleFavorite(id, favorite)}/>
    </article>
  )
}

export const mapDispatchToProps = dispatch => ({
  toggleFavorite: (id, favorite) => dispatch( toggleFavorite(id, favorite) )
});

export default connect(null, mapDispatchToProps)(Market);
