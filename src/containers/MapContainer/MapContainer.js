import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '700px',
  height: '500px',
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
    } else {
      const { markets } = this.props
      return {
       lat: markets[0].latitude,
       lng: markets[0].longitude
      }
    }
  }

  render() {
    const markers = this.setMarkers();
    const center = this.setCenter();
    console.log(center);
    return (
      <Map
        google={this.props.google}
        zoom={11}
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
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBOCAFIBU1dbEoO0GYU73BhetuwHLzM5gA'
})(MapContainer);
