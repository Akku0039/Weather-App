import React,{useState} from "react";
import Summer from "./images/summer.jpg";

const App = () => {

const [latitude,setLatitude] = useState(0)
const [longitude, setLongitude] = useState(0)
const [hemisphere, setHemisphere] = useState("")
const [month,setMonth] = useState(new Date().getMonth()+1) 

  function geoLocation(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)

            console.log(latitude)
            console.log(longitude)

            if(position.coords.latitude>0){
              setHemisphere("Northen Hemisphere")
            }else if(position.coords.latitude<0){
              setHemisphere("Southern Hemisphere")
            }else{
              setHemisphere("Equator")
            }
    })
  }
}

geoLocation()

return(
    <div>
      <h1>React Geolocation</h1>
      <h2>Latitude :{latitude}</h2>
      <h2>Longitude: {longitude}</h2>
      <h2>Hemisphere: {hemisphere}</h2>
      <button onClick={geoLocation} >Get Location</button> 
      {
        hemisphere && (hemisphere=="Northen Hemisphere" && month>=4 && month<=10) ||
        (hemisphere=="Southern Hemisphere" && month<=3 && month>=9) &&
        <div>
          <h1> Welcome to Summer Seasons</h1>
          <img src={Summer} alt="Summer Season"/>
        </div>
      } 
    </div>
  )

}


export default App;
