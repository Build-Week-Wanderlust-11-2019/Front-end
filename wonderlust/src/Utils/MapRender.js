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
 
  

    render(){   
      

      const { viewport} = this.state
      if(this.props.coords.lat){
       viewport.latitude = this.props.coords.lat
       viewport.longitude = this.props.coords.lng
       }
   
      return (
       <div >
       <MapGL style={mapviewstyle}
       {...viewport}
       onViewportChange={(viewport) => this.setState({...viewport})}
       mapStyle="mapbox://styles/mapbox/streets-v11"
       mapboxApiAccessToken={token}>
       <div className="nav" style={navStyle}>
         <NavigationControl onViewportChange={(viewport) => this.setState({viewport})}/>
       </div>
     </MapGL>
     </div>
      )
    }
}

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
const mapviewstyle = {
 width:"100%"
}
export default SearchableMap;