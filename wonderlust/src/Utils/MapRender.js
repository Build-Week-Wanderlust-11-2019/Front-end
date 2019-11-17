import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React, { Component } from 'react'
import MapGL, {NavigationControl} from "react-map-gl";

const token = ""

class SearchableMap extends Component {

constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 17.442120,  
        longitude: 78.391384,
        zoom: 8,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: 500,
      }
    };
  }

  // mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport}
    })
  }
  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

    render(){   
      

      const { viewport} = this.state
      if(this.props.coords.lat){
       viewport.latitude = this.props.coords.lat
       viewport.longitude = this.props.coords.lng
       }
   
      return (
       <MapGL
       {...viewport}
       onViewportChange={(viewport) => this.setState({viewport})}
       mapStyle="mapbox://styles/mapbox/streets-v10"
       mapboxApiAccessToken={token}>
       <div className="nav" style={navStyle}>
         <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/>
       </div>
     </MapGL>
      )
    }
}

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
export default SearchableMap;