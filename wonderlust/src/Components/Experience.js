import React ,{ useState } from 'react';
import Weather from '../Utils/Weather'
import axios from 'axios'
import {
 Card, CardImg, CardText, CardBody,
 CardTitle, CardSubtitle, Button
} from 'reactstrap';

function Experience(props) {
let weather
const [weatherImage, setWeatherImage] = useState()
  
 //   if(props.data.experience_lat && props.data.experience_lat.charAt(2) === '.'){

 //     axios 
 //     .get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${props.data.experience_lat},${props.data.experience_long}`)
 // .then(res => {
 // axios
 // .get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${res.data[0].woeid}`)
 // .then(res => {
 //   weather = res.data
 //   console.log(weather)
 // })
 // })
 // .catch(err => {
 //   console.log(err)
 // })
 //   }








 return (
  <div>
   {/*display experience img, description, date 
   <img src={} alt="destination >"
   <div>
     description & date
   </div>
   <button>Delete</button>
   */}
   {props.data &&
   <Card>
    <CardImg top width="100%" src={props.data.image} alt="Card image cap" />
    <CardBody>
     <CardTitle>{props.data.experience_title}</CardTitle>
     <CardSubtitle>Organizer - {props.data.org_Name} Date - {props.data.date}</CardSubtitle>
     <CardText>{props.data.experience_desc}</CardText>
    </CardBody>
    {/* <Weather weather={weather.consolidated_weather[0].weather_state_abbr}/> */}
   </Card>
   }
  </div>
 );
}


export default Experience;
const expCard = {
 width:"200px",
 border:"1px solid black",
 padding:"20px",
 margin:"20px",

}