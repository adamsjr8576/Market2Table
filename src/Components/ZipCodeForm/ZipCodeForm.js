import React, { Component } from 'react';
import './ZipCodeForm.scss';

class ZipCodeForm extends Component {
  constructor() {
    super()
    this.state = {
      zipCode: ''
    }
  }

  handleZipCodeChange = (e) => {
    if (e.target.value.length > 5) {
      e.target.value = e.target.value.slice(0, 5);
    }
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const opacity = 0;
    return (
      <main className="zip-code-container" style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, ${opacity}), rgba(255, 255, 255, ${opacity}))` }}>
        <form className="zip-code-form">
          <label className="zip-code-input-label" htmlFor="zipCode">
            Enter zip code to find farmers markets near you:
          </label>
          <input onChange={(e) => this.handleZipCodeChange(e)} value={this.state.zipCode} className="zip-code-input" type="number" placeholder="Zip Code..." id="zipCode" name="zipCode"/>
          <button className="zip-code-button" type="button">Find!</button>
        </form>
      </main>
    )
  }
}

export default ZipCodeForm;
