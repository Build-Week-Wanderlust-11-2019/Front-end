import React, {useState,useEffect} from 'react';
import ReactMapGl, {Marker, Popup} from 'react-map-gl'
import mapMarker from '../Assets/mapMarker.png'
function MapDisplay(props) {

 const token = "pk.eyJ1Ijoicm1sZWUwMDAiLCJhIjoiY2szM21qZjZ1MHRkeDNtb2IyNnFvOHFuMiJ9.2WbYxj4f5zia415x9pIYdA"
 
 const[viewport, setViewport] = useState({
 
     latitude: 29.8946952,  
     longitude: -81.3145395,
     zoom: 5,
     bearing: 0,
     pitch: 0,
     width: window.innerWidth,
     height:"100vh"

   })

   
   function getWindowWidth(){
   setViewport({...viewport,
    width:window.innerWidth})
   }
   
   useEffect(() => {
    window.addEventListener('resize', getWindowWidth)
   
   },[])

   const[clickedExp,setClickedExp]= useState(null)

 return (
  <>
  {props.markers &&
  <div style={fixWidth}>
   
  
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
      
       <button style={transparent} onClick={(e) => {
        e.preventDefault();
        setClickedExp(place)
       }}>
        <img className="marker" src={mapMarker} alt="experience marker" />
        </button>
      
     </Marker>
    ))} 
    {clickedExp && 
    <Popup 
    latitude={parseFloat(clickedExp.experience_lat)}
    longitude={parseFloat(clickedExp.experience_long)}
    onClose={() => {
     setClickedExp(null)
    }}
    >

     <div style={pop}>
     
      <img style={imgStyle} src={clickedExp.image} alt="experience" />
      <h3>{clickedExp.experience_title}</h3>
      <p>{clickedExp.experience_desc}</p>

     </div>
    </Popup>

    }
   </ReactMapGl>
   </div>
 
  }
  </>
 );
}

export default MapDisplay;
const color={color:"white"}

const fixWidth= {
 overflow:"hidden",
 margin:"0 auto",
}
const transparent ={
 background:"rgba(0,0,0,0)",
 border:"none"
}
const imgStyle={
 width:"100",
 height:"75px"
}
const pop = {
width:"200px"
}