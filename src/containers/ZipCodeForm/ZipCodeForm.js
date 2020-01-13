import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ZipCodeForm.scss';
import { farmersMarkets, marketInfo } from '../../mockData.js';
import { addMarkets, addZipCode, addFavorites } from '../../actions/index.js';

export class ZipCodeForm extends Component {
  constructor() {
    super()
    this.state = {
      zipCode: '',
      hasError: false
    }
  }

  componentDidMount = () => {
    var marketsFromStorage = localStorage.getItem('favorites');
    var parsedMarkets = JSON.parse(marketsFromStorage);
    if (parsedMarkets !== null) {
      this.props.addFavorites(parsedMarkets);
    }
  }

  handleZipCodeChange = (e) => {
    if (e.target.value.length > 5) {
      e.target.value = e.target.value.slice(0, 5);
    }
    this.setState({ [e.target.name]: e.target.value })
  }

  handleZipCodeSubmit = favorites => {
    const { addMarkets, addZipCode } = this.props;
    if(this.state.zipCode.length === 5) {
      this.setState({ zipCode: ''} );
      const farmersMarketsCopy = [...farmersMarkets];
      let farmersMarketsInfo = farmersMarketsCopy.map(market => {
        const marketNameSplit = market.marketname.split(' ');
        if (marketNameSplit[0].includes('.')) {
          marketNameSplit.shift();
          market.marketname = marketNameSplit.join(' ');
        }
        market.favorite = false;
        let marketInfoCopy = {...marketInfo};
        const split1 = marketInfoCopy.GoogleLink.split('=').pop();
        const split2 = split1.split('%');
        const lat = split2[0];
        const long = split2[2].slice(-10);
        const marketCopy = {...marketInfoCopy, latitude: lat, longitude: long}
        return {...market, ...marketCopy}
      });
        const updatedFavorites = farmersMarketsInfo.map(market => {
          if (favorites.length) {
            const objectCheck = favorites.find(favorite => favorite.id === market.id);
            if (objectCheck) {
              return objectCheck
            } else {
              return market
            }
          } else {
            return market
          }
        });
      addMarkets(updatedFavorites);
      addZipCode(this.state.zipCode);
    }
  }

  render() {
    let opacity = 0;
    if(this.props.path.includes('markets')) {
      opacity = .9;
    }
    if (this.props.zipCode.length > 0) {
      return (
        <Redirect to='/markets' />
      )
    }
    return (
      <main className="zip-code-container" style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, ${opacity}), rgba(255, 255, 255, ${opacity}))` }}>
        <form className="zip-code-form">
          <label className="zip-code-input-label" htmlFor="zipCode">
            Enter zip code to find farmers markets near you:
          </label>
          <input onChange={(e) => this.handleZipCodeChange(e)} value={this.state.zipCode} className="zip-code-input" type="number" placeholder="Zip Code..." id="zipCode" name="zipCode"/>
          <button onClick={() => this.handleZipCodeSubmit(this.props.favorites)} className="zip-code-button" type="button">Find!</button>
        </form>
      </main>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addMarkets: markets => dispatch( addMarkets(markets) ),
  addZipCode: zipCode => dispatch( addZipCode(zipCode) ),
  addFavorites: favorites => dispatch( addFavorites(favorites) )
});

export const mapStateToProps = state => ({
  zipCode: state.zipCode,
  favorites: state.favorites
});

export default connect(mapStateToProps, mapDispatchToProps)(ZipCodeForm);

ZipCodeForm.propTypes = {
  addMarkets: PropTypes.func,
  addZipCode: PropTypes.func,
  addFavorites: PropTypes.func,
  zipCode: PropTypes.string,
  favorites: PropTypes.array,
  path: PropTypes.string
}
