import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './ZipCodeForm.scss';
import { farmersMarkets, marketInfo } from '../../mockData.js';
import { addMarkets, addZipCode } from '../../actions/index.js';

class ZipCodeForm extends Component {
  constructor() {
    super()
    this.state = {
      zipCode: '',
      hasError: false
    }
  }

  handleZipCodeChange = (e) => {
    if (e.target.value.length > 5) {
      e.target.value = e.target.value.slice(0, 5);
    }
    this.setState({ [e.target.name]: e.target.value })
  }

  handleZipCodeSubmit = () => {
    this.setState({ zipCode: ''} );
    let farmersMarketsInfo = farmersMarkets.map(market => {
      const marketNameSplit = market.marketname.split(' ');
      marketNameSplit.shift();
      market.marketname = marketNameSplit.join(' ');
      const split1 = marketInfo.GoogleLink.split('=').pop();
      const split2 = split1.split('%');
      const lat = split2[0];
      const long = split2[2].slice(-10);
      const marketCopy = {...marketInfo, latitude: lat, longitude: long}
      return {...market, ...marketCopy}
    });
    this.props.addMarkets(farmersMarketsInfo);
    this.props.addZipCode(this.state.zipCode);
  }

  render() {
    const opacity = 0;
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
          <button onClick={this.handleZipCodeSubmit} className="zip-code-button" type="button">Find!</button>
        </form>
      </main>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  addMarkets: (markets) => dispatch( addMarkets(markets) ),
  addZipCode: (zipCode) => dispatch( addZipCode(zipCode) )
});

export const mapStateToProps = state => ({
  zipCode: state.zipCode
});

export default connect(mapStateToProps, mapDispatchToProps)(ZipCodeForm);
