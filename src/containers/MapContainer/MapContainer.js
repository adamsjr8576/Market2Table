import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';
import './MapContainer.scss';
import PropTypes from 'prop-types';

const mapStyles = {
  width: '680px',
  height: '480px',
  borderRadius: '20px',
  border: '3px solid black'
};

export class MapContainer extends Component {
  constructor() {
    super()
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  onMarkerClick = (props, marker, e) =>
   this.setState({
     selectedPlace: props,
     activeMarker: marker,
     showingInfoWindow: true
   });

  onClose = props => {
   if (this.state.showingInfoWindow) {
     this.setState({
       showingInfoWindow: false,
       activeMarker: null
     });
   }
  };

  setMarkers = () => {
    if (this.props.markets === undefined) {
      const { market } = this.props
      return (<Marker
          onClick={this.onMarkerClick}
          name={market.marketname}
          position={{ lat: market.latitude, lng: market.longitude }}
          key={market.id}
        />)
    } else {
      const { markets } = this.props
      return markets.map(market => {
        return (
          <Marker
              onClick={this.onMarkerClick}
              name={market.marketname}
              position={{ lat: market.latitude, lng: market.longitude }}
              key={market.id}
            />
        )
      })
    }
  }

  setCenter = () => {
    if (this.props.markets === undefined) {
      const { market } = this.props
      return {
        lat: this.props.market.latitude,
        lng: this.props.market.longitude
      }
    }
    if (this.props.path.includes('favorites')) {
      return {
        lat: '39.270018',
        lng: '-97.970908'
      }
    } else {
      const { markets } = this.props
      return {
       lat: markets[0].latitude,
       lng: markets[0].longitude
      }
    }
  }

  setFavoritesView = () => {
    if (this.props.path && this.props.path.includes('favorites')) {
      return 4
    } else {
      return 11
    }
  }

  render() {
    const zoom = this.setFavoritesView();
    const markers = this.setMarkers();
    const center = this.setCenter();
    return (
      <div id='mapBox'>
        <Map
          google={this.props.google}
          zoom={zoom}
          style={mapStyles}
          initialCenter={center}
        >
          {markers}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer);

MapContainer.propTypes = {
  markets: PropTypes.arrayOf(PropTypes.object),
  market: PropTypes.object,
  path: PropTypes.string
}
