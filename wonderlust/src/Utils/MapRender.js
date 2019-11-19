import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React, { Component } from 'react'
import MapGL, {NavigationControl} from "react-map-gl";

const token = "pk.eyJ1Ijoicm1sZWUwMDAiLCJhIjoiY2szM21qZjZ1MHRkeDNtb2IyNnFvOHFuMiJ9.2WbYxj4f5zia415x9pIYdA"

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
        width: 500,
        height: 300,
      }
    };
  }
 
  

    render(){   
      

      const { viewport} = this.state
      if(this.props.lat){
       viewport.latitude = this.props.lat
       viewport.longitude = this.props.long
       }
   
      return (
       <div >
       <MapGL 
       {...viewport}
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

export default SearchableMap;