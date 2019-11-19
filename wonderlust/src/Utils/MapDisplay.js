import React, {useState} from 'react';
import ReactMapGl, {Marker} from 'react-map-gl'

function MapDisplay(props) {

 const token = "pk.eyJ1Ijoicm1sZWUwMDAiLCJhIjoiY2szM21qZjZ1MHRkeDNtb2IyNnFvOHFuMiJ9.2WbYxj4f5zia415x9pIYdA"

 const[viewport, setViewport] = useState({
  
     latitude: 38.442120,  
     longitude: -92.391384,
     zoom: 5,
     bearing: 0,
     pitch: 0,
     width: 900,
     height: 700,
   })

 return (
  <>
  {props.markers &&
  <ReactMapGl
   {...viewport} 
   mapboxApiAccessToken={token}
   mapStyle="mapbox://styles/rmlee000/ck36cadm04cqu1cp6uy22ci98"
   onViewportChange={viewport =>{
   setViewport(viewport)
  }}>
   {props.markers.map((place,index) => (
    <Marker
    key={index}
    latitude={parseFloat(place.experience_lat)}
    longitude={parseFloat(place.experience_long)}
    >
     <h2 style={color}>{place.experience_title}</h2>
    </Marker>
   ))}

  </ReactMapGl>
  }
  </>
 );
}

export default MapDisplay;
const color={color:"white"}